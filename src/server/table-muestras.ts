"use strict";

import { table } from "console";
import {TableDefinition, TableContext, FieldDefinition} from "./types-dud";

export function muestras(context:TableContext):TableDefinition {
    var esEditable=context.user.rol==='admin';
    return {
        name:'muestras',
        elementName:'muestra',
        editable:esEditable,
        fields:[
            {name:'operativo'             , typeName: "text" , nullable: false},
            {name:'muestra'               , typeName:'integer', sequence:{prefix:undefined, firstValue:1, name:'muestras_seq' }, nullable:true, editable:false   },
            {name:'nombre'                , typeName:'text'},
            {name:'proyecto_estadistico'  , typeName:'text', nullable:false},            
            {name:'planificado_desde'     , typeName:'date'},
            {name:'planificado_hasta'     , typeName:'date'},
            {name:'fecha_verificado'      , typeName:'date'},
            {name:'verificado'            , typeName:'boolean'},
            //falta definir estados
        ],
        primaryKey:['operativo','muestra'],
        foreignKeys:[
            {references:'operativos', fields:['operativo']},
            {references:'proyectos_estadisticos', fields:['operativo','proyecto_estadistico']}
        ],
        detailTables: [
            {table: "muestra_manzanas", fields: ["operativo","muestra"], abr: "man", label:"manzanas"}
        ],
    };
}