"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export function relevamientos(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'relevamientos',
        elementName:'relevamiento',
        editable:esEditable,
        fields:[
            {name:'relevamiento'    , typeName:'text'},
            {name:'nombre'     , typeName:'text', isName: true},
        ],
        primaryKey:['relevamiento']
    };
}