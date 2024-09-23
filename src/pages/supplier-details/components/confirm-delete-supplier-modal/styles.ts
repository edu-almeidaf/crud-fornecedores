import { styled } from 'styled-components'

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`

export const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
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
