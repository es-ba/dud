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
            {name:'operativo'             , typeName: "text"   , nullable: false, editable: false},
            {name:'muestra'               , typeName:'bigint', sequence:{prefix:null, firstValue:10001, name:'muestras_seq' }, nullable:true, editable:false   },
            {name:'nombre'                , typeName:'text'},
            {name:'proyecto_estadistico'  , typeName:'text', nullable:false},            
            {name:'planificado_desde'     , typeName:'date'},
            {name:'planificado_hasta'     , typeName:'date'},
            {name:'fecha_verificado'      , typeName:'date'},
            {name:'verificado'            , typeName:'boolean'},
            //falta definir estados
        ],
        primaryKey:['operativo','muestra'],
        foreignKeys:[{references:'proyectos_estadisticos', fields:['operativo','proyecto_estadistico']}],
        detailTables: [
            {table: "areas", fields: ["operativo","muestra"], abr: "man", label:"manzanas"}
        ],
    };
}