import { PackageOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.gray.light};
  border-radius: 12px;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const InboxIcon = styled(PackageOpen)`
  width: 100px;
  height: 100px;
  stroke-width: 1;
  color: ${({ theme }) => theme.colors.primary.default};
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`

export const AddSupplierButton = styled(Link)`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 1rem 8rem;
  text-align: center;
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: auto;
    font-size: 1.25rem;
  }
`
