import styled from 'styled-components'

export const SupplierCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.gray.light};
  border: 1px solid ${({ theme }) => theme.colors.gray.default};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
`

export const SupplierTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Button = styled.button`
  line-height: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const SendWhatsappButton = styled(Button)`
  color: ${({ theme }) => theme.colors.gray.dark};

  &:hover {
    color: ${({ theme }) => theme.colors.whatsapp};
  }
`

export const EditButton = styled(Button)`
  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
  }
`

export const DeleteButton = styled(Button)`
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
  }
`
