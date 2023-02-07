import { trpc } from './utils/trpc'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import NotesList from './components/NotesList'
import NoteForm from './components/NoteForm'

function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: 'http://localhost:3000/trpc' })],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <>
          <NoteForm />
          <NotesList />
        </>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
