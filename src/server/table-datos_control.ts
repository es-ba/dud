"use strict";
import {TableDefinition, TableContext} from "./types-dud";
export function datos_control(context:TableContext):TableDefinition {
    return {
    name: "datos_control",
    editable: false,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "visible": false,
            "nullable": false
        },
        {name: "cluster"            , typeName:'integer' , editable: false},
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "vdominio",
            "typeName": "bigint",
            "nullable": true
        },
        {name:'nrocomuna'            , typeName:'integer' , editable: false  },
       // {name:'codcalle'             , typeName:'integer' , editable: false  },
        {name:'nomcalle'             , typeName:'text'    , editable: false  },
        {name:'nrocatastral'         , typeName:'integer' , editable: false  },
        {name:'piso'                 , typeName:'text'    , editable: false  },
        {name:'departamento'         , typeName:'text'    , editable: false  },
        {name:'habitacion'           , typeName:'text'    , editable: false  },
        {name:'sector'               , typeName:'text'    , editable: false  },
        {name:'edificio'             , typeName:'text'    , editable: false  },
        {name:'entrada'              , typeName:'text'    , editable: false  },
        {name:'barrio'               , typeName:'text'    , editable: false  },
        {
            "name": "obs_re",
            "typeName": "text",
            "nullable": true
        },
        /*
        {
            "name": "total_vis",
            "typeName": "bigint",
            "nullable": true
        },

        {
            "name": "soporte",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entreav",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "identif",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "habita",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "construc",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_viv",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon3",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resid_hog",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_hog",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon2_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_9v",
            "typeName": "bigint",
            "nullable": true
        },
        */
        {
            "name": "contacto",
            "typeName": "bigint",
            "nullable": true
        },
        /*
        {
            "name": "razon",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon9_esp",
            "typeName": "text",
            "nullable": true
        },
        */
        {
            "name": "fecha_realiz",
            "typeName": "date",
            "nullable": true
        },
        {   name:'ult_visita',  typeName:'text', editable: false },
        {
            "name": "d1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "d2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "d3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "los_nombres",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_m",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "respond",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "nombrer",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sorteo",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tp",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "cr_num_miembro",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "msnombre",
            "typeName": "text",
            "nullable": true
        },
        /*
        {
            "name": "s1a1_obs_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_vis_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "soporte_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "modo_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "confir_tel_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "domicilio_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "confir_dom_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "identifico",
            "typeName": "bigint",
            "nullable": true
        },
        { name: "consistido"    , label:'consistido'            , typeName: 'timestamp'},
        {
            "name": "entrea_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "razon_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dud9_sup_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resp_comp_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resp_comp_ed_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "resp_indi_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "resp_indi_ed_sup",
            "typeName": "bigint",
            "nullable": true
        },
        
        {
            "name": "entrevista",  //es de supervisión
            "typeName": "bigint",
            "nullable": true
        },

        {
            "name": "respon_sup",
            "typeName": "text",
            "nullable": true
        },
      
        {
            "name": "respon_enc",
            "typeName": "bigint",
            "nullable": true
        },

        {
            "name": "fecha_realiz_sup",
            "typeName": "date",
            "nullable": true
        },
        {
            "name": "nombres_componentes_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "total_m_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "nombrer_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sorteo_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "tp_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ms_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "msnombre_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sup_ind",
            "typeName": "bigint",
            "nullable": true
        },
        */
        {
            "name": "persona",
            "typeName": "bigint",
            "nullable": false
        },        
        {
            "name": "nombre",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sexo",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "edad",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "lp",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "l0",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "msi",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "msnombrei",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "msedadi",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "entreaind",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "noreaind",        //tiene que ser respondente la persona  se podría ocultar
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dud9_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sd1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd2a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd9",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_6",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_7",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd10_8",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd11_5",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd12",
            "typeName": "decimal",
            "nullable": true
        },
        {
            "name": "sd13",
            "typeName": "decimal",
            "nullable": true
        },
        {
            "name": "sd14",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "sd15",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "e1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e2",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e3",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dud4_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e4",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "dud8_esp",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "e5",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "c1",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "c2",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "c3",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "c4",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "ac1",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac1a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac2",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac2a",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "ac3",
            "typeName": "bigint",
            "nullable": true
        },
        {name:'rea'                  , typeName:'integer' , editable: false  },
        {name:'norea'                , typeName:'integer' , editable: false  },
        {name:'resumen_estado'       , typeName:'text'     },
        {name:'resultado'            , typeName:'text'     },
        {name:'verificado'           , typeName:'text'     }, 
        {name:'estado'               , typeName:'text'     },
    ],
    primaryKey: [
        "operativo",
        "vivienda"
    ],
    sql: {
        from: `(
            select t.cluster,v.*,
            persona, nombre, sexo, edad, lp, l0, msi, msnombrei, msedadi, entreaind, noreaind, dud9_esp, sd1, sd2, sd2a, sd3, sd4, sd5, sd6, sd7, sd8, sd9, sd10_1, sd10_2, sd10_3, sd10_4, sd10_5, sd10_6, sd10_7, sd10_8, sd11_1, sd11_2, sd11_3, sd11_4, sd11_5, sd12, sd13, sd14, sd15, e1, e2, e3, dud4_esp, e4, dud8_esp, e5, c1::text, c2::text, c3::text, c4, ac1, ac1a, ac2, ac2a, ac3
            ,t.rea,t.norea,t.resumen_estado,t.resultado,t.nrocomuna,tt.verificado, tt.estado
            ,t.nomcalle, t.nrocatastral,t.piso,t.departamento,t.habitacion,t.sector,t.edificio,t.entrada,t.barrio
            ,substring(fvis_fecha,2) ult_visita
                from viviendas v
                left join ( select  operativo,vivienda, max(visita::text||coalesce(fecha,'null')) fvis_fecha 
                               from  visitas
                               group by operativo,vivienda
                            ) vi on  v.operativo=vi.operativo and v.vivienda=vi.vivienda 
                left join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda and v.cr_num_miembro=p.persona
                inner join tem t on t.operativo=v.operativo and t.enc=v.vivienda
                inner join tareas_tem tt on t.operativo=tt.operativo and t.enc=tt.enc and tt.tarea=t.tarea_actual 
                and tt.cargado_dm is null
                where t.rea in (1,2)
                order by t.cluster, v.vdominio, v.vivienda, p.persona
            )`,
        isTable: false
    },
};
}