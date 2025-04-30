import sql from "./db";

async function createTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS films (
        id UUID PRIMARY KEY,
        name TEXT UNIQUE NOT NULL,
        author TEXT NOT NULL,
        description TEXT,
        release_date DATE
      );
    `;

    console.log("Tabela 'films' criada com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tabela:", error);
  }
}

createTable();

