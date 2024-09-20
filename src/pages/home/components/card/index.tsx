import { MessageCircle, PencilLine, Trash2 } from 'lucide-react'
import {
  ActionContainer,
  DeleteButton,
  EditButton,
  SendWhatsappButton,
  SupplierCard,
  SupplierTitle,
} from './styles'

interface CardProps {
  name: string
}

export function Card({ name }: CardProps) {
  return (
    <SupplierCard>
      <SupplierTitle>{name}</SupplierTitle>
      <ActionContainer>
        <SendWhatsappButton
          as="a"
          href="https://wa.me/5542999402705"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle />
        </SendWhatsappButton>

        <EditButton>
          <PencilLine />
        </EditButton>

        <DeleteButton>
          <Trash2 />
        </DeleteButton>
      </ActionContainer>
    </SupplierCard>
  )
}
