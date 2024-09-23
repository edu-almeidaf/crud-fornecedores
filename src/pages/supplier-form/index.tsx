import { Main, PageHeader, PageTitle } from '@/components/main/styles'
import { useNavigate, useParams } from 'react-router-dom'
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
import { toast } from 'react-hot-toast'
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

interface SupplierFormProps {
  mode: 'new' | 'edit'
}

export function SupplierForm({ mode }: SupplierFormProps) {
  const { id } = useParams()
  const navigate = useNavigate()
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

  const { data: supplierDetails } = useQuery({
    queryKey: ['supplierDetails', id],
    queryFn: () => getSupplierDetails(id as string),
    enabled: mode === 'edit' && !!id,
    retry: false,
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
    const formattedMessagesInfo = {
      new: {
        success: 'Fornecedor criado com sucesso',
        error: 'Erro ao criar o fornecedor, tente novamente mais tarde',
      },
      edit: {
        success: 'Fornecedor atualizado com sucesso',
        error: 'Erro ao criar o fornecedor, tente novamente mais tarde',
      },
    }

    try {
      if (isEditSupplierPage) {
        await handleUpdateSupplier({ id, data })
      } else {
        await handleCreateSupplier(data)
      }

      toast.success(formattedMessagesInfo[mode].success)
      navigate(isEditSupplierPage ? `/${id}` : '/')
      reset()
    } catch {
      toast.error(formattedMessagesInfo[mode].error)
    }
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
          <Input
            label="Nome"
            {...register('name')}
            error={errors.name}
            required
          />

          <Textarea label="Descrição" {...register('description')} />

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
            Adicionar contato
          </AddContactButton>

          {errors.contacts && <p>{errors.contacts.message}</p>}

          <CreateSupplierBtn type="submit" disabled={isPending}>
            {isPending ? <Spinner /> : submitMessage}
          </CreateSupplierBtn>
        </Form>
      </FormProvider>
    </Main>
  )
}
