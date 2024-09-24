import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const BackButton = styled(Link)`
  width: ${({ theme }) => theme.spacing['12']};
  height: ${({ theme }) => theme.spacing['12']};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary.dark};
  border-radius: ${({ theme }) => theme.radius.full};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.dark};
    outline-offset: 2px;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary.dark};

    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 768px) {
    top: auto;
    bottom: ${({ theme }) => theme.spacing['5']};
    left: ${({ theme }) => theme.spacing['5']};
  }
`

export const BackIcon = styled(ArrowLeft)`
  font-size: ${({ theme }) => theme.spacing['4.5']};
  color: ${({ theme }) => theme.colors.primary.dark};
`
