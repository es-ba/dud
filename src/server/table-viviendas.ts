"use strict";
import {TableDefinition, TableContext} from "./types-dud";
export function viviendas(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
    "name": "viviendas",
    editable: esEditable,
    "fields": [
        {
            "name": "operativo",
            "typeName": "text",
            "visible": false,
            "nullable": false
        },
        {
            "name": "vivienda",
            "typeName": "text",
            "nullable": false
        },
        {
            "name": "cluster",
            "typeName": "integer",
            "editable": false,
            "inTable":  false
        }, 
        {
            "name": "vdominio",
            "typeName": "bigint",
            "nullable": true
        },
        {
            "name": "obs_re",
            "typeName": "text",
            "nullable": true
        },
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
        {
            "name": "contacto",
            "typeName": "bigint",
            "nullable": true
        },
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
        {
            "name": "fecha_realiz",
            "typeName": "date",
            "nullable": true
        },
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
            "name": "entrevista",
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
        }
    ],
    "sql": {
        isTable: true,
        from: `(
            select  v.*,t.cluster
                from viviendas v 
                inner join tem t on t.operativo=v.operativo and t.enc=v.vivienda
                order by t.cluster, v.vivienda
            )`,
        "isReferable": true,
        skipEnance: true,
    },
    "primaryKey": [
        "operativo",
        "vivienda"
    ],
    /*
    "softForeignKeys": [
        {"references":"tem" , "fields":["operativo", {source:"vivienda", target:"enc"}], displayFields:[] },
    ],
    */
    "detailTables": [
        {
            "table": "visitas",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "v"
        },
        {
            "table": "personas",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "p"
        },
        {
            "table": "visitas_sup",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "vsup"
        },
        {
            "table": "personas_sup",
            "fields": [
                "operativo",
                "vivienda"
            ],
            "abr": "psup"
        }
    ]
};
}