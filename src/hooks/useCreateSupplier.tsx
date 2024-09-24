import { createSupplier } from '@/http/create-supplier'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useCreateSupplier() {
  const navigate = useNavigate()

  const { mutateAsync: handleCreateSupplier, isPending: createPending } =
    useMutation({
      mutationFn: createSupplier,
      onSuccess: () => {
        toast.success('Fornecedor criado com sucesso')
        navigate('/')
      },
    })

  return { handleCreateSupplier, createPending }
}
