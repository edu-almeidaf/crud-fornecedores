import { Contact } from './contact'

export interface Supplier {
  id: number
  name: string
  description: string
  contacts: Contact[]
}
