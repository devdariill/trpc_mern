import { publicProcedure, router } from '../trpc'
import { z } from 'zod'
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
// const createNote = publicProcedure
//   .input(z.object({ title: z.string(), description: z.string() }))
//   .mutation(({ input }) => {
//     console.log(input)
//     return 'received'
//   })
const createNote = publicProcedure
  .input(z.object({ title: z.string(), description: z.string() }))
  .mutation((props) => {
    console.log(props)
    return 'received'
  })
export const notesRouter = router({ get: getNotes, create: createNote })
