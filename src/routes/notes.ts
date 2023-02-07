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
const deleteNote = publicProcedure.input(z.string()).mutation(async (props) => {
  const { input } = props
  const noteFound = await Note.findByIdAndDelete(input)
  // throw new Error('Error custom')
  if (!noteFound) throw new Error('Note not found')
  return true
})
const updateNote = publicProcedure.input(z.string()).mutation(async (props) => {
  try {
    const { input } = props
    const foundNote = await Note.findById(input)
    if (!foundNote) throw new Error('Note not found')
    foundNote.done = !foundNote.done
    await foundNote.save()
    return true
  } catch (error) {
    console.log('🚀 ~ file: notes.ts:52 ~ updateNote ~ error', error)
    return false
  }
})
export const notesRouter = router({
  get: getNotes,
  create: createNote,
  delete: deleteNote,
  updateNote,
})
