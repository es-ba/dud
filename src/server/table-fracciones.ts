"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

import {comuna} from "./table-comunas_carto";
import {barrio} from "./table-barrios";

export const fraccion:FieldDefinition = {
    name: 'fraccion', 
    typeName: 'text'
}

export function fracciones(context:TableContext):TableDefinition{
    var admin = context.user.rol==='admin';
    return {
        name: 'fracciones',
        elementName: 'fraccion',
        editable: admin,
        fields: [
            comuna,
            fraccion,
            barrio,
            {name: 'numero'         , typeName:'text'  , isName: true  },
            {name: 'descripcion'    , typeName:'text'    },
        ],
        primaryKey: [comuna.name, fraccion.name],
        foreignKeys: [
            {references:'comunas_carto', fields:[comuna.name]},
            {references:'barrios', fields:[barrio.name]}
        ],
        constraints: [
            {constraintType: 'unique', fields: [comuna.name, fraccion.name]},
        ],
        detailTables: [
            {table:'radios'    , fields:[fraccion.name], abr:'R'},
        ]
    }
};
