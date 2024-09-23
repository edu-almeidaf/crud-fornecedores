import { forwardRef, InputHTMLAttributes, useId } from 'react'
import { Container, Label, InputControl, ErrorMessage } from './styles'
import { FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  required?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', error, label, required = false, ...props }, ref) => {
    const inputId = useId()

    return (
      <Container>
        {label && (
          <Label htmlFor={inputId}>
            {label} {required && <span>*</span>}
          </Label>
        )}
        <InputControl
          type={type}
          id={inputId}
          ref={ref}
          $hasError={!!error}
          {...props}
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Container>
    )
  },
)
