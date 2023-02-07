import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import * as trpc from '@trpc/server'
import { router, createContext } from './trpc'
import { notesRouter } from './routes/notes'

const app = express()
app.use(cors())
app.use(morgan('dev'))

const appRouter = router({
  note: notesRouter,
  // products: productsRouter,
  // users: usersRouter,
})
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
    // createContext: () => {}// sirve para compartir router user se usa esto
  })
)
export type AppRouter = typeof appRouter

export default app
