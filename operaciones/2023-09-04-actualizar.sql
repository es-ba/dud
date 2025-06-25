--ajustar el usuario que corresponda al entorno
set role dud_owner;
set search_path=base;

-- FUNCTION: base.xcalcular_resultado_trg()

-- DROP FUNCTION IF EXISTS base.xcalcular_resultado_trg();

CREATE OR REPLACE FUNCTION base.xcalcular_resultado_trg()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE NOT LEAKPROOF
AS $BODY$
declare
  vresultado       text;
begin
    select  case when new.rea=1 then 'efectiva'  when new.rea=3 then 'pendiente' when new.rea=4 then 'mixta' when (new.rea=2 and new.norea is not null) then (select grupo from no_rea where new.norea=no_rea::integer )  else null end  into vresultado
      from tem
      where operativo='dud' and enc=new.enc;
    
    new.resultado= vresultado ;
    return new; 
end;
$BODY$;

ALTER FUNCTION base.xcalcular_resultado_trg()
    OWNER TO dud_owner;
----
CREATE TRIGGER xcalcular_resultado_trg
    BEFORE INSERT OR UPDATE OF rea, norea
    ON base.tem
    FOR EACH ROW
    EXECUTE PROCEDURE base.xcalcular_resultado_trg();