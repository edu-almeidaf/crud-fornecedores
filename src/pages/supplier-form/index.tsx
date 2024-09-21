import { Main } from '@/components/main/styles'
import { useParams } from 'react-router-dom'

interface SupplierFormProps {
  mode: 'new' | 'edit'
}

export function SupplierForm({ mode }: SupplierFormProps) {
  const { id } = useParams()

  const isEditSupplierPage = mode === 'edit' && id
  return (
    <Main>
      <h1>{isEditSupplierPage ? 'Editar Fornecedor' : 'Novo Fornecedor'}</h1>
    </Main>
  )
}
