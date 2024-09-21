import { EmptyList } from './components/empty-list'
import { Main } from '@/components/main/styles'
import { Card } from './components/card'
import { FilterSupplier } from './components/filter-supplier'
import { SuppliersList, AddSupplierButton } from './styles'
import { useQuery } from '@tanstack/react-query'
import { getSuppliers } from '@/http/get-suppliers'

export function Home() {
  const { data: suppliers } = useQuery({
    queryKey: ['suppliers'],
    queryFn: getSuppliers,
  })

  console.log(suppliers)

  return (
    <Main>
      <h1>Fornecedores</h1>

      <AddSupplierButton to="/new">Novo Fornecedor</AddSupplierButton>

      <div>
        <SuppliersList>
          <FilterSupplier />
          {suppliers && suppliers.length > 0 ? (
            suppliers.map((supplier) => (
              <Card key={supplier.id} name={supplier.name} id={supplier.id} />
            ))
          ) : (
            <EmptyList />
          )}
        </SuppliersList>
      </div>
    </Main>
  )
}
