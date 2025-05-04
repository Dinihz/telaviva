import fastify from "fastify"
import sql from './db';
import { DatabasePostgres } from "./database-postgres";
import { createTable } from "./init-db";

const server = fastify()
const database = new DatabasePostgres()

server.post('/film', async (request, reply) => {
  const { name, author, description, release_date } = request.body as {
    name: string
    author: string,
    description?: string,
    release_date?: string
  }

  const filmAlreadyExist = await database.findByName(name)

  if (filmAlreadyExist) {
    return reply.status(400).send({ error: 'Film already exists.' })
  }

  await database.create({ name, author, description, release_date })

  return reply.status(201).send({ message: 'Film created successfully.' })
})


server.get('/film', async (request, reply) => {
  const { search } = request.query as { search?: string }

  const films = await database.list(search)

  const formattedFilms = films.map(film => ({
    ...film,
    release_date: film.release_date?.toISOString().split('T')[0]
  }))

  return reply.send(formattedFilms)
})

server.put('/film/:name', async (request, reply) => {
  const { name: paramName } = request.params as { name: string }
  const { name, author, description, release_date } = request.body as {
    name?: string
    author?: string
    description?: string
    release_date?: string
  }

  const film = await database.findByName(paramName)

  if (!film) {
    return reply.status(404).send({ error: 'Film not found.' })
  }

  await database.update(paramName, { name, author, description, release_date })

  return reply.send({ message: 'Film updated successfully.' })
})

server.delete('/film/:name', async (request, reply) => {
  const { name } = request.params as { name: string }

  const film = await database.findByName(name)

  if (!film) {
    return reply.status(404).send({ error: 'Film not found. ' })
  }

  await database.delete(name)

  return reply.send({ message: 'Film deleted successfully ' })
})

server.get('/test-db', async () => {
  const result = await sql`SELECT NOW()`;
  return { db_time: result[0].now };
});

async function start() {
  await createTable()

  server.listen({ port: 3000 }).then(() => {
    console.log('HTTP server running.')
  }).catch(err => {
    console.error('Error starting the server:', err)
    process.exit(1)
  })
}

start()
