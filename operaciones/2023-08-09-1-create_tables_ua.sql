-- reemplazar adecuadamente owner y, admin segun entorno

set role dud_owner;
set search_path = "base";

drop table if exists personas ;
drop table if exists hogares ;
drop table if exists visitas ;
drop table if exists visitas_sup ;
drop table if exists personas_sup ;
drop table if exists hogares_sup ;
drop table if exists viviendas ;

create table "viviendas" (
  "operativo" text, 
  "vivienda" text, 
  "vdominio" bigint, 
  "obs_re" text, 
  "total_vis" bigint, 
  "soporte" bigint, 
  "entreav" bigint, 
  "identif" bigint, 
  "habita" bigint, 
  "construc" bigint, 
  "razon_viv" bigint, 
  "razon2_2" bigint, 
  "razon2_6" bigint, 
  "razon3" text, 
  "resid_hog" bigint, 
  "razon_hog" bigint, 
  "razon2_1" bigint, 
  "razon2_3" bigint, 
  "razon2_5" bigint, 
  "razon_9v" bigint, 
  "contacto" bigint, 
  "razon" bigint, 
  "razon9_esp" text, 
  "fecha_realiz" date, 
  "d1" bigint, 
  "d2" bigint, 
  "d3" bigint, 
  "los_nombres" text, 
  "total_m" bigint, 
  "respond" bigint, 
  "nombrer" text, 
  "sorteo" bigint, 
  "tp" bigint, 
  "cr_num_miembro" bigint, 
  "msnombre" text, 
  "s1a1_obs_sup" text, 
  "total_vis_sup" bigint, 
  "soporte_sup" bigint, 
  "modo_sup" bigint, 
  "confir_tel_sup" bigint, 
  "domicilio_sup" text, 
  "confir_dom_sup" bigint, 
  "identifico" bigint, 
  "consistido" timestamp, 
  "entrea_sup" bigint, 
  "razon_sup" bigint, 
  "dud9_sup_esp" text, 
  "resp_comp_sup" text, 
  "resp_comp_ed_sup" bigint, 
  "resp_indi_sup" text, 
  "resp_indi_ed_sup" bigint, 
  "entrevista" bigint, 
  "respon_sup" text, 
  "respon_enc" bigint, 
  "fecha_realiz_sup" date, 
  "nombres_componentes_sup" text, 
  "total_m_sup" bigint, 
  "nombrer_sup" text, 
  "sorteo_sup" bigint, 
  "tp_sup" bigint, 
  "ms_sup" bigint, 
  "msnombre_sup" text, 
  "sup_ind" bigint
, primary key ("operativo", "vivienda")
);
grant select, insert, update, delete, references on "viviendas" to dud_admin;
grant all on "viviendas" to dud_owner;


create table "visitas" (
  "operativo" text, 
  "vivienda" text, 
  "visita" bigint, 
  "rol" text, 
  "per" bigint, 
  "usu" text, 
  "fecha" text, 
  "hora" text, 
  "anotacion" text
, primary key ("operativo", "vivienda", "visita")
);
grant select, insert, update, delete, references on "visitas" to dud_admin;
grant all on "visitas" to dud_owner;


create table "personas" (
  "operativo" text, 
  "vivienda" text, 
  "persona" bigint, 
  "nombre" text, 
  "sexo" bigint, 
  "edad" bigint, 
  "lp" bigint, 
  "l0" text, 
  "msi" bigint, 
  "msnombrei" text, 
  "msedadi" bigint, 
  "entreaind" bigint, 
  "noreaind" bigint, 
  "dud9_esp" text, 
  "sd1" bigint, 
  "sd2" bigint, 
  "sd3" bigint, 
  "sd4" bigint, 
  "sd5" bigint, 
  "sd6" bigint, 
  "sd7" bigint, 
  "sd8" bigint, 
  "sd9" bigint, 
  "sd10_1" bigint, 
  "sd10_2" bigint, 
  "sd10_3" bigint, 
  "sd10_4" bigint, 
  "sd10_5" bigint, 
  "sd10_6" bigint, 
  "sd10_7" bigint, 
  "sd10_8" bigint, 
  "sd11_1" bigint, 
  "sd11_2" bigint, 
  "sd11_3" bigint, 
  "sd11_4" bigint, 
  "sd11_5" bigint, 
  "sd12" bigint, 
  "sd13" bigint, 
  "sd14" bigint, 
  "sd15" bigint, 
  "e1" text, 
  "e2" text, 
  "e3" bigint, 
  "dud4_esp" text, 
  "e4" bigint, 
  "dud8_esp" text, 
  "e5" bigint, 
  "c1" bigint, 
  "c2" bigint, 
  "c3" bigint, 
  "c4" text, 
  "ac1" bigint, 
  "ac1a" bigint, 
  "ac2" bigint, 
  "ac2a" bigint, 
  "ac3" bigint
, primary key ("operativo", "vivienda", "persona")
);
grant select, insert, update, delete, references on "personas" to dud_admin;
grant all on "personas" to dud_owner;


create table "visitas_sup" (
  "operativo" text, 
  "vivienda" text, 
  "visita" bigint, 
  "rol_sup" text, 
  "per_sup" bigint, 
  "usu_sup" text, 
  "fecha_sup" text, 
  "hora_sup" text, 
  "anotacion_sup" text
, primary key ("operativo", "vivienda", "visita")
);
grant select, insert, update, delete, references on "visitas_sup" to dud_admin;
grant all on "visitas_sup" to dud_owner;


create table "personas_sup" (
  "operativo" text, 
  "vivienda" text, 
  "persona" bigint, 
  "nombre_sup" text, 
  "sexo_sup" bigint, 
  "edad_sup" bigint, 
  "spl0_sup" text
, primary key ("operativo", "vivienda", "persona")
);
grant select, insert, update, delete, references on "personas_sup" to dud_admin;
grant all on "personas_sup" to dud_owner;


-- conss
alter table "viviendas" add constraint "operativo<>''" check ("operativo"<>'');
alter table "viviendas" alter column "operativo" set not null;
alter table "viviendas" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "viviendas" alter column "vivienda" set not null;
alter table "viviendas" add constraint "obs_re<>''" check ("obs_re"<>'');
alter table "viviendas" add constraint "razon3<>''" check ("razon3"<>'');
alter table "viviendas" add constraint "razon9_esp<>''" check ("razon9_esp"<>'');
alter table "viviendas" add constraint "los_nombres<>''" check ("los_nombres"<>'');
alter table "viviendas" add constraint "nombrer<>''" check ("nombrer"<>'');
alter table "viviendas" add constraint "msnombre<>''" check ("msnombre"<>'');
alter table "viviendas" add constraint "s1a1_obs_sup<>''" check ("s1a1_obs_sup"<>'');
alter table "viviendas" add constraint "domicilio_sup<>''" check ("domicilio_sup"<>'');
alter table "viviendas" add constraint "dud9_sup_esp<>''" check ("dud9_sup_esp"<>'');
alter table "viviendas" add constraint "resp_comp_sup<>''" check ("resp_comp_sup"<>'');
alter table "viviendas" add constraint "resp_indi_sup<>''" check ("resp_indi_sup"<>'');
alter table "viviendas" add constraint "respon_sup<>''" check ("respon_sup"<>'');
alter table "viviendas" add constraint "nombres_componentes_sup<>''" check ("nombres_componentes_sup"<>'');
alter table "viviendas" add constraint "nombrer_sup<>''" check ("nombrer_sup"<>'');
alter table "viviendas" add constraint "msnombre_sup<>''" check ("msnombre_sup"<>'');
alter table "visitas" add constraint "operativo<>''" check ("operativo"<>'');
alter table "visitas" alter column "operativo" set not null;
alter table "visitas" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "visitas" alter column "vivienda" set not null;
alter table "visitas" alter column "visita" set not null;
alter table "visitas" add constraint "rol<>''" check ("rol"<>'');
alter table "visitas" add constraint "usu<>''" check ("usu"<>'');
alter table "visitas" add constraint "fecha<>''" check ("fecha"<>'');
alter table "visitas" add constraint "hora<>''" check ("hora"<>'');
alter table "visitas" add constraint "anotacion<>''" check ("anotacion"<>'');
/*
alter table "hogares" add constraint "operativo<>''" check ("operativo"<>'');
alter table "hogares" alter column "operativo" set not null;
alter table "hogares" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "hogares" alter column "vivienda" set not null;
alter table "hogares" alter column "hogar" set not null;
*/
alter table "personas" add constraint "operativo<>''" check ("operativo"<>'');
alter table "personas" alter column "operativo" set not null;
alter table "personas" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "personas" alter column "vivienda" set not null;
alter table "personas" alter column "persona" set not null;
alter table "personas" add constraint "nombre<>''" check ("nombre"<>'');
alter table "personas" add constraint "l0<>''" check ("l0"<>'');
alter table "personas" add constraint "msnombrei<>''" check ("msnombrei"<>'');
alter table "personas" add constraint "dud9_esp<>''" check ("dud9_esp"<>'');
alter table "personas" add constraint "e1<>''" check ("e1"<>'');
alter table "personas" add constraint "e2<>''" check ("e2"<>'');
alter table "personas" add constraint "dud4_esp<>''" check ("dud4_esp"<>'');
alter table "personas" add constraint "dud8_esp<>''" check ("dud8_esp"<>'');
alter table "personas" add constraint "c4<>''" check ("c4"<>'');
alter table "visitas_sup" add constraint "operativo<>''" check ("operativo"<>'');
alter table "visitas_sup" alter column "operativo" set not null;
alter table "visitas_sup" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "visitas_sup" alter column "vivienda" set not null;
alter table "visitas_sup" alter column "visita" set not null;
alter table "visitas_sup" add constraint "rol_sup<>''" check ("rol_sup"<>'');
alter table "visitas_sup" add constraint "usu_sup<>''" check ("usu_sup"<>'');
alter table "visitas_sup" add constraint "fecha_sup<>''" check ("fecha_sup"<>'');
alter table "visitas_sup" add constraint "hora_sup<>''" check ("hora_sup"<>'');
alter table "visitas_sup" add constraint "anotacion_sup<>''" check ("anotacion_sup"<>'');
/*
alter table "hogares_sup" add constraint "operativo<>''" check ("operativo"<>'');
alter table "hogares_sup" alter column "operativo" set not null;
alter table "hogares_sup" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "hogares_sup" alter column "vivienda" set not null;
alter table "hogares_sup" alter column "hogar" set not null;
*/
alter table "personas_sup" add constraint "operativo<>''" check ("operativo"<>'');
alter table "personas_sup" alter column "operativo" set not null;
alter table "personas_sup" add constraint "vivienda<>''" check ("vivienda"<>'');
alter table "personas_sup" alter column "vivienda" set not null;
alter table "personas_sup" alter column "persona" set not null;
alter table "personas_sup" add constraint "nombre_sup<>''" check ("nombre_sup"<>'');
alter table "personas_sup" add constraint "spl0_sup<>''" check ("spl0_sup"<>'');

-- FKs
alter table "visitas" add constraint "visitas viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
--alter table "hogares" add constraint "hogares viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on update cascade;
alter table "personas" add constraint "personas viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
alter table "visitas_sup" add constraint "visitas_sup viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on delete cascade on update cascade;
--alter table "hogares_sup" add constraint "hogares_sup viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda")  on update cascade;
alter table "personas_sup" add constraint "personas_sup viviendas REL" foreign key ("operativo", "vivienda") references "viviendas" ("operativo", "vivienda") on delete cascade on update cascade;

-- index
create index "operativo,vivienda 4 visitas IDX" ON "visitas" ("operativo", "vivienda");
--create index "operativo,vivienda 4 hogares IDX" ON "hogares" ("operativo", "vivienda");
create index "operativo,vivienda 4 personas IDX" ON "personas" ("operativo", "vivienda");
create index "operativo,vivienda 4 visitas_sup IDX" ON "visitas_sup" ("operativo", "vivienda");
--create index "operativo,vivienda 4 hogares_sup IDX" ON "hogares_sup" ("operativo", "vivienda");
create index "operativo,vivienda 4 personas_sup IDX" ON "personas_sup" ("operativo", "vivienda");
