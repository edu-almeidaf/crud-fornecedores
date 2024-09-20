import { Container, FilterButton, FilterInput } from './styles'

export function FilterSupplier() {
  return (
    <Container>
      <FilterInput type="text" placeholder="Encontre um fornecedor pelo nome" />
      <FilterButton>Pesquisar</FilterButton>
    </Container>
  )
}
