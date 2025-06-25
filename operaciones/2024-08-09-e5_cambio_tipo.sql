set role dud_owner; 
set search_path=base;

alter table personas alter column e5 type text;
update variables
  set tipovar='texto'
  where operativo= 'dud'
    and tabla_datos='personas'
    and variable='e5';