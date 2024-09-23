import { api } from '@/lib/axios'

export interface Address {
  complement: string
  reference: string
  number: string
  zipCode: string
  state: string
  city: string
  street: string
}

export interface Contact {
  name: string
  phoneNumber: string
  address: Address
}

export interface Supplier {
  id: number
  name: string
  description: string
  contacts: Contact[]
}

export async function getSuppliers(supplierName: string | null) {
  const params = supplierName ? { name_like: supplierName } : {}

  const response = await api.get<Supplier[]>('/suppliers', { params })

  return response.data
}
