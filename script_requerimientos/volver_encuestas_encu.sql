set search_path = base;
Devolver a campo enc 13847 y 13860
recepcionista=20 encuestador=127

--vuelve una encuesta a encu desde proc
select t.enc, t.tarea_actual, tt.estado,t.tarea_proxima
 from tem  t
 inner join tareas_tem tt using(operativo, enc)
  where t.operativo='dud' and t.tarea_actual=tt.tarea and tarea_actual='proc'
 and t.enc in ('13847','13860');
--"13847"    "proc"    "A"    
--"13860"    "proc"    "A"    


--13847
update tem 
  set tarea_actual = 'encu', tarea_proxima = null
  where operativo = 'dud' and enc = '13847' and tarea_actual = 'proc';
  
update tareas_tem 
  set estado = '0D' 
  where operativo = 'dud' and enc = '13847' and tarea in ('proc','encu');
  
update tareas_tem 
  set asignado = null
  where operativo = 'dud' and enc = '13847' and tarea  = 'encu';
  
update tareas_tem 
  set recepcionista = null
  where operativo = 'dud' and enc = '13847' and tarea  = 'encu';
--fin 13847
  

--13860
update tem 
  set tarea_actual = 'encu', tarea_proxima = null
  where operativo = 'dud' and enc = '13860' and tarea_actual = 'proc';
  
update tareas_tem 
  set estado = '0D' 
  where operativo = 'dud' and enc = '13860' and tarea in ('proc','encu');
  
update tareas_tem 
  set asignado = null
  where operativo = 'dud' and enc = '13860' and tarea  = 'encu';
  
update tareas_tem 
  set recepcionista = null
  where operativo = 'dud' and enc = '13860' and tarea  = 'encu';
--fin 13860