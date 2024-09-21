import { Main } from '@/components/main/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { Form } from './styles'
import { FormData, formSchema } from '@/schemas/supplier-form-schema'

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
        <div>
          <label htmlFor="name">Nome*</label>
          <input {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="name">Descrição</label>
          <input {...register('description')} />
        </div>

        {fields.map((field, index) => (
          <div key={field.id}>
            <h3>Contato {index + 1}</h3>

            <div>
              <label htmlFor={`contacts.${index}.name`}>Nome*</label>
              <input type="text" {...register(`contacts.${index}.name`)} />
              {errors.contacts?.[index]?.name && (
                <p>{errors.contacts[index].name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.phoneNumber`}>
                Número de Telefone*
              </label>
              <input
                type="text"
                {...register(`contacts.${index}.phoneNumber`)}
              />
              {errors.contacts?.[index]?.phoneNumber && (
                <p>{errors.contacts[index].phoneNumber.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.address.zipCode`}>CEP*</label>
              <input
                type="text"
                {...register(`contacts.${index}.address.zipCode`)}
              />
              {errors.contacts?.[index]?.address?.zipCode && (
                <p>{errors.contacts[index].address.zipCode.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.address.state`}>Estado*</label>
              <input
                type="text"
                {...register(`contacts.${index}.address.state`)}
              />
              {errors.contacts?.[index]?.address?.state && (
                <p>{errors.contacts[index].address.state.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.address.city`}>Cidade*</label>
              <input
                type="text"
                {...register(`contacts.${index}.address.city`)}
              />
              {errors.contacts?.[index]?.address?.city && (
                <p>{errors.contacts[index].address.city.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.address.street`}>
                Logradouro*
              </label>
              <input
                type="text"
                {...register(`contacts.${index}.address.street`)}
              />
              {errors.contacts?.[index]?.address?.street && (
                <p>{errors.contacts[index].address.street.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.address.number`}>
                Número*
              </label>
              <input
                type="text"
                {...register(`contacts.${index}.address.number`)}
              />
              {errors.contacts?.[index]?.address?.number && (
                <p>{errors.contacts[index].address.number.message}</p>
              )}
            </div>

            <div>
              <label htmlFor={`contacts.${index}.address.reference`}>
                Referência
              </label>
              <input
                type="text"
                {...register(`contacts.${index}.address.reference`)}
              />
            </div>

            {index > 0 && (
              <button type="button" onClick={() => remove(index)}>
                Remover Contato
              </button>
            )}
          </div>
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
