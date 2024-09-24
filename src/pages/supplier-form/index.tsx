import { Main, PageHeader, PageTitle } from '@/components/main/styles'
import { useParams } from 'react-router-dom'
import {
  Form,
  AddContactButton,
  CreateSupplierBtn,
  ContactForm,
  ContactHeader,
} from './styles'
import {
  contactsInitialFormState,
  FormData,
  formSchema,
} from '@/schemas/supplier-form-schema'
import { Spinner } from '@/components/spinner'
import { BackButtonComponent } from '@/components/back-button'
import { Input, Textarea } from '@/components/form'
import { useCreateSupplier } from '@/hooks/useCreateSupplier'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { ContactsFormCard } from './components/contacts-form-card'
import { yupResolver } from '@hookform/resolvers/yup'
import { Trash2 } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { getSupplierDetails } from '@/http/get-supplier-details'
import { useEffect } from 'react'
import { useUpdateSupplier } from '@/hooks/useUpdateSupplier'
import Skeleton from 'react-loading-skeleton'
import { NotFound } from '../not-found'
import toast from 'react-hot-toast'

interface SupplierFormProps {
  mode: 'new' | 'edit'
}

export function SupplierForm({ mode }: SupplierFormProps) {
  const { id } = useParams()
  const { handleCreateSupplier, createPending } = useCreateSupplier()
  const { handleUpdateSupplier, updatePending } = useUpdateSupplier()
  const isEditSupplierPage = mode === 'edit' && id
  const isPending = isEditSupplierPage ? updatePending : createPending
  const submitMessage = isEditSupplierPage ? 'Atualizar' : 'Criar'

  const methods = useForm<FormData>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      contacts: [contactsInitialFormState],
    },
  })

  const {
    control,
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
  })

  const {
    data: supplierDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['supplierDetails', id],
    queryFn: () => getSupplierDetails(id as string),
    enabled: mode === 'edit' && !!id,
  })

  useEffect(() => {
    if (supplierDetails) {
      reset({
        name: supplierDetails.name,
        description: supplierDetails.description,
        contacts:
          supplierDetails.contacts.length > 0
            ? supplierDetails.contacts
            : [contactsInitialFormState],
      })
    }
  }, [supplierDetails, reset])

  async function onSubmit(data: FormData) {
    try {
      if (isEditSupplierPage) {
        await handleUpdateSupplier({ id, data })
      } else {
        await handleCreateSupplier(data)
      }

      reset()
    } catch {
      toast.error(
        `Erro ao ${isEditSupplierPage ? 'editar' : 'criar'} fornecedor`,
      )
    }
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <Main>
      <PageHeader>
        <BackButtonComponent url={isEditSupplierPage ? `/${id}` : '/'} />
        <PageTitle>
          {isEditSupplierPage ? 'Editar Fornecedor' : 'Novo Fornecedor'}
        </PageTitle>
      </PageHeader>

      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {isEditSupplierPage && isLoading ? (
            <>
              <Skeleton height={60} />
              <Skeleton height={80} />
              <Skeleton height={40} />
              <Skeleton height={40} />
              <Skeleton height={70} />
            </>
          ) : (
            <>
              <Input
                label="Nome"
                {...register('name')}
                error={errors.name}
                required
              />

              <Textarea label="Descrição" {...register('description')} />
            </>
          )}

          {(!isEditSupplierPage || !isLoading) && (
            <>
              <h2>Contatos</h2>

              {fields.map((field, index) => (
                <ContactForm key={field.id}>
                  <ContactHeader>
                    <h3>Contato {index + 1}</h3>

                    {index > 0 && (
                      <button type="button" onClick={() => remove(index)}>
                        <Trash2 />
                      </button>
                    )}
                  </ContactHeader>
                  <ContactsFormCard key={field.id} index={index} />
                </ContactForm>
              ))}

              <AddContactButton
                type="button"
                onClick={() => append(contactsInitialFormState)}
              >
                Novo contato
              </AddContactButton>

              {errors.contacts && <p>{errors.contacts.message}</p>}

              <CreateSupplierBtn type="submit" disabled={isPending}>
                {isPending ? <Spinner /> : submitMessage}
              </CreateSupplierBtn>
            </>
          )}
        </Form>
      </FormProvider>
    </Main>
  )
}
