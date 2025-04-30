import fastify from "fastify"
import sql from './db';

const app = fastify()

app.post('/film', () => {
  return 'main'
})

app.get('/film', () => {
  return 'create films'
})

app.put('/film/:name', () => {
  return 'edit films'
})

app.delete('/film/:name', () => {
  return 'delete a film'
})

app.get('/test-db', async () => {
  const result = await sql`SELECT NOW()`;
  return { db_time: result[0].now };
});



app.listen({ port: 3000 }).then(() => {
  console.log('HTTP server running.')
})
