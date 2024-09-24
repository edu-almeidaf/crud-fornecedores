import { BackButtonComponent } from '@/components/back-button'
import { Main, PageHeader, PageTitle } from '@/components/main/styles'
import { NotFoundMessageContainer } from './styles'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <Main>
      <PageHeader>
        <BackButtonComponent url="/" />

        <PageTitle>Ops!, Algo deu errado...</PageTitle>

        <NotFoundMessageContainer>
          <p>
            A página que você está procurando não existe ou não conseguimos
            encontrar o item solicitado. Por favor, verifique o URL ou volte
            para a <Link to="/">página inicial</Link>.
          </p>
        </NotFoundMessageContainer>
      </PageHeader>
    </Main>
  )
}
