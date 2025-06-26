"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

import {comuna} from "./table-comunas_carto";
import {fraccion} from "./table-fracciones";
import {radio} from "./table-radios";

export const manzana:FieldDefinition = {
    name: 'manzana', 
    typeName: 'text'
}

export function manzanas(context:TableContext):TableDefinition{
    var admin = context.user.rol==='admin';
    return {
        name: 'manzanas',
        elementName: 'manzana',
        editable: admin,
        fields: [
            comuna,
            fraccion,
            radio,
            manzana,
            {name: 'numero'         , typeName:'text'  , isName: true  },
            {name: 'descripcion'    , typeName:'text'    },
        ],
        primaryKey: [comuna.name, fraccion.name, radio.name, manzana.name],
        foreignKeys: [
            {references:'comunas_carto', fields:[comuna.name]},
            {references:'fracciones', fields:[comuna.name, fraccion.name]},
            {references:'radios', fields:[comuna.name, fraccion.name, radio.name]}
        ],
        constraints: [
            {constraintType: 'unique', fields: [comuna.name, fraccion.name, radio.name, manzana.name]},
        ],
        detailTables: [
            {table:'lados'    , fields:[manzana.name], abr:'L'},
        ]
    }
};
