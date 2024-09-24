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
  padding: ${({ theme }) => theme.spacing['8']};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  width: 90vw;
  max-width: 450px;
`

export const Title = styled(Dialog.Title)`
  font-size: ${({ theme }) => theme.spacing['6']};
  margin-bottom: ${({ theme }) => theme.spacing['4']};
`

export const Description = styled(Dialog.Description)`
  font-size: ${({ theme }) => theme.spacing['4']};
  margin-bottom: ${({ theme }) => theme.spacing['8']};
  text-align: center;
`
