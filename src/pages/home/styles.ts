import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 4.25rem;
  height: calc(100vh - 4.25rem);
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export const NewSupplierCard = styled.div`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
`

export const AddSupplierButton = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 1rem 8rem;
  text-align: center;
  align-self: flex-end;
  border-radius: ${({ theme }) => theme.radius.md};

  @media (min-width: 1024px) {
    width: auto;
    font-size: 1.25rem;
  }
`

export const SuppliersList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
