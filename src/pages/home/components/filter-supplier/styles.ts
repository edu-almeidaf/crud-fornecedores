import styled from 'styled-components'

export const Container = styled.form`
  background-color: ${({ theme }) => theme.colors.primary.default};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 24px 8px;

  @media (min-width: 1024px) {
    & {
      padding: 2rem 1rem;
      flex-direction: row;
      align-items: center;
    }
  }
`

export const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange.default};
  padding: 0.75rem 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.orange.default};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.orange.default};
  }

  @media (min-width: 1024px) {
    & {
      font-size: 1.25rem;
    }
  }
`
