import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  gap: 2rem;

  h2 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`

export const InputContainer = styled.div`
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

export const Input = styled.input<{ $hasError?: boolean }>`
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.gray.dark};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  outline: 0;

  &:focus {
    border-color: ${({ theme, $hasError }) =>
      $hasError ? theme.colors.danger : theme.colors.primary.default};
  }
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
`

export const ContactForm = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
`

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 0;
    padding: 0.5rem 1rem;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.danger};
    border: 1px solid ${({ theme }) => theme.colors.danger};
    border-radius: ${({ theme }) => theme.radius.md};
    cursor: pointer;
    transition: background-color 0.2s;
    transition: color 0.2s;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.white};
      outline: 0;
    }
  }
`

export const ContactInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`

export const AddContactButton = styled.button`
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: transparent;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.primary.default};
  transition: background-color 0.2s;
  transition: color 0.2s;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary.default};
    outline: 0;
  }

  @media (min-width: 1024px) {
    width: 25%;
    align-self: center;
  }
`

export const CreateSupplierBtn = styled.button`
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.orange.default};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s;
  transition: color 0.2s;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 1rem;
    font-size: 1.125rem;
    align-self: center;
  }
`
