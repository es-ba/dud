"use strict";
import {TableDefinition, TableContext} from "./types-dud";
import {queryFrom} from "./query-control_resumen_traspuesta"
export function control_resumen_traspuesta(context:TableContext):TableDefinition {
    return {
    name: "control_resumen_traspuesta",
    editable: false,
    "fields": [
        {name:'descripcion'         , typeName: 'text'    },
        {name:'total'               , typeName:'integer'  },
        {name:'porc_total'          , typeName:'decimal'  },
        {name:'total_cluster_1'     , typeName:'integer'  },
        {name:'porc_cluster_1'      , typeName:'decimal'  },
        {name:'total_cluster_2'     , typeName:'integer'  },
        {name:'porc_cluster_2'      , typeName:'decimal'  },
        {name:'orden'               , typeName:'integer', visible: false },
    ],
    primaryKey: ['descripcion'],
    refrescable: true,
    sql: {
        from: `(${queryFrom})`,
        orderBy: ['orden'],
        isTable: false
    },
};
}