import { ListSuppliers } from '@/components/list-suppliers'
import { Main } from './styles'

export function Home() {
  return (
    <Main>
      <h1>Fornecedores</h1>

      <ListSuppliers />
    </Main>
  )
}
