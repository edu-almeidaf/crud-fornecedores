import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 4.25rem;
  height: calc(100vh - 4.25rem);
  padding: 2rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h1 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`
