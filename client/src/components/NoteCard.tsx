interface Props {
  note: {
    title: string
    description: string
  }
}
function NoteCard({ note }: Props) {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <button>Delete</button>
      <button>Done</button>
    </div>
  )
}
export default NoteCard
