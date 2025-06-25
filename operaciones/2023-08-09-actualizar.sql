set search_path=base;

alter table operativos add con_rea_hogar boolean default true;

update operativos set con_rea_hogar = false where operativo = 'dud';

set search_path = base;

UPDATE operativos
  SET config_sorteo= '{
        "F:SD_RE":{
            "unidad_analisis": "personas",
            "unidad_analisis_padre": "viviendas",
            "expr_incompletitud": {
                "3":{"dominio": 3, "expr": "not(nombre) or blanco(edad)"},
                "5":{"dominio": 5, "expr": "not(nombre) or blanco(edad) or (edad >= 18 and not(lp))"}
            },
            "disparador": "sorteo",
            "filtro": {
                "3":{"dominio": 3, "expr": "edad>=18"},
                "5":{"dominio": 5, "expr": "edad>=18 and lp = 1"}
            },
            "orden": [
                {"variable":"edad" , "orden":-1}
            ], 
            "parametros":["nombre","edad", "total_m","lp"],
            "incompletas":"_personas_incompletas",
            "variableBotonFormularioUA":"$B.F:SD_S1_P",
            "variableBotonFormularioUAIndividual":"$B.F:SD_I1",
            "metodo": "tabla",
            "param_metodo": {
                "var_letra": "l0",
                "tabla": [
                    "AAAAAAAAAA",
                    "BABAABAABB",
                    "ACCBBABBAC",
                    "BAACCBDCDA",
                    "CBEDAEADCB",
                    "FDBAECEAFD",
                    "ECDGGFCBBA",
                    "DGAECDBFHC",
                    "GEHCBIHDAF",
                    "AHFBDJGCIE",
                    "IAGHFEDBIK",
                    "GDDJAAFECL",
                    "ACHMEKHJBM",
                    "JMCHIAENLC",
                    "OGCKMIKMJN"
                ]
            },
            "cantidad_sorteables":"tp",
            "cantidad_total":"total_m",
            "resultado": "cr_num_miembro",
            "resultado_manual":"cr_num_miembro",
            "sorteado_mostrar": [{"source":"nombre", "target":"msnombre"}],
            "id_formulario_individual":"F:SD_I1",
            "id_formulario_padre":"F:SD_RE"
        },
		"F:SD_RE_SUP":{
            "unidad_analisis": "personas_sup",
            "unidad_analisis_padre": "viviendas",
            "expr_incompletitud": {
                "3":{"dominio": 3, "expr": "not(nombre_sup) or blanco(edad_sup)"},
                "5":{"dominio": 5, "expr": "not(nombre_sup) or blanco(edad_sup)"}
            },
            "disparador": "sorteo_sup",
            "filtro": {
                "3":{"dominio": 3, "expr": "edad_sup>=18"},
                "5":{"dominio": 5, "expr": "edad_sup>=18"}
            },
            "orden": [
                {"variable":"edad_sup" , "orden":-1}
            ], 
            "parametros":["nombre_sup", "edad_sup", "total_m_sup"],
            "incompletas":"_personas_incompletas_sup",
            "variableBotonFormularioUA":"$B.F:SD_S1_P_SUP",
            "metodo": "tabla",
            "param_metodo": {
                "var_letra": "spl0_sup",
                "tabla": [
                    "AAAAAAAAAA",
                    "BABAABAABB",
                    "ACCBBABBAC",
                    "BAACCBDCDA",
                    "CBEDAEADCB",
                    "FDBAECEAFD",
                    "ECDGGFCBBA",
                    "DGAECDBFHC",
                    "GEHCBIHDAF",
                    "AHFBDJGCIE",
                    "IAGHFEDBIK",
                    "GDDJAAFECL",
                    "ACHMEKHJBM",
                    "JMCHIAENLC",
                    "OGCKMIKMJN"
                ]
            },
            "cantidad_sorteables":"tp_sup",
            "cantidad_total":"total_m_sup",
            "resultado": "ms_sup",
            "resultado_manual":"ms_sup",
            "sorteado_mostrar": [{"source":"nombre_sup", "target":"msnombre_sup"}]
        }
    }'
where operativo = 'dud';