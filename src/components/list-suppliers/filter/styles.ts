import styled from 'styled-components'

export const Container = styled.div`
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

export const FilterInput = styled.input`
  padding: 0.5rem;
  border-radius: 10px;
  border: 0;
  outline: 0;
  flex: 1;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary.dark};
  }

  @media (min-width: 1024px) {
    & {
      font-size: 1.25rem;
    }
  }
`

export const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange.default};
  padding: 0.5rem 3rem;
  border-radius: 10px;
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
