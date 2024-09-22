import { Main } from '@/components/main/styles'
import { SuppliersList } from './components/suppliers-list'
import { FilterSupplier } from './components/filter-supplier'
import { SuppliersSection, AddSupplierButton } from './styles'

export function Home() {
  return (
    <Main>
      <h1>Fornecedores</h1>

      <AddSupplierButton to="/new">Novo Fornecedor</AddSupplierButton>

      <div>
        <SuppliersSection>
          <FilterSupplier />
          <SuppliersList />
        </SuppliersSection>
      </div>
    </Main>
  )
}
