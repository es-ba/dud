--función trigger para setear el campo supervision aleatoria- primera versión.
--poner el rol que corresponda según el entorno en cual estamos corriendo este script
set role dud_owner;
set search_path=base;

----PRUEBA SCRIPT TAREAS TEM
----Solo va a haber supervisión aleatoria telefónica(2) para dud y para reas.
CREATE OR REPLACE FUNCTION base.setear_sup_aleat_tareas_tem_trg()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    VOLATILE NOT LEAKPROOF
AS $BODY$

declare
   v_pre_sorteo integer;
   v_sup_aleat        integer;
   v_rea              integer;
   v_norea            text;
   v_grupo0           text;
   v_estado           text;
   v_dominio          integer;
   v_con_telefono     text;
begin
    select pre_sorteo, supervision_aleatoria, t.rea, t.norea, grupo0,estado,dominio
    into   v_pre_sorteo, v_sup_aleat, v_rea, v_norea, v_grupo0, v_estado, v_dominio
    from base.tem t
      left join base.tareas_tem tt on t.enc=tt.enc and t.tarea_actual=tt.tarea
      left join base.no_rea on t.norea::text=no_rea
      where t.operativo=new.operativo and t.enc=new.enc ;
     -- raise notice ' valores % % % % % % % ',v_pre_sorteo,v_sup_aleat, v_rea, v_norea, v_grupo0, v_estado, v_dominio;   
    if v_pre_sorteo in (1,2)  and v_sup_aleat is null and v_dominio=3 and v_estado='V' then
        if (v_rea=1 and v_pre_sorteo=2) then
           --v_pre_sorteo=2            
            select string_agg(case when concat_ws(';',c1, c2, c3) = '' then null else concat_ws(';',c1, c2, c3) end,';') into  v_con_telefono      
               from viviendas v
               left join personas p on v.operativo=p.operativo and v.vivienda=p.vivienda and v.cr_num_miembro=p.persona
               where v.operativo=new.operativo and v.vivienda=new.enc 
               group by v.vivienda;
            if v_con_telefono  is not null then 
               update base.tem set supervision_aleatoria=2 where operativo=new.operativo and enc=new.enc ; 
            else 
               update base.tem set supervision_aleatoria=null where operativo=new.operativo and enc=new.enc ;
            end if;  
        else
           update base.tem set supervision_aleatoria=null where operativo=new.operativo and enc=new.enc ; 
        end if; 
    else  
        update base.tem set supervision_aleatoria=null where operativo=new.operativo and enc=new.enc ;     
    end if;           
    return new;
end;    
$BODY$;

ALTER FUNCTION base.setear_sup_aleat_tareas_tem_trg()
    OWNER TO dud_owner;

--el trigger tiene que estar antes que el de próxima tarea    
-- DROP TRIGGER IF EXISTS csetear_sup_aleat_tareas_tem_trg ON base.tareas_tem;

CREATE TRIGGER csetear_sup_aleat_tareas_tem_trg     
    AFTER UPDATE OF verificado
    ON base.tareas_tem
    FOR EACH ROW
    EXECUTE FUNCTION base.setear_sup_aleat_tareas_tem_trg();
    