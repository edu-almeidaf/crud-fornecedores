import { updateSupplier } from '@/http/update-supplier'
import { FormData } from '@/schemas/supplier-form-schema'
import { useMutation } from '@tanstack/react-query'

export function useUpdateSupplier() {
  const { mutateAsync: handleUpdateSupplier, isPending: updatePending } =
    useMutation({
      mutationFn: ({ id, data }: { id: string; data: FormData }) =>
        updateSupplier({ id, data }),
    })

  return { handleUpdateSupplier, updatePending }
}
