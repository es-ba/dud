"use strict";

import {TableDefinition, TableContext} from "./types-dud";

export function muestra_manzanas(context:TableContext):TableDefinition {
    let areasTableDef = context.be.getTableDefinition['areas'](context);
    areasTableDef.title = 'muestra_manzanas';
    areasTableDef.sql!.isTable = false;
    areasTableDef.fields = areasTableDef.fields.filter((field) => [
        'operativo','area', 'muestra','comuna', 'fraccion', 'radio', 'manzana', 'relevamiento'
    ].includes(field.name))
    return areasTableDef
}