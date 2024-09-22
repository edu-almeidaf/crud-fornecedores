import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackButton = styled(Link)`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;
  outline: none;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.dark};
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: 20px;
    left: 20px;
  }
`

export const BackIcon = styled(ArrowLeft)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary.dark};
`
