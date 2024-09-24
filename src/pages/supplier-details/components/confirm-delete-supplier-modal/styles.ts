import { styled } from 'styled-components'

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing['4']};
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.confirm};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing['2']} ${theme.spacing['4']}`};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
  }
`

export const CancelButton = styled(ConfirmButton)`
  background-color: ${({ theme }) => theme.colors.gray.medium};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray.dark};
  }
`
