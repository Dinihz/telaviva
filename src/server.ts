import fastify from "fastify"
import sql from './db';
import { DatabasePostgres } from "./database-postgres";

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

  return reply.send(films)
})

server.post('/film/:name', async (request, reply) => {
  const { name, author, description, release_date } = request.body as {
    name: string
    author: string
    description?: string
    release_date?: string
  }

  const filmAlredyExist = await database.findByName(name)

  if (filmAlredyExist) {
    return reply.status(400).send({ error: 'Film already exists.' })
  }

  await database.create({ name, author, description, release_date })

  return reply.status(201).send({ message: 'Film created successfully.' })
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



server.listen({ port: 3000 }).then(() => {
  console.log('HTTP server running.')
})
