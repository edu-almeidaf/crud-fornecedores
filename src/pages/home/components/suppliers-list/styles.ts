import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SupplierCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['4']};
  padding: ${({ theme }) => theme.spacing['4']};
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
  padding: ${({ theme }) => theme.spacing['2']};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.default};
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary.default};
    outline: 0;
  }

  @media (min-width: 1024px) {
    padding: ${({ theme }) => `${theme.spacing['2']} ${theme.spacing['12']}`};
  }
`

export const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['8']};
  padding: ${({ theme }) => theme.spacing['8']};

  svg {
    color: ${({ theme }) => theme.colors.danger};
    width: ${({ theme }) => theme.spacing['12']};
    height: ${({ theme }) => theme.spacing['12']};
  }

  h2 {
    text-align: center;
  }
`

export const ExportCsvButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing['2']} ${theme.spacing['4']}`};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.hover.dark};
  }

  @media (min-width: 1024px) {
    align-self: end;
  }
`
