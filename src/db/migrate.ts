/**
 * @deprecated This migrate drizzle file is deprecated but still works.
 * Please use command npx|bunx drizzle-kit migrate.
 */

import postgres from 'postgres'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { env } from '../env'

console.warn(
  '⚠️ This migrate script is deprecated. Please use the command `bun drizzle-kit migrate` instead.',
)

const connection = postgres(env.DATABASE_URL, { max: 1 })
const db = drizzle({ client: connection })

await migrate(db, { migrationsFolder: 'drizzle' })
await connection.end()

process.exit()
