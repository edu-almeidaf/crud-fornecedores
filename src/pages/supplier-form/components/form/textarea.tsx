import { forwardRef, TextareaHTMLAttributes, useId } from 'react'
import { Container, Label, ErrorMessage, TextareaControl } from './styles'
import { FieldError } from 'react-hook-form'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: FieldError
  required?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, label, required = false, ...props }, ref) => {
    const textareaId = useId()

    return (
      <Container>
        <Label htmlFor={textareaId}>
          {label} {required && <span>*</span>}
        </Label>
        <TextareaControl
          id={textareaId}
          ref={ref}
          $hasError={!!error}
          {...props}
        />
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Container>
    )
  },
)
