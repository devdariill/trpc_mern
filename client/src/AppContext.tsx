import NoteForm from './components/NoteForm'
import NotesList from './components/NotesList'

function AppContext() {
  return (
    <div className="max-w-xl m-auto h-screen py-40">
      <h1 className="text-5xl font-bold text-center py5">Notes</h1>
      <NoteForm />
      <NotesList />
    </div>
  )
}

export default AppContext
