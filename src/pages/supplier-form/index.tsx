import { Main, PageHeader, PageTitle } from '@/components/main/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Form,
  ContactForm,
  ContactHeader,
  ContactInputs,
  AddContactButton,
  CreateSupplierBtn,
} from './styles'
import {
  contactsInitialFormState,
  FormData,
  formSchema,
} from '@/schemas/supplier-form-schema'
import { Trash2 } from 'lucide-react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createSupplier } from '@/http/create-supplier'
import { toast } from 'react-hot-toast'
import { Spinner } from '@/components/spinner'
import { BackButtonComponent } from '@/components/back-button'
import { Input, Textarea } from './components/form'
import { useHookFormMask } from 'use-mask-input'
import { useEffect, useState } from 'react'
import { fetchAddressByCep } from '@/http/fetch-address-by-cep'

interface SupplierFormProps {
  mode: 'new' | 'edit'
}

export function SupplierForm({ mode }: SupplierFormProps) {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    watch,
    clearErrors,
    setError,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      contacts: [contactsInitialFormState],
    },
  })

  const registerWithMask = useHookFormMask(register)

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
  })

  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  function normalizeCep(cep: string | undefined) {
    return cep?.replace(/\D/g, '') || ''
  }

  const currentZipCode =
    editingIndex !== null
      ? normalizeCep(watch(`contacts.${editingIndex}.address.zipCode`))
      : undefined

  console.log(currentZipCode)

  const { data: addressInfo, isError } = useQuery({
    queryKey: ['fetchAddressByZipCode', currentZipCode],
    queryFn: () => fetchAddressByCep(currentZipCode as string),
    enabled: !!currentZipCode && currentZipCode.length === 8,
    retry: false,
  })

  useEffect(() => {
    if (addressInfo && editingIndex !== null) {
      clearErrors(`contacts.${editingIndex}.address.zipCode`)

      reset((formData) => ({
        ...formData,
        contacts: formData.contacts.map((contact, index) => {
          if (editingIndex === index) {
            return {
              ...contact,
              address: {
                ...contact.address,
                street: addressInfo.logradouro || '',
                city: addressInfo.localidade,
                state: addressInfo.uf,
              },
            }
          }

          return contact
        }),
      }))
    }

    if (isError && editingIndex !== null) {
      setError(`contacts.${editingIndex}.address.zipCode`, {
        type: 'manual',
        message: 'CEP inválido. Por favor, verifique.',
      })
    }
  }, [addressInfo, editingIndex, clearErrors, reset, isError, setError])

  function handleZipCodeFocus(index: number) {
    setEditingIndex(index)
  }

  const { mutateAsync: handleCreateSupplier, isPending } = useMutation({
    mutationFn: createSupplier,
    onSuccess() {
      toast.success('Fornecedor criado com sucesso')

      navigate('/')
      reset()
    },
    onError() {
      toast.error('Erro ao criar o fornecedor, tente novamente mais tarde')
    },
  })

  async function onSubmit(data: FormData) {
    await handleCreateSupplier(data)
  }

  const isEditSupplierPage = mode === 'edit' && id
  return (
    <Main>
      <PageHeader>
        <BackButtonComponent url={isEditSupplierPage ? `/${id}` : '/'} />
        <PageTitle>
          {isEditSupplierPage ? 'Editar Fornecedor' : 'Novo Fornecedor'}
        </PageTitle>
      </PageHeader>

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

            <ContactInputs>
              <Input
                label="Nome"
                {...register(`contacts.${index}.name`)}
                error={errors.contacts?.[index]?.name}
                required
              />

              <Input
                label="Número de Telefone"
                type="tel"
                {...registerWithMask(`contacts.${index}.phoneNumber`, [
                  '(99) 99999-9999',
                ])}
                error={errors.contacts?.[index]?.phoneNumber}
                required
              />

              <Input
                label="CEP"
                {...registerWithMask(`contacts.${index}.address.zipCode`, [
                  '99999-999',
                ])}
                error={errors.contacts?.[index]?.address?.zipCode}
                onFocus={() => handleZipCodeFocus(index)}
                required
              />

              <Input
                label="UF"
                {...registerWithMask(`contacts.${index}.address.state`, ['AA'])}
                error={errors.contacts?.[index]?.address?.state}
                required
              />

              <Input
                label="Cidade"
                {...register(`contacts.${index}.address.city`)}
                error={errors.contacts?.[index]?.address?.city}
                required
              />

              <Input
                label="Endereço"
                {...register(`contacts.${index}.address.street`)}
                error={errors.contacts?.[index]?.address?.street}
                required
              />

              <Input
                label="Número"
                {...register(`contacts.${index}.address.number`)}
                error={errors.contacts?.[index]?.address?.number}
                required
              />

              <Input
                label="Complemento"
                {...register(`contacts.${index}.address.complement`)}
              />

              <Input
                label="Referência"
                {...register(`contacts.${index}.address.reference`)}
              />
            </ContactInputs>
          </ContactForm>
        ))}

        <AddContactButton
          type="button"
          onClick={() => append(contactsInitialFormState)}
        >
          Adicionar contato
        </AddContactButton>

        {errors.contacts && <p>{errors.contacts.message}</p>}

        <CreateSupplierBtn type="submit">
          {isPending ? <Spinner /> : 'Criar'}
        </CreateSupplierBtn>
      </Form>
    </Main>
  )
}
