import { Main, PageTitle } from '@/components/main/styles'
import { SuppliersList } from './components/suppliers-list'
import { FilterSupplier } from './components/filter-supplier'
import { SuppliersSection, AddSupplierButton } from './styles'

export function Home() {
  return (
    <Main>
      <PageTitle>Fornecedores</PageTitle>

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
