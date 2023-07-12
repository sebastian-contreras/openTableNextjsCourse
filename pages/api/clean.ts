do $$ declare
    r record;
begin
    for r in (select tablename from pg_tables where schemaname = 'db.luyujqqehouxyomxgvrz.supabase.co') loop
        execute 'drop table if exists ' || quote_ident(r.tablename) || ' cascade';
    end loop;
end $$;
