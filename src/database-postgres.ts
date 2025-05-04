import { randomUUID } from "node:crypto";
import sql from "./db";

export class DatabasePostgres {
  async list(search?: string) {
    let films;

    if (search) {
      films = await sql`
        SELECT * FROM films
        WHERE name ILIKE ${"%" + search + "%"}
        OR author ILIKE ${"%" + search + "%"}
      `;
    } else {
      films = await sql`SELECT * FROM films`;
    }

    return films;
  }

  async create(film: {
    name: string;
    author: string;
    description?: string;
    release_date?: string;
  }) {
    const filmId = randomUUID();
    const { name, author, description, release_date } = film;

    await sql`
      INSERT INTO films (id, name, author, description, release_date)
      VALUES (${filmId}, ${name}, ${author}, ${description}, ${release_date})
    `;
  }

  async update(
    name: string,
    film: {
      name?: string;
      author?: string;
      description?: string;
      release_date?: string;
    },
  ) {
    const fields: string[] = [];
    const values: any[] = [];

    if (film.name) {
      fields.push(`name = $${fields.length + 1}`);
      values.push(film.name);
    }
    if (film.author) {
      fields.push(`author = $${fields.length + 1}`);
      values.push(film.author);
    }
    if (film.description) {
      fields.push(`description = $${fields.length + 1}`);
      values.push(film.description);
    }
    if (film.release_date) {
      fields.push(`release_date = $${fields.length + 1}`);
      values.push(film.release_date);
    }

    if (fields.length === 0) return;

    values.push(name);

    const query = `
      UPDATE films
      SET ${fields.join(", ")}
      WHERE name = $${fields.length + 1}
    `;

    await sql.unsafe(query, values);
  }

  async delete(name: string) {
    await sql`
      DELETE FROM films
      WHERE name = ${name}
    `;
  }

  async findByName(name: string) {
    const film = await sql`
      SELECT * FROM films
      WHERE name = ${name}
    `;
    return film[0];
  }
}
