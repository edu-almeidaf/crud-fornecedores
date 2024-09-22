import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export const SuppliersSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
