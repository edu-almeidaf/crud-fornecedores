import { styled } from 'styled-components'

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing['4']};
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.confirm};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing['4']} ${theme.spacing['4']}`};
  border: none;
  flex: 1;
  border-radius: ${({ theme }) => theme.radius.md};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.danger};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.danger};
  }
`

export const CancelButton = styled(ConfirmButton)`
  background-color: ${({ theme }) => theme.colors.gray.medium};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.gray.medium};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`
