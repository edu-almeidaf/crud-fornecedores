import { EmptyList } from './components/empty-list'
import { FilterSupplier } from './components/filter-supplier'
import { Main } from './styles'

export function Home() {
  return (
    <Main>
      <h1>Fornecedores</h1>

      <FilterSupplier />

      <EmptyList />
    </Main>
  )
}
