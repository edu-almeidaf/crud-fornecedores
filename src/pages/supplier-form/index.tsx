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
import { FormData, formSchema } from '@/schemas/supplier-form-schema'
import { Trash2 } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { createSupplier } from '@/http/create-supplier'
import { toast } from 'react-hot-toast'
import { Spinner } from '@/components/spinner'
import { BackButtonComponent } from '@/components/back-button'
import { Input, Textarea } from './components/form'

interface SupplierFormProps {
  mode: 'new' | 'edit'
}

const contactsShape = {
  name: '',
  phoneNumber: '',
  address: {
    zipCode: '',
    state: '',
    city: '',
    street: '',
    number: '',
    complement: '',
    reference: '',
  },
}

export function SupplierForm({ mode }: SupplierFormProps) {
  const { id } = useParams()
  const navigate = useNavigate()

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      contacts: [contactsShape],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
  })

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
                {...register(`contacts.${index}.phoneNumber`)}
                error={errors.contacts?.[index]?.phoneNumber}
                required
              />

              <Input
                label="CEP"
                {...register(`contacts.${index}.address.zipCode`)}
                error={errors.contacts?.[index]?.address?.zipCode}
                required
              />

              <Input
                label="UF"
                {...register(`contacts.${index}.address.state`)}
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

        <AddContactButton type="button" onClick={() => append(contactsShape)}>
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
