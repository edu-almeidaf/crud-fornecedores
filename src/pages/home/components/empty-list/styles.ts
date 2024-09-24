import { PackageOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => `${theme.spacing['12']} ${theme.spacing['4']}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['8']};
`

export const InboxIcon = styled(PackageOpen)`
  width: ${({ theme }) => theme.spacing['24']};
  height: ${({ theme }) => theme.spacing['24']};
  stroke-width: 1;
  color: ${({ theme }) => theme.colors.primary.default};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2']};
  text-align: center;

  @media (min-width: 1024px) {
    h2 {
      font-size: ${({ theme }) => theme.spacing['8']};
    }

    p {
      font-size: ${({ theme }) => theme.spacing['5']};
    }
  }
`

export const AddSupplierButton = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing.full};
  padding: ${({ theme }) => `${theme.spacing['4']} ${theme.spacing['32']}`};
  text-align: center;
  border-radius: ${({ theme }) => theme.radius.md};

  @media (min-width: 1024px) {
    width: auto;
    font-size: ${({ theme }) => theme.spacing['5']};
  }
`
