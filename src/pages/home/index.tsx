// import { EmptyList } from './components/empty-list'
import { Main } from '@/components/main/styles'
import { Card } from './components/card'
import { FilterSupplier } from './components/filter-supplier'
import { SuppliersList, AddSupplierButton } from './styles'

export function Home() {
  return (
    <Main>
      <h1>Fornecedores</h1>

      <AddSupplierButton to="/new">Novo Fornecedor</AddSupplierButton>

      {/* <EmptyList /> */}

      <div>
        <SuppliersList>
          <FilterSupplier />
          <Card name="Nome do Fornecedor" />
          <Card name="Nome do Fornecedor" />
          <Card name="Nome do Fornecedor a;lskdj lajsd lkjalskdjalksjdlasjdl lasjdlkajsdlkjasldkajsldjasldj asdjlaskjdlasjdlaks laksdjalsdjlsakjd lkjsadlkas daksdalskjdlas jd asldjaslkdj askldaslkdjas dlkjasjdlajsdlasj dlkasjdlka " />
          <Card name="Nome do Fornecedor" />
          <Card name="Nome do Fornecedor" />
          <Card name="Nome do Fornecedor" />
        </SuppliersList>
      </div>
    </Main>
  )
}
