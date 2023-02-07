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
    <div className="bg-zinc-800 p-2 mb-2 flex justify-between">
      <div>
        <h1 className="font-bold text-xl">{note.title}</h1>
        <p>{note.description}</p>
      </div>
      <div className="flex gap-x-5">
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
          className="bg-red-500 px-3 py-2 rounded-md ml-auto text-white"
        >
          Delete
        </button>
        <button
          onClick={() => {
            toggleUpdate.mutate(note._id, {
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
          className={`${
            note.done ? 'bg-zinc-500' : 'bg-green-500'
          } px-3 py-2 rounded-md ml-auto text-white`}
        >
          {note.done ? 'Undone' : 'Done'}
        </button>
      </div>
    </div>
  )
}
export default NoteCard
