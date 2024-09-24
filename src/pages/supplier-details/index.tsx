import * as Dialog from '@radix-ui/react-dialog'
import { Main, PageHeader, PageTitle } from '@/components/main/styles'
import { getSupplierDetails } from '@/http/get-supplier-details'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {
  ContactCard,
  ContactList,
  DeleteProfileButton,
  SupplierDetailsContainer,
  SupplierSkeletonWrapper,
  UpdateProfileLink,
} from './styles'
import { BackButtonComponent } from '@/components/back-button'
import { Address } from '@/interfaces/address'
import { ConfirmDeleteSupplierModal } from './components/confirm-delete-supplier-modal'
import { useState } from 'react'
import { useDeleteSupplier } from '@/hooks/useDeleteSupplier'
import Skeleton from 'react-loading-skeleton'
import { NotFound } from '../not-found'

export function SupplierDetails() {
  const { id } = useParams<{ id: string }>()
  const [isDeleteSupplierModalOpen, setIsDeleteSupplierModalOpen] =
    useState(false)
  const { handleDeleteSupplier } = useDeleteSupplier()

  const {
    data: supplier,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supplierDetails', id],
    queryFn: () => getSupplierDetails(id as string),
  })

  function getFullAddress(address: Address) {
    const { street, number, complement } = address
    return complement
      ? `${street}, ${number}, ${complement}`
      : `${street}, ${number}`
  }

  async function handleConfirmDeleteSupplier() {
    await handleDeleteSupplier(id as string)
    setIsDeleteSupplierModalOpen(false)
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <Main>
      <PageHeader>
        <BackButtonComponent url="/" />

        <PageTitle>Detalhes do Fornecedor</PageTitle>
      </PageHeader>

      <SupplierDetailsContainer>
        {isLoading ? (
          <SupplierSkeletonWrapper>
            <Skeleton height={20} />
            <Skeleton height={20} />
          </SupplierSkeletonWrapper>
        ) : (
          <>
            <p>
              Nome: <span>{supplier?.name}</span>
            </p>
            <p>
              Descrição: <span>{supplier?.description}</span>
            </p>
          </>
        )}

        <h2>Contatos</h2>

        <ContactList>
          {isLoading ? (
            <>
              <Skeleton height={284} />
              <Skeleton height={284} />
            </>
          ) : (
            <>
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
            </>
          )}
        </ContactList>

        {supplier && (
          <>
            <UpdateProfileLink to={`/${id}/edit`} aria-disabled>
              Atualizar Contato
            </UpdateProfileLink>

            <Dialog.Root
              open={isDeleteSupplierModalOpen}
              onOpenChange={setIsDeleteSupplierModalOpen}
            >
              <Dialog.Trigger asChild>
                <DeleteProfileButton>Deletar Contato</DeleteProfileButton>
              </Dialog.Trigger>

              <ConfirmDeleteSupplierModal
                onConfirm={handleConfirmDeleteSupplier}
              />
            </Dialog.Root>
          </>
        )}
      </SupplierDetailsContainer>
    </Main>
  )
}
