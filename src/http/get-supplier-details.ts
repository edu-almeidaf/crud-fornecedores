import { Supplier } from '@/interfaces/suplier'
import { api } from '@/lib/axios'

export async function getSupplierDetails(id: string) {
  const response = await api.get<Supplier>(`/suppliers/${id}`)

  return response.data
}
