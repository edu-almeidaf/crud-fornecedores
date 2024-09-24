import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2']};
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.spacing['4.5']};
  font-weight: 500;

  span:first-child {
    color: ${({ theme }) => theme.colors.danger};
  }

  span:last-child {
    font-size: ${({ theme }) => theme.spacing['3.5']};
  }
`

const baseInputStyle = css<{ $hasError: boolean }>`
  padding: ${({ theme }) => theme.spacing['4']};
  border-radius: ${({ theme }) => theme.radius.md};
  outline: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary.dark};
    outline-offset: 2px;
  }

  ${({ theme, $hasError }) =>
    $hasError &&
    css`
      border-color: ${theme.colors.danger};

      &:focus {
        border-color: ${theme.colors.danger};
        outline-color: ${theme.colors.danger};
      }
    `}
`

export const InputControl = styled.input<{ $hasError: boolean }>`
  ${baseInputStyle}
`

export const TextareaControl = styled.textarea<{ $hasError: boolean }>`
  ${baseInputStyle}
  height: ${({ theme }) => theme.spacing['24']};
  line-height: 1.6;
  resize: none;
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.spacing['3.5']};
`
