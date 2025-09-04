"use strict";

import * as dmencu from "./types-dud";
import * as miniTools from "mini-tools";
import {Context, MenuInfoBase, Request, Response, OptsClientPage, TableDefinition, 
        TableContext, MenuInfo, MenuDefinition, MenuInfoWScreen } from "./types-dud";
import {defConfig} from "./def-config"
import {procedures} from "./procedures-dud"

/* tablas ua */
import { viviendas                   } from './table-viviendas';
import { visitas                     } from './table-visitas';
import { personas                    } from './table-personas';
import { visitas_sup                 } from './table-visitas_sup';
import { personas_sup                } from './table-personas_sup';
import { datos_control               } from './table-datos_control';
import { relevamientos               } from "./table-relevamientos";
import { muestras                    } from "./table-muestras";
import { muestra_manzanas            } from "./table-muestra_manzanas";
import { proyectos_estadisticos      } from "./table-proyectos_estadisticos";

const APP_DM_VERSION="#24-08-12";

export type Constructor<T> = new(...args: any[]) => T;
export function emergeAppdud<T extends Constructor<dmencu.AppAppDmEncuType>>(Base:T){
  return class Appdud extends Base{
    constructor(...args:any[]){ 
        super(args);
    }
    
    configStaticConfig(){
        super.configStaticConfig();
        this.setStaticConfig(defConfig);
    }

    async getProcedures(){
        var parentProc = await super.getProcedures()
        return parentProc.concat(procedures);
    }

    addSchrödingerServices(mainApp:dmencu.Express, baseUrl:string){
        let be=this;
        super.addSchrödingerServices(mainApp, baseUrl);
        //permito levantar mis imagenes en aplicaciones dependientes
        //be.app.use('/img', express.static('node_modules/dmencu/dist/unlogged/unlogged/img'))
    }
    clientIncludes(req:Request, hideBEPlusInclusions:OptsClientPage){
        return super.clientIncludes(req, hideBEPlusInclusions).concat([
            { type: 'js', src: 'client/dud.js' },
            { type: 'js', src: 'my-bypass-formulario.js' },
            { type: 'js', src: 'my-render-formulario.js' }
        ])
    }
    createResourcesForCacheJson(parameters:Record<string,any>){
        var be = this;
        var jsonResult:any = super.createResourcesForCacheJson(parameters);
        jsonResult.version = APP_DM_VERSION;
        jsonResult.appName = 'dud';
        jsonResult.cache=jsonResult.cache.concat([
            "my-render-formulario.js",
            'my-bypass-formulario.js'
        ])
        return jsonResult
    }
    getColorsJson(sufijo:'_test'|'_capa'|''){
        let miSufijo: '_prod'|'_test'|'_capa' = sufijo || '_prod';
        let coloresEntornos = {
            "_prod":"#067DB5",
            "_test":"#C47208",
            "_capa":"#880996",
        }
        return {
            "start_url": "../campo",
            "display": "standalone",
            "theme_color": "#3F51B5",
            "background_color": coloresEntornos[miSufijo]
        }
    }
    override getMenuControles(context:Context){
        var menuControles =super.getMenuControles(context);
        return menuControles
    }

    getMenu(context:Context){
        let menu = super.getMenu(context);
        if(this.config.server.policy!='web'){
            menu.menu.splice(0,0,
                {menuType:'table', name:'muestras'},
                
            )
            let menuConfig = menu.menu.find((item)=>item.name == 'configurar')!
            menuConfig.menuContent.push(
                {menuType:'table', name:'relevamientos'},
                {menuType:'table', name:'proyectos_estadisticos'}
            )
        }
        return menu;
    }
    prepareGetTables(){
        var be=this;
        super.prepareGetTables();
        delete(this.getTableDefinition['hogares']);
        delete(this.getTableDefinition['hogares_sup']);
        this.getTableDefinition={
            muestra_manzanas,
            ...this.getTableDefinition,
            muestras,
            viviendas,
            visitas,
            personas,
            visitas_sup,
            personas_sup,
            datos_control,
            relevamientos,
            proyectos_estadisticos
        }

        be.appendToTableDefinition('grilla_hoja_ruta',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => 
                !['cluster','seleccionado_ant','cita'].includes(element)
            );
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.find((field)=>field.name=='semana')!.visible=true;
        });
        be.appendToTableDefinition('tem',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => 
                !['seleccionado_ant','enc_ant','area_ant','cita','cluster','semana'].includes(element)
            );
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.find((field)=>field.name=='semana')!.visible=true;
        });
        be.appendToTableDefinition('tareas_tem',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.hiddenColumns=tableDef.hiddenColumns?.filter(element => element !='semana');
           // console.log('camposhidden', tableDef.hiddenColumns )
            tableDef.fields.push(
                {name:'semana'               , typeName:'integer' , editable: false, inTable: false },
            );
            tableDef.sql!.from = tableDef.sql!.from!.replace(
                'select tt.tarea, t.operativo, t.enc, t.area',
                'select tt.tarea, t.operativo, t.enc, t.area, t.semana '
            );
        })
        be.appendToTableDefinition('inconsistencias',function(tableDef:TableDefinition, context?:TableContext){
            tableDef.sql={...tableDef.sql, isTable:true};
            tableDef.editable=tableDef.editable || context?.puede?.encuestas.justificar;
            tableDef.fields.forEach(function(field){
                if(field.name=='pk_integrada'){
                    field.visible=false;
                }
                if(field.name=='justificacion'){
                    field.editable=context?.forDump || context?.puede?.encuestas.justificar;
                }
            })
            tableDef.fields=tableDef.fields.filter(f=>f.name !='hogar');
        })

        be.appendToTableDefinition('tareas_tem_ingreso',function(tableDef:TableDefinition, _context?:TableContext){
            tableDef.sql!.from = tableDef.sql!.from!.replace(
                "'__implementar_en_operativo_final'",
                `(select string_agg(case when concat_ws(';',c1, c2, c3) = '' then null else concat_ws(';',c1, c2, c3) end,';')  
                    from viviendas v
                    left join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda and v.cr_num_miembro=p.persona
                    where t.operativo = v.operativo and t.enc=v.vivienda --and tt.tarea=t.tarea_actual
                    group by t.enc	
	                )`
            );
        })
        be.appendToTableDefinition('areas', function(tableDef){
            tableDef.fields = tableDef.fields.filter((field)=>field.name != 'comuna'); //quito comuna que viene de dmencu
            let areaField = tableDef.fields.find((field)=>field.name=='area')!;
            areaField.sequence = {prefix:undefined, firstValue:1, name:'areas_seq' };
            areaField.nullable = true;
            tableDef.fields.splice(2,0,
                {name:'muestra'           , typeName:'integer'},
                {name:'comuna'            , typeName:'text', nullable:false},
                {name:'fraccion'          , typeName:'text', nullable:false},
                {name:'radio'             , typeName:'text', nullable:false},
                {name:'manzana'           , typeName:'text', nullable:false},
                {name:'relevamiento'      , typeName:'text'},
            );
            tableDef.hiddenColumns = (tableDef.hiddenColumns || []).concat('area');
            tableDef.sortColumns = [
                {column: 'comuna'   },
                {column: 'fraccion' },
                {column: 'radio'    },
                {column: 'manzana'  },
            ]
            if(tableDef.sql?.from){
                tableDef.sql.from = tableDef.sql.from.replace('as comuna', 'as auxcomuna');
            }
            tableDef.foreignKeys = (tableDef.foreignKeys || []).concat(
                {references:'muestras'     , fields:['operativo','muestra']},
                {references:'comunas'      , fields:['comuna']},
                {references:'fracciones'   , fields:['comuna', 'fraccion']},
                {references:'radios'       , fields:['comuna', 'fraccion', 'radio']},
                {references:'manzanas'     , fields:['comuna', 'fraccion', 'radio', 'manzana']},
                {references:'relevamientos', fields:['relevamiento']}
            )
            tableDef.constraints = (tableDef.constraints || []).concat(
                {constraintType:'unique', consName:"manzanas_areas_uk", fields:['operativo','muestra','comuna', 'fraccion', 'radio', 'manzana']},
            )
        });
        be.appendToTableDefinition('areas_asignacion_general', function(tableDef){
            //tableDef.selfRefresh = true;
            //tableDef.refrescable = true;
            if(tableDef.sql?.from){
                tableDef.sql.from = tableDef.sql.from.replace('as comuna', 'as auxcomuna');
            }
            //tableDef.constraints = (tableDef.constraints || []).concat(
            //    {constraintType:'unique', consName:"manzana_tareas_areas_uk", fields:['operativo','tarea','comuna', 'fraccion', 'radio', 'manzana']},
            //)
        });
    }
  }
}
