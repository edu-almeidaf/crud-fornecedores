import styled from 'styled-components'

export const NotFoundMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  max-width: 768px;
  margin: 0 auto;

  p {
    font-size: 1.25rem;
    text-align: center;
    font-weight: 500;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`
