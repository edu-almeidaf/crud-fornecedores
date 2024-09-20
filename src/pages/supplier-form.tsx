import { useParams } from 'react-router-dom'

interface SupplierFormProps {
  mode: string
}

export function SupplierForm({ mode }: SupplierFormProps) {
  const { id } = useParams()

  return (
    <h1>
      Supplier Form - {mode} - {id && id}
    </h1>
  )
}
