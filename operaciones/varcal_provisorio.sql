set role dud_admin;
--CAMBIAR ROL de acuerdo al entorno
-- REEMPLAZAR TAMBIENA EL OWNER

do $SQL_DUMP$
 begin
----
 set search_path = base, comun;
----


drop table if exists "dud_personas_calculada";
drop table if exists "dud_personas_sup_calculada";
drop table if exists "dud_tem_calculada";
drop table if exists "dud_visitas_calculada";
drop table if exists "dud_visitas_sup_calculada";
drop table if exists "dud_viviendas_calculada";

DROP FUNCTION if exists gen_fun_var_calc();
--DROP FUNCTION if exists update_varcal(text);
--DROP FUNCTION if exists update_varcal_por_encuesta(text,text);



create table "dud_personas_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "persona" bigint
, primary key ("operativo", "vivienda", "persona")
);
grant select, insert, update, references on "dud_personas_calculada" to dud_admin;
grant all on "dud_personas_calculada" to dud_owner;



create table "dud_personas_sup_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "persona" bigint
, primary key ("operativo", "vivienda", "persona")
);
grant select, insert, update, references on "dud_personas_sup_calculada" to dud_admin;
grant all on "dud_personas_sup_calculada" to dud_owner;



create table "dud_tem_calculada" (
  "operativo" text, 
  "enc" text
, primary key ("operativo", "enc")
);
grant select, insert, update, references on "dud_tem_calculada" to dud_admin;
grant all on "dud_tem_calculada" to dud_owner;



create table "dud_visitas_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "visita" bigint
, primary key ("operativo", "vivienda", "visita")
);
grant select, insert, update, references on "dud_visitas_calculada" to dud_admin;
grant all on "dud_visitas_calculada" to dud_owner;



create table "dud_visitas_sup_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "visita" bigint
, primary key ("operativo", "vivienda", "visita")
);
grant select, insert, update, references on "dud_visitas_sup_calculada" to dud_admin;
grant all on "dud_visitas_sup_calculada" to dud_owner;



create table "dud_viviendas_calculada" (
  "operativo" text, 
  "vivienda" text, 
  "cant_vis" bigint, 
  "cant_per" bigint, 
  "tcluster" bigint,
  "tpase_tabla" text
, primary key ("operativo", "vivienda")
);
grant select, insert, update, references on "dud_viviendas_calculada" to dud_admin;
grant all on "dud_viviendas_calculada" to dud_owner;


-- conss
alter table "dud_personas_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "dud_personas_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "dud_personas_sup_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "dud_personas_sup_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "dud_tem_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "dud_tem_calculada" add constraint "enc<>''" check ("enc"<>'');
alter table "dud_visitas_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "dud_visitas_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "dud_visitas_sup_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "dud_visitas_sup_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "dud_viviendas_calculada" add constraint "operativo<>''" check ("operativo"<>'');
alter table "dud_viviendas_calculada" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "dud_viviendas_calculada" add constraint "tpase_tabla<>''" check ("tpase_tabla"<>'');
-- FKs
alter table "dud_personas_calculada" add constraint "dud_personas_calculada personas REL" foreign key ("operativo", "vivienda", "persona") references "personas" ("operativo", "vivienda", "persona")  on delete cascade on update cascade;
alter table "dud_personas_sup_calculada" add constraint "dud_personas_sup_calculada personas_sup REL" foreign key ("operativo", "vivienda", "persona") references "personas_sup" ("operativo", "vivienda", "persona")  on delete cascade on update cascade;
alter table "dud_tem_calculada" add constraint "dud_tem_calculada tem REL" foreign key ("operativo", "enc") references "tem" ("operativo", "enc")  on delete cascade on update cascade;
alter table "dud_visitas_calculada" add constraint "dud_visitas_calculada visitas REL" foreign key ("operativo", "vivienda", "visita") references "visitas" ("operativo", "vivienda", "visita")  on delete cascade on update cascade;
alter table "dud_visitas_sup_calculada" add constraint "dud_visitas_sup_calculada visitas_sup REL" foreign key ("operativo", "vivienda", "visita") references "visitas_sup" ("operativo", "vivienda", "visita")  on delete cascade on update cascade;
alter table "dud_viviendas_calculada" add constraint "dud_viviendas_calculada viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
-- index
create index "operativo,vivienda,persona 4 dud_personas_calculada IDX" ON "dud_personas_calculada" ("operativo", "vivienda", "persona");
create index "dud_personas_sup_calculada personas_sup IDX" ON "dud_personas_sup_calculada" ("operativo", "vivienda", "persona");
create index "operativo,enc 4 dud_tem_calculada IDX" ON "dud_tem_calculada" ("operativo", "enc");
create index "operativo,vivienda,visita 4 dud_visitas_calculada IDX" ON "dud_visitas_calculada" ("operativo", "vivienda", "visita");
create index "dud_visitas_sup_calculada visitas_sup IDX" ON "dud_visitas_sup_calculada" ("operativo", "vivienda", "visita");
create index "operativo,vivienda 4 dud_viviendas_calculada IDX" ON "dud_viviendas_calculada" ("operativo", "vivienda");
-- policies

----

--Inserts de claves
----
            INSERT INTO "dud_personas_calculada" ("operativo","vivienda","persona") 
              SELECT "operativo","vivienda","persona" FROM "personas";

            INSERT INTO "dud_personas_sup_calculada" ("operativo","vivienda","persona") 
              SELECT "operativo","vivienda","persona" FROM "personas_sup";

            INSERT INTO "dud_tem_calculada" ("operativo","enc") 
              SELECT "operativo","enc" FROM "tem";

            INSERT INTO "dud_visitas_calculada" ("operativo","vivienda","visita") 
              SELECT "operativo","vivienda","visita" FROM "visitas";

            INSERT INTO "dud_visitas_sup_calculada" ("operativo","vivienda","visita") 
              SELECT "operativo","vivienda","visita" FROM "visitas_sup";

            INSERT INTO "dud_viviendas_calculada" ("operativo","vivienda") 
              SELECT "operativo","vivienda" FROM "viviendas";
----


----- GENERADOR DE 2 FUNCIONES PARA CALCULO TOTAL Y PARA LLAMAR ANTES DE CADA CONSISTIR
CREATE OR REPLACE FUNCTION base.gen_fun_var_calc() RETURNS TEXT
  LANGUAGE PLPGSQL AS
$GENERATOR$
declare
  v_sql text:=$THE_FUN$
CREATE OR REPLACE FUNCTION update_varcal_por_encuesta("p_operativo" text, "p_id_caso" text) RETURNS TEXT
  LANGUAGE PLPGSQL AS
$BODY$
BEGIN
-- Cada vez que se actualizan las variables calculadas, previamente se deben insertar los registros que no existan (on conflict do nothing)
-- de las tablas base (solo los campos pks), sin filtrar por p_id_caso para update_varcal o con dicho filtro para update_varcal_por_encuesta
    INSERT INTO "dud_personas_calculada" ("operativo","vivienda","persona") 
      SELECT "operativo","vivienda","persona" FROM "personas" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "dud_personas_sup_calculada" ("operativo","vivienda","persona") 
      SELECT "operativo","vivienda","persona" FROM "personas_sup" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "dud_tem_calculada" ("operativo","enc") 
      SELECT "operativo","enc" FROM "tem" WHERE operativo=p_operativo AND "enc"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "dud_visitas_calculada" ("operativo","vivienda","visita") 
      SELECT "operativo","vivienda","visita" FROM "visitas" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "dud_visitas_sup_calculada" ("operativo","vivienda","visita") 
      SELECT "operativo","vivienda","visita" FROM "visitas_sup" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
    INSERT INTO "dud_viviendas_calculada" ("operativo","vivienda") 
      SELECT "operativo","vivienda" FROM "viviendas" WHERE operativo=p_operativo AND "vivienda"=p_id_caso ON CONFLICT DO NOTHING;
----
  UPDATE dud_viviendas_calculada
    SET 
        cant_vis = visitas_agg.cant_vis,
        tcluster = null2zero(tem.cluster),
        tpase_tabla = nullif(null2zero(tem.pase_tabla), '')
    FROM "viviendas" JOIN "tem" ON "viviendas"."vivienda"="tem"."enc" AND "viviendas"."operativo"="tem"."operativo"   
      ,LATERAL (
        SELECT
        count(nullif(true,false)) as cant_vis
    FROM "visitas" JOIN "dud_visitas_calculada" using ("operativo","vivienda","visita")
        WHERE "viviendas"."operativo"="visitas"."operativo" AND "viviendas"."vivienda"="visitas"."vivienda"
      ) as visitas_agg
    WHERE "viviendas"."operativo"="dud_viviendas_calculada"."operativo" AND "viviendas"."vivienda"="dud_viviendas_calculada"."vivienda" AND "viviendas"."operativo"=p_operativo AND "viviendas"."vivienda"=p_id_caso;
  UPDATE dud_viviendas_calculada
    SET 
        cant_per = personas_agg.cant_per
    FROM "viviendas"  
      ,LATERAL (
        SELECT
        count(nullif(true,false)) as cant_per
    FROM "personas" JOIN "dud_personas_calculada" using ("operativo","vivienda","persona")
        WHERE "viviendas"."operativo"="personas"."operativo" AND "viviendas"."vivienda"="personas"."vivienda"
      ) as personas_agg
    WHERE "viviendas"."operativo"="dud_viviendas_calculada"."operativo" AND "viviendas"."vivienda"="dud_viviendas_calculada"."vivienda" AND "viviendas"."operativo"=p_operativo AND "viviendas"."vivienda"=p_id_caso;
  RETURN 'OK';
END;
$BODY$;
$THE_FUN$;
begin 
  -- TODO: hacer este reemplazo en JS
  execute v_sql;
  execute replace(replace(regexp_replace(replace(
    v_sql,
    $$update_varcal_por_encuesta("p_operativo" text, "p_id_caso" text) RETURNS TEXT$$, $$update_varcal("p_operativo" text) RETURNS TEXT$$),
    $$(.* )".*"\."vivienda"=p_id_caso(.*)$$, $$\1TRUE\2$$,'gm'),
    $$"enc"=p_id_caso$$, $$TRUE$$),
    $$"vivienda"=p_id_caso$$, $$TRUE$$);
  return '2GENERATED';
end;
$GENERATOR$;        
----
perform gen_fun_var_calc();
----
end;
$SQL_DUMP$;--- generado: Wed Aug 07 2024 17:10:32 GMT-0300 (hora estándar de Argentina)
--corregi a mano condicion de insercion por encuesta en la tem enc por vivienda

select update_varcal('dud');
----
UPDATE operativos SET calculada=now()::timestamp(0) WHERE operativo='dud';
UPDATE tabla_datos SET generada=now()::timestamp(0) WHERE operativo='dud' AND tipo='calculada';
