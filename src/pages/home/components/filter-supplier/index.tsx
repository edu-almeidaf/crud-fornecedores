import { useSearchParams } from 'react-router-dom'
import { Container, FilterButton } from './styles'
import { useForm } from 'react-hook-form'
import {
  filterSupplierSchema,
  FilterSupplierSchema,
} from '@/schemas/filter-supplier-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/form'

export function FilterSupplier() {
  const [searchParams, setSearchParams] = useSearchParams()

  const supplierName = searchParams.get('supplierName')

  const { register, handleSubmit } = useForm<FilterSupplierSchema>({
    resolver: yupResolver(filterSupplierSchema),
    defaultValues: {
      supplierName: supplierName ?? '',
    },
  })

  function handleFilter({ supplierName }: FilterSupplierSchema) {
    setSearchParams((state) => {
      if (supplierName) {
        state.set('supplierName', supplierName)
      } else {
        state.delete('supplierName')
      }

      return state
    })
  }

  return (
    <Container onSubmit={handleSubmit(handleFilter)}>
      <Input
        {...register('supplierName')}
        type="text"
        placeholder="Encontre um fornecedor pelo nome"
      />
      <FilterButton type="submit">Filtrar</FilterButton>
    </Container>
  )
}
