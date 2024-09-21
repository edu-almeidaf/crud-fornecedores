import { api } from '@/lib/axios'

interface GetSuppliersResponse {
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
  const response = await api.get<GetSuppliersResponse[]>('/suppliers')

  return response.data
}
