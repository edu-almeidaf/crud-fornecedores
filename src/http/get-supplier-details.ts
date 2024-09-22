import { api } from '@/lib/axios'
import { Supplier } from './get-suppliers'

export async function getSupplierDetails(id: string) {
  const response = await api.get<Supplier>(`/suppliers/${id}`)

  return response.data
}
