import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content } from './styles'
import { ComponentProps, forwardRef } from 'react'

export interface DialogContentProps
  extends ComponentProps<typeof Dialog.Content> {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <Dialog.Portal>
        <Overlay />
        <Content {...props} ref={ref}>
          {children}
        </Content>
      </Dialog.Portal>
    )
  },
)
