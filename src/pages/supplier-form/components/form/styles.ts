import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;

  span:first-child {
    color: ${({ theme }) => theme.colors.danger};
  }

  span:last-child {
    font-size: 0.875rem;
  }
`

const baseInputStyle = css<{ $hasError: boolean }>`
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  outline: 0;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.default};
  }

  ${({ theme, $hasError }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.danger};

      &:focus {
        border-color: ${theme.colors.danger};
      }
    `}
`

export const InputControl = styled.input<{ $hasError: boolean }>`
  ${baseInputStyle}
`

export const TextareaControl = styled.textarea<{ $hasError: boolean }>`
  ${baseInputStyle}
  height: 6rem;
  line-height: 1.6;
  resize: none;
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
`
