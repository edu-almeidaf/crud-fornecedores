import { Supplier } from '@/interfaces/suplier'
import { api } from '@/lib/axios'

export async function getSuppliers(supplierName: string | null) {
  const params = supplierName ? { name_like: supplierName } : {}

  const response = await api.get<Supplier[]>('/suppliers', { params })

  return response.data
}
