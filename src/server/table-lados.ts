"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export const lado: FieldDefinition = {
    name: 'lado', 
    typeName: 'integer', 
    title: 'lado'
}

export function manzanas(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'lados',
        elementName:'lado',
        editable:esEditable,
        fields:[
            {name:'comuna'                  , typeName:'integer'},
            {name:'fraccion'                , typeName:'integer'},
            {name:'radio'                   , typeName:'integer'},
            {name:'manzana'                 , typeName:'integer'},
            lado,
            {name:'numero'                  , typeName:'text'},
        ],
        primaryKey:['comuna', 'fraccion', 'radio', 'manzana', lado.name],
        foreignKeys: [
            {references:'comunas', fields:['comuna']},
            {references:'fracciones', fields:['comuna', 'fraccion']},
            {references:'radios', fields:['comuna', 'fraccion', 'radio']},
            {references:'manzanas', fields:['comuna', 'fraccion', 'radio', 'manzana']},
        ],
        constraints: [
            {constraintType: 'unique', fields: ['comuna', 'fraccion', 'radio', 'manzana', lado.name]},
        ],
    };
}