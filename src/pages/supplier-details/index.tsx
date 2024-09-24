import * as Dialog from '@radix-ui/react-dialog'
import { Main, PageHeader, PageTitle } from '@/components/main/styles'
import { getSupplierDetails } from '@/http/get-supplier-details'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {
  ContactList,
  DeleteProfileButton,
  SupplierDetailsContainer,
  SupplierSkeletonWrapper,
  UpdateProfileLink,
} from './styles'
import { BackButtonComponent } from '@/components/back-button'
import { ConfirmDeleteSupplierModal } from './components/confirm-delete-supplier-modal'
import { useState } from 'react'
import { useDeleteSupplier } from '@/hooks/useDeleteSupplier'
import Skeleton from 'react-loading-skeleton'
import { NotFound } from '../not-found'
import { ContactCard } from './components/contact-card'

export function SupplierDetails() {
  const { id } = useParams<{ id: string }>()
  const [isDeleteSupplierModalOpen, setIsDeleteSupplierModalOpen] =
    useState(false)
  const { handleDeleteSupplier, isPending } = useDeleteSupplier()

  const {
    data: supplier,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supplierDetails', id],
    queryFn: () => getSupplierDetails(id as string),
  })

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
                <ContactCard key={index} contact={contact} index={index} />
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
                isPending={isPending}
                onConfirm={handleConfirmDeleteSupplier}
              />
            </Dialog.Root>
          </>
        )}
      </SupplierDetailsContainer>
    </Main>
  )
}
