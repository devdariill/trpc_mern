import { trpc } from '../utils/trpc'
interface Props {
  note: {
    _id: string
    title: string
    description: string
    done: boolean
  }
}
function NoteCard({ note }: Props) {
  const deleteNote = trpc.note.delete.useMutation()
  const toggleUpdate = trpc.note.updateNote.useMutation()
  const utils = trpc.useContext()
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <button
        onClick={() => {
          deleteNote.mutate(note._id, {
            onSuccess: (data) => {
              if (data) utils.note.get.invalidate()
            },
            onError: (e) => {
              console.log(
                console.log(
                  '🚀 ~ file: NoteForm.tsx:13 ~ handleSubmit ~ mutate',
                  e.message + '-------'
                )
              )
            },
          })
        }}
      >
        Delete
      </button>
      <button
        onClick={async () => {
          await toggleUpdate.mutate(note._id, {
            onSuccess: (data) => {
              if (data) utils.note.get.invalidate()
            },
            onError: (e) => {
              console.log(
                console.log(
                  '🚀 ~ file: NoteForm.tsx:13 ~ handleSubmit ~ mutate',
                  e.message + '-------'
                )
              )
            },
          })
        }}
      >
        {note.done ? 'Undone' : 'Done'}
      </button>
    </div>
  )
}
export default NoteCard
