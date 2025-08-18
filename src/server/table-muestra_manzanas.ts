"use strict";

import { table } from "console";
import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export function muestra_manzanas(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'muestra_manzanas',
        elementName:'muestra_manzana',
        editable:esEditable,
        fields:[
            {name:'muestra'           , typeName:'bigint'},
            {name:'comuna'            , typeName:'text'},
            {name:'fraccion'          , typeName:'text'},
            {name:'radio'             , typeName:'text'},
            {name:'manzana'           , typeName:'text'},
            {name:'relevamiento'      , typeName:'text'},
            //falta definir estados            
        ],
        primaryKey:['muestra','comuna', 'fraccion', 'radio', 'manzana'],
        foreignKeys:[
            {references:'manzanas', fields:['comuna', 'fraccion', 'radio', 'manzana']},
            {references:'relevamientos', fields:['relevamiento']}
        ],       
    };
}