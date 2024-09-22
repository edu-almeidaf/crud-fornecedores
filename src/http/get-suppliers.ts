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

export async function getSuppliers() {
  const response = await api.get<Supplier[]>('/suppliers')

  return response.data
}
