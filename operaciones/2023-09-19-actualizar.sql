set role dud_owner; --agregar el rol que corresponda al entorno
set search_path=base;

alter table personas alter column sd12 type decimal;
alter table personas alter column sd13 type decimal; 