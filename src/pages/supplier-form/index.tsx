import { Main } from '@/components/main/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import {
  InputContainer,
  Form,
  Input,
  Label,
  ContactForm,
  ContactHeader,
  ErrorMessage,
  ContactInputs,
} from './styles'
import { FormData, formSchema } from '@/schemas/supplier-form-schema'
import { Trash2 } from 'lucide-react'

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

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
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

  function onSubmit(data: FormData) {
    console.log(data)
  }

  const isEditSupplierPage = mode === 'edit' && id
  return (
    <Main>
      <h1>{isEditSupplierPage ? 'Editar Fornecedor' : 'Novo Fornecedor'}</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="name">
            Nome <span>*</span>
          </Label>
          <Input {...register('name')} />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="name">Descrição</Label>
          <Input {...register('description')} />
        </InputContainer>

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
              <InputContainer>
                <Label htmlFor={`contacts.${index}.name`}>
                  Nome <span>*</span>
                </Label>
                <Input type="text" {...register(`contacts.${index}.name`)} />
                {errors.contacts?.[index]?.name && (
                  <ErrorMessage>
                    {errors.contacts[index].name.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.phoneNumber`}>
                  Número de Telefone <span>*</span>
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.phoneNumber`)}
                />
                {errors.contacts?.[index]?.phoneNumber && (
                  <ErrorMessage>
                    {errors.contacts[index].phoneNumber.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.zipCode`}>
                  CEP <span>*</span>
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.zipCode`)}
                />
                {errors.contacts?.[index]?.address?.zipCode && (
                  <ErrorMessage>
                    {errors.contacts[index].address.zipCode.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.state`}>
                  Estado <span>*</span>
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.state`)}
                />
                {errors.contacts?.[index]?.address?.state && (
                  <ErrorMessage>
                    {errors.contacts[index].address.state.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.city`}>
                  Cidade <span>*</span>
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.city`)}
                />
                {errors.contacts?.[index]?.address?.city && (
                  <ErrorMessage>
                    {errors.contacts[index].address.city.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.street`}>
                  Logradouro <span>*</span>
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.street`)}
                />
                {errors.contacts?.[index]?.address?.street && (
                  <ErrorMessage>
                    {errors.contacts[index].address.street.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.number`}>
                  Número <span>*</span> <span>(S/N para sem número)</span>
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.number`)}
                />
                {errors.contacts?.[index]?.address?.number && (
                  <ErrorMessage>
                    {errors.contacts[index].address.number.message}
                  </ErrorMessage>
                )}
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.complement`}>
                  Complemento
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.complement`)}
                />
              </InputContainer>

              <InputContainer>
                <Label htmlFor={`contacts.${index}.address.reference`}>
                  Referência
                </Label>
                <Input
                  type="text"
                  {...register(`contacts.${index}.address.reference`)}
                />
              </InputContainer>
            </ContactInputs>
          </ContactForm>
        ))}

        <button type="button" onClick={() => append(contactsShape)}>
          Adicionar mais contatos
        </button>

        {errors.contacts && <p>{errors.contacts.message}</p>}

        <button type="submit">Enviar</button>
      </Form>
    </Main>
  )
}
