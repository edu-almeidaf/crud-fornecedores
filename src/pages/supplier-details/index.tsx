import { Main } from '@/components/main/styles'
import { getSupplierDetails } from '@/http/get-supplier-details'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { ContactCard, ContactList, SupplierDetailsContainer } from './styles'

interface Address {
  street: string
  number: string
  complement: string
}

export function SupplierDetails() {
  const { id } = useParams<{ id: string }>()

  const { data: supplier } = useQuery({
    queryKey: ['suppliers', id],
    queryFn: () => getSupplierDetails(id as string),
  })

  function getFullAddress(address: Address) {
    const { street, number, complement } = address
    return complement
      ? `${street}, ${number}, ${complement}`
      : `${street}, ${number}`
  }

  return (
    <Main>
      <h1>Detalhes do Fornecedor</h1>

      <SupplierDetailsContainer>
        <p>
          Nome: <span>{supplier?.name}</span>
        </p>
        <p>
          Descrição: <span>{supplier?.description}</span>
        </p>

        <h2>Contatos</h2>

        <ContactList>
          {supplier?.contacts.map((contact, index) => (
            <ContactCard key={index}>
              <h2>Contato {index + 1}</h2>
              <p>
                Nome: <span>{contact.name}</span>
              </p>

              <p>
                Telefone: <span>{contact.phoneNumber}</span>
              </p>

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
            </ContactCard>
          ))}
        </ContactList>
      </SupplierDetailsContainer>
    </Main>
  )
}
