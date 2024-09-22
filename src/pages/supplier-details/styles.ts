import styled from 'styled-components'

export const SupplierDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.title};

    span {
      font-weight: 500;
    }
  }

  h2 {
    text-align: center;
  }
`

export const ContactList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.white};
  gap: 1rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radius.md};

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }

  ul {
    padding: 0 2rem;
  }
`
