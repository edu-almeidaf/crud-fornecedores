import { deleteSupplier } from '@/http/delete-supplier'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useDeleteSupplier() {
  const navigate = useNavigate()

  const { mutateAsync: handleDeleteSupplier, isPending } = useMutation({
    mutationFn: (id: string) => deleteSupplier(id),
    onSuccess: () => {
      navigate('/')
    },
    onError: () => {
      toast.error('Erro ao excluir o fornecedor, tente novamente mais tarde')
    },
  })

  return { handleDeleteSupplier, isPending }
}
