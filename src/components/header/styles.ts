import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};

  a {
    line-height: 0;
  }

  img {
    width: 6.25rem;
  }

  @media (min-width: 1024px) {
    & {
      padding: 1rem 3.125rem;

      img {
        width: 9.25rem;
      }
    }
  }
`
