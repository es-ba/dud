"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export const seccion: FieldDefinition = {
    name: 'seccion', 
    typeName: 'integer', 
    title: 'seccion'
}

export function secciones(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'secciones',
        elementName:'seccion',
        editable:esEditable,
        fields:[
            seccion,
            {name:'numero'                  , typeName:'text'},
        ],
        primaryKey:[seccion.name],
        constraints: [
            {constraintType: 'unique', fields: [seccion.name]},
        ],
    };
}