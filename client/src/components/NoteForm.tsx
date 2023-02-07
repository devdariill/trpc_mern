import { ChangeEvent, FormEvent, useState } from 'react'

function NoteForm() {
  const [note, setNote] = useState({
    title: '',
    description: '',
  })
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(note)
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
