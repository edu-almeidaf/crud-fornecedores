import { Contact } from '@/interfaces/contact'
import { Card, PhoneContainer, WhatsappButton } from './styles'
import { Address } from '@/interfaces/address'
import { WhatsappIcon } from './whatsapp-icon'

interface ContactCardProps {
  index: number
  contact: Contact
}

export function ContactCard({ index, contact }: ContactCardProps) {
  function getFullAddress(address: Address) {
    const { street, number, complement } = address
    return complement
      ? `${street}, ${number}, ${complement}`
      : `${street}, ${number}`
  }

  function formatPhoneNumber(phoneNumber: string) {
    const formattedPhoneNumber = phoneNumber.replace(/\D/g, '')

    if (formattedPhoneNumber.length === 11) {
      return `+55${formattedPhoneNumber}`
    }

    return formatPhoneNumber
  }

  function handleOpenNewWhatsapppChat(phoneNumber: string) {
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber)

    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`

    window.open(whatsappUrl, '_blank')
  }
  return (
    <Card>
      <h2>Contato {index + 1}</h2>
      <p>
        Nome: <span>{contact.name}</span>
      </p>

      <PhoneContainer>
        <p>
          Telefone: <span>{contact.phoneNumber}</span>
        </p>
        <WhatsappButton
          onClick={() => handleOpenNewWhatsapppChat(contact.phoneNumber)}
        >
          <WhatsappIcon />
        </WhatsappButton>
      </PhoneContainer>

      <p>
        CEP: <span>{contact.address.zipCode}</span>
      </p>

      <p>
        Endereço: <span>{getFullAddress(contact.address)}</span>
      </p>

      {contact.address.reference.length > 0 && (
        <p>
          Referência: <span>{contact.address.reference}</span>
        </p>
      )}

      <p>
        Cidade:{' '}
        <span>
          {contact.address.city}-{contact.address.state}
        </span>
      </p>
    </Card>
  )
}
