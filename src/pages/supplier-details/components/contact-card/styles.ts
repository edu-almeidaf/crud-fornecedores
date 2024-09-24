import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.white};
  gap: ${({ theme }) => theme.spacing['4']};
  padding: ${({ theme }) => theme.spacing['4']};
  border-radius: ${({ theme }) => theme.radius.md};

  p {
    font-size: ${({ theme }) => theme.spacing['5']};
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
  }

  h2 {
    color: ${({ theme }) => theme.colors.white};
  }

  ul {
    padding: 0 ${({ theme }) => theme.spacing['8']};
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['4']};
`

export const WhatsappButton = styled.button`
  background-color: transparent;
  border: none;
  line-height: 0;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.whatsapp};
  }

  svg {
    width: 28px;
    height: 28px;
  }
`
