"use strict";

export const queryFrom = `

select 
	'muestra' as descripcion, 
	total, 
	round(total::decimal/nullif(total,0)*100,2)	as porc_total,
	total_cluster_1,
	round(total_cluster_1::decimal/nullif(total_cluster_1,0)*100,2) as porc_cluster_1, 
	total_cluster_2,
	round(total_cluster_2::decimal/nullif(total_cluster_2,0)*100,2) as porc_cluster_2, 
	1 as orden 
		from (select 
				count(*) as total, 
				count(*) filter (where cluster = 1) as total_cluster_1,
				count(*) filter (where cluster = 2) as total_cluster_2
					from tem 
		) as aux

union

select 
 	'no salieron a campo' as descripcion, 
 	total_no_salieron, 
 	round(total_no_salieron::decimal/nullif(total,0)*100,2) as porc_total,
 	total_cluster_1,
 	round(total_cluster_1::decimal/nullif(total_no_salieron,0)*100,2) as porc_cluster_1, 
 	total_cluster_2,
 	round(total_cluster_2::decimal/nullif(total_no_salieron,0)*100,2) as porc_cluster_2, 
 	2 as orden 
		from (select 
				count(*) as total, 
				count(*) filter (where resumen_estado is null) as total_no_salieron, 
				count(*) filter (where resumen_estado is null and cluster = 1) as total_cluster_1,
				count(*) filter (where resumen_estado is null and cluster = 2) as total_cluster_2
					from tem 
		) as aux
	 
union

select 
 	'salieron a campo' as descripcion, 
	total_salieron, 
	round(total_salieron::decimal/nullif(total,0)*100,2) as porc_total,
	total_cluster_1,
	round(total_cluster_1::decimal/nullif(total_salieron,0)*100,2) as porc_cluster_1, 
	total_cluster_2,
	round(total_cluster_2::decimal/nullif(total_salieron,0)*100,2) as porc_cluster_2, 
	3 as orden 
		from (select 
				count(*) as total, 
				count(*) filter (where resumen_estado is not  null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_cluster_1,
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_cluster_2
					from tem 
		) as aux
	 
union 
	 
select 
	'en curso' as descripcion, 
	total_reas_pm+total_incompletas,
	round(total_reas_pm+total_incompletas::decimal/nullif(total_salieron,0)*100,2) as porc_total,
	total_cluster_1_reas_pm+total_cluster_1_incompletas,
	round((total_cluster_1_reas_pm+total_cluster_1_incompletas)::decimal/nullif(total_salieron_cluster1,0)*100,2) as porc_cluster_1, 
	total_cluster_2_reas_pm+total_cluster_2_incompletas,
	round((total_cluster_2_reas_pm+total_cluster_2_incompletas)::decimal/nullif(total_salieron_cluster2,0)*100,2) as porc_cluster_2, 
	4 as orden 
		from (select
				count(*) filter (where resultado in ('pendiente','mixta')) as total_reas_pm,
				count(*) filter (where resumen_estado in ('vacio','incompleto','con problemas')) as total_incompletas,
				count(*) filter (where resumen_estado is not null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_salieron_cluster1, 
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_salieron_cluster2, 
				count(*) filter (where resultado in ('pendiente','mixta') and cluster = 1) as total_cluster_1_reas_pm,
				count(*) filter (where resumen_estado in ('vacio','incompleto','con problemas') and cluster = 1) as total_cluster_1_incompletas,
				count(*) filter (where resultado in ('pendiente','mixta') and cluster = 2) as total_cluster_2_reas_pm,
				count(*) filter (where resumen_estado in ('vacio','incompleto','con problemas') and cluster = 2) as total_cluster_2_incompletas
					from tem 
		) as aux

union

select 
	'respondieron' as descripcion, 
	total_respondieron, 
	round(total_respondieron::decimal/nullif(total_salieron,0)*100,2) as porc_total,
	total_resp_cluster1,
	round(total_resp_cluster1::decimal/nullif(total_salieron_cluster1,0)*100,2) as porc_resp_cluster_1, 
	total_resp_cluster2,
	round(total_resp_cluster2::decimal/nullif(total_salieron_cluster2,0)*100,2) as porc_resp_cluster_2, 
	5 as orden 
		from (select
				count(*) filter (where resultado in ('efectiva')) as total_respondieron, 
				count(*) filter (where resumen_estado is not null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_salieron_cluster1, 
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_salieron_cluster2, 
				count(*) filter (where resultado in ('efectiva') and cluster = 1) as total_resp_cluster1,
				count(*) filter (where resultado in ('efectiva') and cluster = 2) as total_resp_cluster2
					from tem
		) as aux
	 
union

select 
	'no encuestables' as descripcion, 
	total_no_encuestables,
	round(total_no_encuestables::decimal/nullif(total_salieron,0)*100,2) as porc_total,
	total_cluster_1_no_encuestables,
	round((total_cluster_1_no_encuestables)::decimal/nullif(total_salieron_cluster1,0)*100,2) as porc_cluster_1, 
	total_cluster_2_no_encuestables,
	round((total_cluster_2_no_encuestables)::decimal/nullif(total_salieron_cluster2,0)*100,2) as porc_cluster_2, 
	6 as orden 
		from (select
				count(*) filter (where nr.grupo0='no encuestable') as total_no_encuestables,
				count(*) filter (where resumen_estado is not null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_salieron_cluster1, 
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_salieron_cluster2, 
				count(*) filter (where nr.grupo0='no encuestable' and cluster = 1) as total_cluster_1_no_encuestables,
				count(*) filter (where nr.grupo0='no encuestable' and cluster = 2) as total_cluster_2_no_encuestables
					from tem t left join no_rea nr on nr.no_rea=norea::text 
		) as aux

union 
	 
select 
	'morador ausente' as descripcion, 
	total_ausentes,
	round(total_ausentes::decimal/nullif(total_salieron,0)*100,2) as porc_total,
	total_cluster_1_ausentes,
	round((total_cluster_1_ausentes)::decimal/nullif(total_salieron_cluster1,0)*100,2) as porc_cluster_1, 
	total_cluster_2_ausentes,
	round((total_cluster_2_ausentes)::decimal/nullif(total_salieron_cluster2,0)*100,2) as porc_cluster_2, 
	7 as orden 
		from (select
				count(*) filter (where nr.grupo0='ausentes') as total_ausentes,
				count(*) filter (where resumen_estado is not null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_salieron_cluster1, 
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_salieron_cluster2, 
				count(*) filter (where nr.grupo0='ausentes' and cluster = 1) as total_cluster_1_ausentes,
				count(*) filter (where nr.grupo0='ausentes' and cluster = 2) as total_cluster_2_ausentes
					from tem t left join no_rea nr on nr.no_rea=norea::text
		) as aux
	
union 
	 
select 
	'rechazo' as descripcion, 
	total_ausentes,
	round(total_ausentes::decimal/nullif(total_salieron,0)*100,2) as porc_total,
	total_cluster_1_ausentes,
	round((total_cluster_1_ausentes)::decimal/nullif(total_salieron_cluster1,0)*100,2) as porc_cluster_1, 
	total_cluster_2_ausentes,
	round((total_cluster_2_ausentes)::decimal/nullif(total_salieron_cluster2,0)*100,2) as porc_cluster_2, 
	8 as orden 
		from (select
				count(*) filter (where nr.grupo0='rechazos') as total_ausentes,
				count(*) filter (where resumen_estado is not null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_salieron_cluster1, 
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_salieron_cluster2, 
				count(*) filter (where nr.grupo0='rechazos' and cluster = 1) as total_cluster_1_ausentes,
				count(*) filter (where nr.grupo0='rechazos' and cluster = 2) as total_cluster_2_ausentes
					from tem t left join no_rea nr on nr.no_rea=norea::text
		) as aux

union

select 
	'otras causas' as descripcion, 
	total_salieron-total_otras1-total_otras2-total_otras3-total_otras4 ,
	round((total_salieron-total_otras1-total_otras2-total_otras3-total_otras4)::decimal/nullif(total_salieron,0)*100,2) as porc_total,
	total_salieron_cluster1-total_otras1_cluster1-total_otras2_cluster1-total_otras3_cluster1-total_otras4_cluster1,
	round((total_salieron_cluster1-total_otras1_cluster1-total_otras2_cluster1-total_otras3_cluster1-total_otras4_cluster1)::decimal/nullif(total_salieron_cluster1,0)*100,2) as porc_cluster_1, 
	total_salieron_cluster2-total_otras1_cluster2-total_otras2_cluster2-total_otras3_cluster2-total_otras4_cluster2,
	round((total_salieron_cluster2-total_otras1_cluster2-total_otras2_cluster2-total_otras3_cluster2-total_otras4_cluster2)::decimal/nullif(total_salieron_cluster2,0)*100,2) as porc_cluster_2, 
	9 as orden 
		from (select
				count(*) filter (where nr.grupo0 in ('rechazos', 'ausentes', 'no encuestable')) as total_otras1,
				count(*) filter (where resultado in ('efectiva')) as total_otras2,
				count(*) filter (where resultado in ('pendiente','mixta')) as total_otras3,
				count(*) filter (where resumen_estado in ('vacio','incompleto','con problemas')) as total_otras4,
				count(*) filter (where resumen_estado is not null) as total_salieron, 
				count(*) filter (where resumen_estado is not null and cluster = 1) as total_salieron_cluster1, 
				count(*) filter (where resumen_estado is not null and cluster = 2) as total_salieron_cluster2, 
				count(*) filter (where nr.grupo0 in ('rechazos', 'ausentes', 'no encuestable') and cluster = 1) as total_otras1_cluster1,
				count(*) filter (where resultado in ('efectiva') and cluster = 1) as total_otras2_cluster1,
				count(*) filter (where resultado in ('pendiente','mixta') and cluster = 1) as total_otras3_cluster1,
				count(*) filter (where resumen_estado in ('vacio','incompleto','con problemas') and cluster = 1) as total_otras4_cluster1,					   
				count(*) filter (where nr.grupo0 in ('rechazos', 'ausentes', 'no encuestable') and cluster = 2) as total_otras1_cluster2,
				count(*) filter (where resultado in ('efectiva') and cluster = 2) as total_otras2_cluster2,
				count(*) filter (where resultado in ('pendiente','mixta') and cluster = 2) as total_otras3_cluster2,
				count(*) filter (where resumen_estado in ('vacio','incompleto','con problemas') and cluster = 2) as total_otras4_cluster2
					from tem t left join no_rea nr on nr.no_rea=norea::text
		) as aux

union

select 
	'positivo 1' as descripcion, 
	total_ac1, 
	round(total_ac1::decimal/nullif(total_respondieron,0)*100,2) as porc_total_ac1,
	total_ac1_cluster1,
	round(total_ac1_cluster1::decimal/nullif(total_resp_cluster1,0)*100,2) as porc_cluster_1, 
	total_ac1_cluster2,
	round(total_ac1_cluster2::decimal/nullif(total_resp_cluster2,0)*100,2) as porc_cluster_2, 
	10 as orden 
	from (select 
			count(*) filter (where resultado in ('efectiva')) as total_respondieron, 
			count(*) filter (where ac1=1) as total_ac1, 
			count(*) filter (where ac1=1 and cluster = 1) as total_ac1_cluster1, 
			count(*) filter (where ac1=1 and cluster = 2) as total_ac1_cluster2, 
			count(*) filter (where resultado in ('efectiva') and cluster = 1) as total_resp_cluster1,
			count(*) filter (where resultado in ('efectiva') and cluster = 2) as total_resp_cluster2
				from tem  t
				left join viviendas v on v.operativo=t.operativo and v.vivienda =t.enc
				left join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda and v.cr_num_miembro=p.persona
		) as aux
		
union

select 
	'positivo 2' as descripcion, 
	total_ac2, 
	round(total_ac2::decimal/nullif(total_respondieron,0)*100,2) as porc_total_ac1,
	total_ac2_cluster1,
	round(total_ac2_cluster1::decimal/nullif(total_resp_cluster1,0)*100,2) as porc_cluster_1, 
	total_ac2_cluster2,
	round(total_ac2_cluster2::decimal/nullif(total_resp_cluster2,0)*100,2) as porc_cluster_2, 
	11 as orden 
		from (select 
				count(*) filter (where resultado in ('efectiva')) as total_respondieron, 
				count(*) filter (where ac1=2 and ac2=1) as total_ac2, 
				count(*) filter (where ac1=2 and ac2=1 and cluster = 1) as total_ac2_cluster1, 
				count(*) filter (where ac1=2 and ac2=1 and cluster = 2) as total_ac2_cluster2, 
				count(*) filter (where resultado in ('efectiva') and cluster = 1) as total_resp_cluster1,
				count(*) filter (where resultado in ('efectiva') and cluster = 2) as total_resp_cluster2
					from tem  t
					left join viviendas v on v.operativo=t.operativo and v.vivienda =t.enc
					left join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda and v.cr_num_miembro=p.persona
		) as aux

union

select 
	'positivo total' as descripcion, 
	total_positivos, 
	round(total_positivos::decimal/nullif(total_respondieron,0)*100,2) as porc_total_ac1,
	total_positivos_cluster1,
	round(total_positivos_cluster1::decimal/nullif(total_resp_cluster1,0)*100,2) as porc_cluster_1, 
	total_positivos_cluster2,
	round(total_positivos_cluster2::decimal/nullif(total_resp_cluster2,0)*100,2) as porc_cluster_2, 
	12 as orden 
		from (select 
				count(*) filter (where resultado in ('efectiva')) as total_respondieron, 
				count(*) filter (where ac1=1 or ac1=2 and ac2=1) as total_positivos, 
				count(*) filter (where (ac1=1 or ac1=2 and ac2=1) and cluster = 1) as total_positivos_cluster1, 
				count(*) filter (where (ac1=1 or ac1=2 and ac2=1) and cluster = 2) as total_positivos_cluster2, 
				count(*) filter (where resultado in ('efectiva') and cluster = 1) as total_resp_cluster1,
				count(*) filter (where resultado in ('efectiva') and cluster = 2) as total_resp_cluster2
					from tem  t
					left join viviendas v on v.operativo=t.operativo and v.vivienda =t.enc
					left join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda and v.cr_num_miembro=p.persona
		) as aux`