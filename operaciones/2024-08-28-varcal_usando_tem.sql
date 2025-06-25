set role dud_owner; --modificar owner de acuerdo al entorno
set search_path=base;

delete from rel_vars 
  where operativo='dud' and tabla_datos='tem' and tiene='viviendas';
update relaciones 
  set (tabla_datos,tiene)=('viviendas','tem')
  where operativo='dud' and tabla_datos='tem' and tiene='viviendas';
INSERT INTO base.rel_vars(
	operativo, tabla_datos, tiene, orden, tabla_relacionada, campo_datos, campo_tiene)VALUES
  ('dud', 'viviendas', 'tem', 1, 'tem', 'operativo', 'operativo'),
  ('dud', 'viviendas', 'tem', 2, 'tem', 'vivienda', 'enc');
INSERT INTO base.variables(
	operativo, tabla_datos, variable, nombre, tipovar, clase,  activa, expresion, grupo, orden)
	VALUES 
    ('dud','viviendas_calculada','tcluster','cluster de tem','numero','calculada',true,'tem.cluster', 'TEM', 20),
    ('dud','viviendas_calculada','tpase_tabla','pase_tabla de tem','texto','calculada',true,'tem.pase_tabla', 'TEM', 25);
