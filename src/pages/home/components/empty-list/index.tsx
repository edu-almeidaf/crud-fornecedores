import { AddSupplierButton, Box, InboxIcon, TextContainer } from './styles'

export function EmptyList() {
  return (
    <Box>
      <InboxIcon />
      <TextContainer>
        <h2>Nenhum fornecedor encontrado</h2>
        <p>Crie seu primeiro fornecedor</p>
      </TextContainer>
      <AddSupplierButton to="/new">Adicionar</AddSupplierButton>
    </Box>
  )
}
