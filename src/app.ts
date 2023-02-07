import morgan from 'morgan'
import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import * as trpc from '@trpc/server'
import { router, createContext } from './trpc'

const app = express()
app.use(morgan('dev'))

const appRouter = router({})
app.use("/trpc", trpcExpress.createExpressMiddleware({
    router:appRouter,
    createContext
    // createContext: () => {}// sirve para compartir router user se usa esto
})

export default app
