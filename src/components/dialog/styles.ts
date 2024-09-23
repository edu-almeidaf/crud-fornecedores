import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 90vw;
  max-width: 450px;
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const Description = styled(Dialog.Description)`
  font-size: 1rem;
  margin-bottom: 2rem;
`
