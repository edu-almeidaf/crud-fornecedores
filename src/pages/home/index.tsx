// import { EmptyList } from './components/empty-list'
import { Card } from './components/card'
import { FilterSupplier } from './components/filter-supplier'
import { Main, SuppliersGrid } from './styles'

export function Home() {
  return (
    <Main>
      <h1>Fornecedores</h1>

      <FilterSupplier />

      {/* <EmptyList /> */}
      <SuppliersGrid>
        <Card name="Nome do Fornecedor" />
        <Card name="Nome do Fornecedor" />
        <Card name="Nome do Fornecedor a;lskdj lajsd lkjalskdjalksjdlasjdl lasjdlkajsdlkjasldkajsldjasldj asdjlaskjdlasjdlaks laksdjalsdjlsakjd lkjsadlkas daksdalskjdlas jd asldjaslkdj askldaslkdjas dlkjasjdlajsdlasj dlkasjdlka " />
        <Card name="Nome do Fornecedor" />
        <Card name="Nome do Fornecedor" />
        <Card name="Nome do Fornecedor" />
      </SuppliersGrid>
    </Main>
  )
}
