import postgres from "postgres";

const sql = postgres("postgres://user:user@192.168.1.15:5433/pedro_naves"); //só muda o nome do banco ai dps no projeto

export default sql;