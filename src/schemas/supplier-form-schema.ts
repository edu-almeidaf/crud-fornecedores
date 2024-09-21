import * as yup from 'yup'

export const contactSchema = yup.object({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .matches(
      /^[A-Za-zÀ-ÖØ-ÿ\s.'-]+$/,
      'O Nome deve conter apenas letras, espaços, e pontuações permitidas (ex: Jr., José A. Silva)',
    ),
  phoneNumber: yup
    .string()
    .required('O número de telefone é obrigatório')
    .matches(
      /^\(\d{2}\) \d{4,5}-\d{4}$/,
      'Formato inválido para o número de telefone (Ex: (11) 12345-6789)',
    ),
  address: yup.object({
    zipCode: yup
      .string()
      .required('O CEP é obrigatório')
      .matches(/^\d{5}-\d{3}$/, 'Formato inválido para o CEP (Ex: 12345-678)'),
    state: yup
      .string()
      .required('O estado é obrigatório')
      .length(2, 'O estado deve ter 2 caracteres')
      .uppercase(),
    city: yup
      .string()
      .required('A cidade é obrigatória')
      .matches(/^[A-Za-z ]+$/, 'A cidade deve conter apenas letras'),
    street: yup.string().required('O endereço é obrigatório'),
    number: yup
      .string()
      .required('O número é obrigatório')
      .test(
        'is-valid-number-or-sn',
        'O número deve ser um valor numérico ou "S/N"',
        (value) => {
          const upperValue = value?.toUpperCase()

          return upperValue === 'S/N' || /^[0-9]+$/.test(upperValue || '')
        },
      ),
    complement: yup.string().optional(),
    reference: yup.string().optional(),
  }),
})

export const formSchema = yup.object({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .matches(
      /^[A-Za-z0-9.& ]+$/,
      'O nome deve conter apenas letras, números, ponto ou "&"',
    ),
  description: yup.string().optional(),
  contacts: yup
    .array(contactSchema)
    .min(1, 'Ao menos um contato é obrigatório')
    .required('A lista de contatos é obrigatória'),
})

export type FormData = yup.Asserts<typeof formSchema>
