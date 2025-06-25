set search_path= base;
--set role dud_owner;

ALTER TABLE inconsistencias 
  drop COLUMN if exists renglon,
  drop column if exists hogar ;


create or replace function desintegrarpk_trg() returns trigger
  language plpgsql SECURITY DEFINER as
$body$
begin
  new.vivienda := new.pk_integrada->>'vivienda';
  new.persona := new.pk_integrada->>'persona';
  new.visita := new.pk_integrada->>'visita';
  return new;
end;
$body$;

create trigger desintegrarpk_trg
  before insert or update 
  of pk_integrada
  on inconsistencias
  for each row
  execute procedure desintegrarpk_trg();
