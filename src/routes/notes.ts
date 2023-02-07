import { publicProcedure, router } from '../trpc'

const getNotes = publicProcedure.query(() => {
  return []
})
export const notesRouter = router({ get: getNotes })
