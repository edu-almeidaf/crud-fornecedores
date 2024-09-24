import { styled } from 'styled-components'

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing['4']};
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing['2']} ${theme.spacing['4']}`};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`

export const CancelButton = styled(ConfirmButton)`
  background-color: #757575;

  &:hover {
    background-color: #616161;
  }
`
