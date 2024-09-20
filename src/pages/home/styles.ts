import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 3.625rem;
  height: calc(100vh - 3.625rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    & {
      padding-top: 2rem;

      h1 {
        font-size: 2.5rem;
      }
    }
  }
`
