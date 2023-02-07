import { publicProcedure, router } from '../trpc'
import { z } from 'zod'
import Note from '../models/note'

const getNotes = publicProcedure.query(async () => {
  const notes = await Note.find()
  return notes
  // return [
  //   {
  //     id: '1',
  //     title: 'My first note',
  //     content: 'Content of my first note',
  //   },
  // ]
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
  .mutation(async (props) => {
    console.log(props)
    const { input } = props
    // new Note(input)
    const newNote = new Note({
      title: input.title,
      description: input.description,
    })
    const saveNote = await newNote.save()
    return saveNote
  })
export const notesRouter = router({ get: getNotes, create: createNote })
