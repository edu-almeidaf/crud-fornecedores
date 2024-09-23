import { Input } from '../form'
import { ContactInputs } from './styles'
import { useHookFormMask } from 'use-mask-input'
import { useEffect, useState } from 'react'
import { fetchAddressByCep } from '@/http/fetch-address-by-cep'
import { useQuery } from '@tanstack/react-query'
import { useFormContext } from 'react-hook-form'
import { FormData } from '@/schemas/supplier-form-schema'

interface ContactsFormCardProps {
  index: number
}

export function ContactsFormCard({ index }: ContactsFormCardProps) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const {
    watch,
    clearErrors,
    setValue,
    setError,
    register,
    formState: { errors },
  } = useFormContext<FormData>()

  function normalizeCep(cep: string | undefined) {
    return cep?.replace(/\D/g, '') || ''
  }

  const currentZipCode =
    editingIndex !== null
      ? normalizeCep(watch(`contacts.${editingIndex}.address.zipCode`))
      : undefined

  const { data: addressInfo, isError } = useQuery({
    queryKey: ['fetchAddressByZipCode', currentZipCode],
    queryFn: () => fetchAddressByCep(currentZipCode as string),
    enabled: !!currentZipCode && currentZipCode.length === 8,
    retry: false,
  })

  console.log(errors.contacts)

  useEffect(() => {
    if (addressInfo && editingIndex !== null) {
      clearErrors(`contacts.${editingIndex}.address.zipCode`)

      setValue(`contacts.${editingIndex}.address.city`, addressInfo.localidade)
      setValue(`contacts.${editingIndex}.address.state`, addressInfo.uf)
      setValue(
        `contacts.${editingIndex}.address.street`,
        addressInfo.logradouro,
      )

      clearErrors([
        `contacts.${editingIndex}.address.city`,
        `contacts.${editingIndex}.address.state`,
        `contacts.${editingIndex}.address.street`,
      ])
    }

    if (isError && editingIndex !== null) {
      setError(`contacts.${editingIndex}.address.zipCode`, {
        type: 'required',
        message: 'CEP inválido. Por favor, verifique.',
      })
    }
  }, [addressInfo, editingIndex, clearErrors, setValue, isError, setError])

  function handleZipCodeFocus(index: number) {
    setEditingIndex(index)
  }

  const registerWithMask = useHookFormMask(register)

  return (
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
  )
}
