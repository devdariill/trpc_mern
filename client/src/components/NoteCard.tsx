import { trpc } from '../utils/trpc'
interface Props {
  note: {
    _id: string
    title: string
    description: string
  }
}
function NoteCard({ note }: Props) {
  const delteNote = trpc.note.delete.useMutation()
  const utils = trpc.useContext()
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <button
        onClick={() => {
          delteNote.mutate(note._id, {
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
      <button>Done</button>
    </div>
  )
}
export default NoteCard
