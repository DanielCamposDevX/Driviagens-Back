import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const { Pool } = pg

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === "production") configDatabase.ssl = true;



export const db = new Pool(configDatabase);

async function testarConexao() {
  try {
      await db.query('SELECT version()');
    console.log('Conexão bem-sucedida!');
    
  } catch (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err);
  } 
}
testarConexao();