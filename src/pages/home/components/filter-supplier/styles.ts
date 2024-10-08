import { Input } from '@/components/form'
import styled from 'styled-components'

export const Container = styled.form`
  background-color: ${({ theme }) => theme.colors.primary.default};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4']};
  padding: ${({ theme }) => theme.spacing['4']};
  border-radius: ${({ theme }) => `${theme.radius['2xl']} ${theme.radius.md}`};

  & > div {
    flex: 1;
  }

  @media (min-width: 1024px) {
    padding: ${({ theme }) => `${theme.spacing['8']} ${theme.spacing['4']}`};
    flex-direction: row;
    align-items: center;
  }
`

export const FilterInput = styled(Input)`
  flex: 1;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.white};
  }
`

export const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange.default};
  padding: ${({ theme }) => `${theme.spacing['3.5']} ${theme.spacing['12']}`};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.orange.default};
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.orange.default};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.orange.hover};
  }

  @media (min-width: 1024px) {
    & {
      font-size: ${({ theme }) => theme.spacing['5']};
    }
  }
`
