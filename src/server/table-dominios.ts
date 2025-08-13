"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export function dominios(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'dominios',
        elementName:'dominio',
        editable:esEditable,
        fields:[
            {name:'dominio'    , typeName:'text'},
            {name:'nombre'     , typeName:'text', isName: true},
        ],
        primaryKey:['dominio']
    };
}