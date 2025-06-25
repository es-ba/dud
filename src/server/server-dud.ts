"use strict";

import { AppBackend, emergeAppMetaEnc, emergeAppOperativos, emergeAppRelEnc } from "meta-enc";
import {OperativoGenerator, emergeAppVarCal, emergeAppDatosExt, emergeAppConsistencias, emergeAppProcesamiento, emergeAppDmEncu, pgWhiteList} from 'dmencu';
import { emergeAppdud } from "./app-dud";

OperativoGenerator.mainTD = 'viviendas';
OperativoGenerator.mainTDPK = 'vivienda'; // TODO: hacer esto dinámico en paquete consistencias
//OperativoGenerator.orderedIngresoTDNames = [OperativoGenerator.mainTD, 'viviendas_calculada'];
//OperativoGenerator.orderedReferencialesTDNames = ['lotes'];
pgWhiteList.push('es_fecha','completar_fecha','valida_mesanio_edad','dic_parte','dic_tradu', 'to_date','es_num_entero','a_entero');
var Appdud = emergeAppdud(
    emergeAppDmEncu(
        emergeAppProcesamiento(
            emergeAppConsistencias(
                emergeAppDatosExt(
                    emergeAppMetaEnc(
                        emergeAppRelEnc(
                            emergeAppVarCal(
                                emergeAppOperativos(AppBackend)
                            )
                        )
                    )
                )
            )
        )
    )
);

new Appdud().start();

