import { updateSupplier } from '@/http/update-supplier'
import { FormData } from '@/schemas/supplier-form-schema'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useUpdateSupplier() {
  const navigate = useNavigate()

  const { mutateAsync: handleUpdateSupplier, isPending: updatePending } =
    useMutation({
      mutationFn: ({ id, data }: { id: string; data: FormData }) =>
        updateSupplier({ id, data }),
      onSuccess: (_, { id }) => {
        toast.success('Fornecedor atualizado com sucesso')
        navigate(`/${id}`)
      },
    })

  return { handleUpdateSupplier, updatePending }
}
