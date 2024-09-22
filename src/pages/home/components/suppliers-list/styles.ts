import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SupplierCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border: 1px solid ${({ theme }) => theme.colors.gray.default};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};

  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.default};
  }
`

export const ShowMoreBtn = styled(Link)`
  text-decoration: none;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.default};
  transition: background-color 0.2s;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary.default};
    outline: 0;
  }

  @media (min-width: 1024px) {
    padding: 0.5rem 3rem;
  }
`

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  svg {
    color: ${({ theme }) => theme.colors.danger};
    width: 3rem;
    height: 3rem;
  }

  h2 {
    text-align: center;
  }
`
