import styled from 'styled-components'

export const Main = styled.main`
  margin-top: ${({ theme }) => theme.spacing['17']};
  min-height: calc(100vh - ${({ theme }) => theme.spacing['17']});
  padding: ${({ theme }) => theme.spacing['4']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['12']};

  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing['8']};
  }
`

export const PageTitle = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.spacing['8']};

  @media (min-width: 1024px) {
    font-size: ${({ theme }) => theme.spacing['10']};
  }
`

export const PageHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['4']};
  width: 100%;
`
