import logo from '@/assets/logo.png'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </Container>
  )
}
