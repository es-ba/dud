"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export const barrio:FieldDefinition = {
    name: 'barrio', 
    typeName: 'text'
}

export function barrios(context:TableContext):TableDefinition{
    var admin = context.user.rol==='admin';
    return {
        name: 'barrios',
        elementName: 'barrio',
        editable: admin,
        fields: [
            barrio,
            {name: 'nombre_barrio'   , typeName:'text'  , isName: true  },
        ],
        primaryKey: [barrio.name],
        detailTables: [
        ]
    }
};
