"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

import {comuna} from "./table-comunas_carto";
import {fraccion} from "./table-fracciones";

export const radio:FieldDefinition = {
    name: 'radio', 
    typeName: 'text'
}

export function radios(context:TableContext):TableDefinition{
    var admin = context.user.rol==='admin';
    return {
        name: 'radios',
        elementName: 'radio',
        editable: admin,
        fields: [
            comuna,
            fraccion,
            radio,
            {name: 'numero'         , typeName:'text'  , isName: true  },
            {name: 'descripcion'    , typeName:'text'    },
        ],
        primaryKey: [comuna.name, fraccion.name, radio.name],
        foreignKeys: [
            {references:'comunas_carto', fields:[comuna.name]},
            {references:'fracciones', fields:[comuna.name, fraccion.name]}
        ],
        constraints: [
            {constraintType: 'unique', fields: [comuna.name, fraccion.name, radio.name]},
        ],
        detailTables: [
            {table:'manzanas'    , fields:[radio.name], abr:'M'},
        ]
    }
};
