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
const createNote = publicProcedure.mutation((props) => {
  console.log(props)
  return 'received'
})
export const notesRouter = router({ get: getNotes, create: createNote })
