import sql from "../src/db";

export async function up() {
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

    console.log("Migration UP: Table 'films' created successfully!");
  } catch (error) {
    console.error("Error executing UP migration:", error);
    throw error;
  }
}

export async function down() {
  try {
    await sql`
      DROP TABLE IF EXISTS films;
    `;

    console.log("Migration DOWN: Table 'films' dropped successfully!");
  } catch (error) {
    console.error("Error executing DOWN migration:", error);
    throw error;
  }
} 