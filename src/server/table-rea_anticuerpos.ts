"use strict";
/* control rea anticuerpos se puede tal vez generalizar basandonos en la datos_control, por ahora reas=1 y estados como datos control */
import {TableDefinition, TableContext} from "./types-dud";
export function rea_anticuerpos(context:TableContext):TableDefinition {
    return {
    name: "rea_anticuerpos",
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
            "name": "entreaind",
            "typeName": "bigint",
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
            select t.cluster,v.operativo, v.vivienda,v.vdominio,
            persona, nombre, sexo, edad, entreaind,ac1, ac1a, ac2, ac2a,
            t.rea,t.resumen_estado,t.resultado,t.nrocomuna,tt.verificado, tt.estado
                from viviendas v
                inner join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda 
                inner join tem t on t.operativo=v.operativo and t.enc=v.vivienda
                inner join tareas_tem tt on t.operativo=tt.operativo and t.enc=tt.enc and tt.tarea=t.tarea_actual and tt.estado in ('D','P','V')
                where t.rea=1 and v.cr_num_miembro=p.persona
                order by t.cluster,v.vdominio,v.vivienda,p.persona
            )`,
        isTable: false
    },
};
}