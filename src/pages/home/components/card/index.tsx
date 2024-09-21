import { ShowMoreBtn, SupplierCard } from './styles'

interface CardProps {
  name: string
  id: number
}

export function Card({ name, id }: CardProps) {
  return (
    <SupplierCard>
      <h3>{name}</h3>
      <ShowMoreBtn to={`/${id}`}>Detalhes</ShowMoreBtn>
    </SupplierCard>
  )
}
