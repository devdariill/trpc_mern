import { publicProcedure, router } from '../trpc'

const getNotes = publicProcedure.query(() => {
  return [
    {
      id: '1',
      title: 'My first note',
      content: 'Content of my first note',
    },
  ]
  // return []
})
export const notesRouter = router({ get: getNotes })
