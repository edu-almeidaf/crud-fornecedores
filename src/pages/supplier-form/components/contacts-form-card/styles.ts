import styled from 'styled-components'

export const ContactInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing['8']};

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
