import { getSuppliers } from '@/http/get-suppliers'
import { useQuery } from '@tanstack/react-query'
import { EmptyList } from '../empty-list'
import { ErrorContent, ShowMoreBtn, SupplierCard } from './styles'
import Skeleton from 'react-loading-skeleton'
import { CircleX } from 'lucide-react'

export function SuppliersList() {
  const {
    data: suppliers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['suppliers'],
    queryFn: getSuppliers,
  })

  if (isLoading) {
    return (
      <div>
        <Skeleton count={5} height={70} style={{ marginBottom: '0.5rem' }} />
      </div>
    )
  }

  if (isError) {
    return (
      <ErrorContent>
        <CircleX />
        <h2>Erro ao buscar os Fornecedores</h2>
      </ErrorContent>
    )
  }

  return (
    <>
      {suppliers && suppliers.length > 0 ? (
        suppliers.map((supplier) => (
          <SupplierCard key={supplier.id}>
            <h3>{supplier.name}</h3>
            <ShowMoreBtn to={`/${supplier.id}`}>Detalhes</ShowMoreBtn>
          </SupplierCard>
        ))
      ) : (
        <EmptyList />
      )}
    </>
  )
}
