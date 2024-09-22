import { createSupplier } from '@/http/create-supplier'
import { useMutation } from '@tanstack/react-query'

export function useCreateSupplier() {
  const { mutateAsync: handleCreateSupplier, isPending } = useMutation({
    mutationFn: createSupplier,
  })

  return { handleCreateSupplier, isPending }
}
