"use strict";

import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export function proyectos_estadisticos(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'proyectos_estadisticos',
        elementName:'proyecto_estadistico',
        editable:esEditable,
        fields:[
            {name:'proyecto_estadistico'  , typeName:'text'},
            {name:'nombre'                , typeName:'text'},
        ],
        primaryKey:['proyecto_estadistico'],
        detailTables: [
            {table: "muestras", fields: ["proyecto_estadistico"], abr: "p", label:"muestras"}
        ],
    };
}