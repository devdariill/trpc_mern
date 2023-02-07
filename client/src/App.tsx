import { trpc } from './utils/trpc'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import AppContext from './AppContext'

function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [httpBatchLink({ url: '/trpc' })],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContext />
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App
