import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NewSupplierCard = styled.div`
  padding: ${({ theme }) => theme.spacing['4']};
  border-radius: ${({ theme }) => theme.radius.md};
`

export const AddSupplierButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['4']};
  width: ${({ theme }) => theme.spacing.full};
  text-align: center;
  align-self: flex-end;
  border-radius: ${({ theme }) => theme.radius.md};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover.default};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.default};
  }

  @media (min-width: 1024px) {
    width: auto;
    padding: ${({ theme }) => `${theme.spacing['4']} ${theme.spacing['32']}`};
    font-size: ${({ theme }) => theme.spacing['5']};
  }
`

export const SuppliersSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2']};
`
