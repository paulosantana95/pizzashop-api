import { Elysia } from 'elysia'
import chalk from 'chalk'

const app = new Elysia()
  .get('/', () => {
    return 'Hello, World!'
  })

app.listen(3333, () => {
  console.log(chalk.blueBright('🔥 HTTP server running'))
})