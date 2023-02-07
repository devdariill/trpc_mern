import { ChangeEvent, FormEvent, useState } from 'react'
import { trpc } from '../utils/trpc'
function NoteForm() {
  const utils = trpc.useContext()
  const addNote = trpc.note.create.useMutation()
  const [note, setNote] = useState({
    title: '',
    description: '',
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(note)
    addNote.mutate(note, {
      onSuccess: () => {
        console.log('note added')
        utils.note.get.invalidate()
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        autoFocus
        onChange={handleChange}
      />
      <textarea
        placeholder="description"
        name="description"
        onChange={handleChange}
      ></textarea>
      <button>Save</button>
    </form>
  )
}

export default NoteForm
