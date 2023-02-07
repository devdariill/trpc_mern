import { trpc } from '../utils/trpc'
import NoteCard from './NoteCard'

function NotesList() {
  // const notes = trpc.note.get.useQuery()
  // return <div>{JSON.stringify(notes.data)}</div>
  const { data, isLoading, isError, error } = trpc.note.get.useQuery()
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  console.log(data)
  return (
    <>
      {data.map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </>
  )
}
export default NotesList
