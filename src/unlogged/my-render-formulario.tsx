import { IdFormulario, RespuestasRaiz, ForPk, IdVariable, Formulario, Libre, IdUnidadAnalisis, Respuestas,
    Valor,
    Estructura,
    PlainForPk,
    IdFin,
    CasoState
} from "dmencu/dist/unlogged/unlogged/tipos";
import {getDatosByPass, persistirDatosByPass, setCalcularVariablesEspecificasOperativo, respuestasForPk, 
    registrarElemento, dispatchByPass, accion_registrar_respuesta, accion_abrir_formulario
} from "dmencu/dist/unlogged/unlogged/bypass-formulario";
import {setLibreDespliegue} from "dmencu/dist/unlogged/unlogged/render-formulario";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { dispatchers } from "dmencu/dist/unlogged/unlogged/redux-formulario";
import { FormStructureState } from "row-validator";

setCalcularVariablesEspecificasOperativo((respuestasRaiz:RespuestasRaiz, forPk:ForPk)=>{
    respuestasRaiz["resp_indi_sup" as IdVariable] = respuestasRaiz["msnombre" as IdVariable];
    if(respuestasRaiz.personas && respuestasRaiz.personas instanceof Array){
        respuestasRaiz["resp_comp_ed_sup" as IdVariable] = respuestasRaiz.personas[0]?.edad;
        respuestasRaiz["resp_comp_sup" as IdVariable] = respuestasRaiz.personas[0]?.nombre;
        respuestasRaiz["resp_indi_ed_sup" as IdVariable] = 
            respuestasRaiz["cr_num_miembro" as IdVariable]?
            respuestasRaiz.personas[respuestasRaiz.cr_num_miembro -1]?.edad
            :null;
    }
    if(forPk.formulario == 'F:SD_I1' as IdFormulario){
        let {respuestas} = respuestasForPk(forPk);
        respuestas['msi' as IdVariable] = respuestas['$p0' as IdVariable];
        respuestas['msnombrei' as IdVariable] = respuestas['nombre' as IdVariable];
        respuestas['msedadi'as IdVariable] = respuestas['edad' as IdVariable];
        respuestas['ac3'as IdVariable] = forPk.vivienda;
    }
    if(forPk.formulario == 'F:SD_RE' as IdFormulario){
        let {respuestas} = respuestasForPk(forPk);
        let respondente = (respuestas.personas instanceof Array && respuestas.personas.length)?respuestas.personas[0]:null;
        respuestas['nombrer' as IdVariable] = respondente?respondente['nombre' as IdVariable]:null;
        respuestas['respond' as IdVariable] = respuestas['nombrer' as IdVariable]?1:null;
    }
})

setLibreDespliegue((props:{
    key:string
    casillero:Libre
    formulario:Formulario
    forPk:ForPk
})=>{
    const {casillero, formulario, forPk, key} = props;
    const id = casillero.id_casillero!;
    const dispatch = useDispatch();
    var {opciones} = useSelector((state:CasoState)=>({opciones:state.opciones}));
    return <div key={key} id={id}></div>
})
