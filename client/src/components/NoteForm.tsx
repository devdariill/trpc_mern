import { ChangeEvent, FormEvent, useState } from 'react'
import { trpc } from '../utils/trpc'
function NoteForm() {
  const utils = trpc.useContext()
  const addNote = trpc.note.create.useMutation()
  const initialState = {
    title: '',
    description: '',
  }
  const [note, setNote] = useState(initialState)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(note)
    addNote.mutate(note, {
      onSuccess: () => {
        console.log('note added')
        utils.note.get.invalidate()
        setNote(initialState)
      },
      onError: (e) => {
        console.log(
          'error' +
            console.log('🚀 ~ file: NoteForm.tsx:13 ~ handleSubmit ~ mutate', e)
        )
      },
    })
  }
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value)
    setNote({ ...note, [e.target.name]: e.target.value })
    //   const { name, value } = e.target
    //   setnote({ ...note, [name]: value })
  }
  return (
    <form className="bg-zinc-900 rounded-md p-6" onSubmit={handleSubmit}>
      <input
        value={note.title}
        className="bg-neutral-800 px-3 py-2 w-full block rounded-md mb-3"
        type="text"
        placeholder="title"
        name="title"
        autoFocus
        onChange={handleChange}
      />
      <textarea
        value={note.description}
        className="bg-neutral-800 px-3 py-2 w-full block rounded-md mb-3"
        placeholder="description"
        name="description"
        onChange={handleChange}
      ></textarea>
      <button className="bg-zinc-500 px-3 py-2 rounded-md  block text-white w-full">
        Save
      </button>
    </form>
  )
}

export default NoteForm
