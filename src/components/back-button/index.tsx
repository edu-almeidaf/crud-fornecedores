import { BackButton, BackIcon } from './styles'

interface BackButtonComponentProps {
  url: string
}

export function BackButtonComponent({ url }: BackButtonComponentProps) {
  return (
    <BackButton to={url}>
      <BackIcon />
    </BackButton>
  )
}
