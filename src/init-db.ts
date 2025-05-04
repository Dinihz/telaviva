import sql from "./db";

export async function createTable() {
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

    console.log("Table 'films' verified/created successfully!");
  } catch (error) {
    console.error("Error creating table:", error);
    process.exit(1);
  }
}
