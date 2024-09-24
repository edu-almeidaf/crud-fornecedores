import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const SupplierDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['8']};
  max-width: 1440px;
  width: ${({ theme }) => theme.spacing.full};
  margin: 0 auto;

  p {
    font-size: ${({ theme }) => theme.spacing['5']};
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
  gap: ${({ theme }) => theme.spacing['4']};

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ContactCard = styled.div`
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

export const UpdateProfileLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.spacing['4.5']};
  padding: ${({ theme }) => theme.spacing['4']};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 2px solid ${({ theme }) => theme.colors.orange.default};
  color: ${({ theme }) => theme.colors.orange.default};
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.orange.default};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 1024px) {
    align-self: center;
    width: 50%;
  }
`

export const DeleteProfileButton = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.spacing['4.5']};
  padding: ${({ theme }) => theme.spacing['4']};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};
  transition:
    background-color 0.2s,
    color 0.2s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 1024px) {
    align-self: center;
    width: 50%;
  }
`

export const SupplierSkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
