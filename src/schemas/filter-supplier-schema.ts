import * as yup from 'yup'

export const filterSupplierSchema = yup.object({
  supplierName: yup.string(),
})

export type FilterSupplierSchema = yup.Asserts<typeof filterSupplierSchema>
