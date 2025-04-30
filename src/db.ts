import postgres from 'postgres'
import dotenv from 'dotenv'

dotenv.config()

const sql = postgres({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

export default sql

