import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 4.25rem;
  min-height: calc(100vh - 4.25rem);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`

export const PageHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
