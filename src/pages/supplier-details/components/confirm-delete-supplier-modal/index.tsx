import { Description, Title } from '@/components/dialog/styles'
import { DialogContent } from '@/components/dialog/content'
import { ButtonGroup, CancelButton, ConfirmButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

interface ConfirmDeleteSupplierModalProps {
  onConfirm: () => void
}

export function ConfirmDeleteSupplierModal({
  onConfirm,
}: ConfirmDeleteSupplierModalProps) {
  return (
    <DialogContent>
      <Title>Excluir Fornecedor</Title>
      <Description>
        Tem certeza que deseja excluir o fornecedor? Essa ação não pode ser
        desfeita.
      </Description>
      <ButtonGroup>
        <Dialog.Close asChild>
          <CancelButton>Cancelar</CancelButton>
        </Dialog.Close>
        <ConfirmButton onClick={onConfirm}>Excluir</ConfirmButton>
      </ButtonGroup>
    </DialogContent>
  )
}
