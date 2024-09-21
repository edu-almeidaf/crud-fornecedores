import { Main } from '@/components/main/styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'
import { Form } from './styles'

const contactSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .matches(/^[A-Za-z ]+$/, 'Nome deve conter apenas letras'),
  phoneNumber: yup
    .string()
    .required('Número de telefone é obrigatório')
    .matches(
      /^\(\d{2}\) \d{4,5}-\d{4}$/,
      'Formato inválido para número de telefone (Ex: (11) 12345-6789)',
    ),
  address: yup.object({
    zipCode: yup
      .string()
      .required('CEP é obrigatório')
      .matches(/^\d{5}-\d{3}$/, 'Formato inválido para CEP (Ex: 12345-678)'),
    state: yup
      .string()
      .required('Estado é obrigatório')
      .length(2, 'Estado deve ter 2 caracteres')
      .uppercase(),
    city: yup
      .string()
      .required('Cidade é obrigatória')
      .matches(/^[A-Za-z ]+$/, 'Cidade deve conter apenas letras'),
    street: yup.string().required('Logradouro é obrigatório'),
    number: yup
      .number()
      .required('Número é obrigatório')
      .typeError('Número deve ser numérico'),
    reference: yup.string().optional(),
  }),
})

const formSchema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .matches(
      /^[A-Za-z0-9 ]+$/,
      'Nome deve conter apenas caracteres alfanuméricos',
    ),
  description: yup.string().optional(),
  contacts: yup
    .array(contactSchema)
    .min(1, 'Ao menos um contato é obrigatório')
    .required('A lista de contatos é obrigatória'),
})

type FormData = yup.Asserts<typeof formSchema>

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
    number: 0,
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

  console.log(errors)

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
                {...register(`contacts.${index}.address.number`, {
                  valueAsNumber: true,
                })}
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
