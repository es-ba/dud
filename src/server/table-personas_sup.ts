"use strict";
                
import {TableDefinition, TableContext} from "./types-dud";
export function personas_sup(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
    "name": "personas_sup",
    editable: esEditable,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "persona",
            "typeName": "bigint",
            "nullable": false
        },
        {   "name": "cluster", 
            "typeName": "integer" , 
            "editable": false, 
            "inTable":  false
        }, 
        {
            "name": "nombre_sup",
            "typeName": "text",
            "nullable": true
        },
        {
            "name": "sexo_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "edad_sup",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "spl0_sup",
            "typeName": "text",
            "nullable": true
        }
    ],
    "sql": {
        isTable: true,
        from: `(
            select  p.*,t.cluster
                from personas_sup p 
                inner join viviendas v on v.operativo=p.operativo and v.vivienda=p.vivienda
                inner join tem t on t.operativo=p.operativo and t.enc=v.vivienda
                order by t.cluster, p.vivienda, p.persona
            )`,
        "isReferable": true,
        skipEnance: true,
    },
    "primaryKey": [
        "operativo",
        "vivienda",
        "persona"
    ],
    "detailTables": [],
    "foreignKeys": [
        {
            "references": "viviendas",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "onDelete": 'cascade'
        }
    ]
};
}