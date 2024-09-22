import { QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      toast.error(`Algo inesperado aconteceu: ${error.message}`, {
        position: 'bottom-right',
      }),
  }),
})
