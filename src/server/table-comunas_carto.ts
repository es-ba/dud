"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export const comuna:FieldDefinition = {
    name: 'comuna', 
    typeName: 'text'
}

export function comunas_carto(context:TableContext):TableDefinition{
    var admin = context.user.rol==='admin';
    return {
        name: 'comunas_carto',
        elementName: 'comuna',
        editable: admin,
        fields: [
            comuna,
            {name: 'numero'         , typeName:'text'  , isName: true  },
            {name: 'descripcion'    , typeName:'text'    },
        ],
        primaryKey: [comuna.name],
        detailTables: [
            {table:'fracciones'    , fields:[comuna.name], abr:'F'},
        ],
        constraints: [
            {constraintType: 'unique', fields: [comuna.name]},
        ],
    }
};
