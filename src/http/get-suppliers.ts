import { api } from '@/lib/axios'

export interface Supplier {
  id: number
  name: string
  description: string
  contacts: {
    name: string
    phoneNumber: string
    address: {
      complement: string
      reference: string
      number: string
      zipCode: string
      state: string
      city: string
      street: string
    }
  }[]
}

export async function getSuppliers(supplierName: string | null) {
  const params = supplierName ? { name_like: supplierName } : {}

  const response = await api.get<Supplier[]>('/suppliers', { params })

  return response.data
}
