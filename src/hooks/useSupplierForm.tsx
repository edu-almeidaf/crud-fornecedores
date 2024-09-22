import {
  contactsInitialFormState,
  FormData,
  formSchema,
} from '@/schemas/supplier-form-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray, useForm } from 'react-hook-form'

export function useSupplierForm() {
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contacts',
  })

  return {
    register,
    handleSubmit,
    watch,
    clearErrors,
    setError,
    errors,
    reset,
    fields,
    append,
    remove,
  }
}
