import { getSuppliers } from '@/http/get-suppliers'
import { useQuery } from '@tanstack/react-query'
import { EmptyList } from '../empty-list'
import { ShowMoreBtn, SupplierCard } from './styles'

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
    return <div>Carregando...</div>
  }

  if (isError) {
    return <h1>Erro ao buscar os Fornecedores</h1>
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
