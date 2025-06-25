--set role dud_owner;
CREATE OR REPLACE FUNCTION comun.es_num_entero(valor text) RETURNS boolean
    LANGUAGE sql IMMUTABLE
    AS $$
    SELECT valor~'^[\d*]{0,18}$'
END;
$$;
/* pruebas
select       comun.es_num_entero('123467587668'),'123467587668',true res
union select comun.es_num_entero(null),null,null res
union select comun.es_num_entero('0'),'0',true res
union select comun.es_num_entero('321E34'),'321E34',false res
union select comun.es_num_entero('-321934'),'-321934',false res
union select comun.es_num_entero('012345678901234567890'),'012345678901234567890',false res
union select comun.es_num_entero('123456789 0123456789'),'012345678901234567890',false res
*/
CREATE FUNCTION comun.a_entero(valor text) RETURNS bigint
    LANGUAGE plpgsql IMMUTABLE
    AS $$
DECLARE
  valor_entero bigint;
BEGIN
  valor_entero:=valor::bigint;
  RETURN valor_entero;
EXCEPTION
  WHEN invalid_text_representation  or numeric_value_out_of_range THEN
    RETURN null;
  -- WHEN others THEN     return false;
END;
$$;
