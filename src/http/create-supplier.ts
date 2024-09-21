import { api } from '@/lib/axios'
import { FormData } from '@/schemas/supplier-form-schema'

export async function createSupplier(data: FormData) {
  await api.post('/suppliers', data)
}
