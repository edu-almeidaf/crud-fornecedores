import { ShowMoreBtn, SupplierCard } from './styles'

interface CardProps {
  name: string
}

export function Card({ name }: CardProps) {
  return (
    <SupplierCard>
      <h3>{name}</h3>
      <ShowMoreBtn to="/1">Detalhes</ShowMoreBtn>
    </SupplierCard>
  )
}
