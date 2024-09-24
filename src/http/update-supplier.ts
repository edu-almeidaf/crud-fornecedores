import { Supplier } from '@/interfaces/suplier'
import { api } from '@/lib/axios'
import { FormData } from '@/schemas/supplier-form-schema'

interface UpdateSupplierRequest {
  id: string
  data: FormData
}

export async function updateSupplier({ id, data }: UpdateSupplierRequest) {
  await api.put<Supplier>(`suppliers/${id}`, data)
}
