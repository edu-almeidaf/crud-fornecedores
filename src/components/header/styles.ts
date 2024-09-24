import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing['4']} ${theme.spacing['10']}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.default};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};

  a {
    line-height: 0;
  }

  img {
    width: ${({ theme }) => theme.spacing['25']};
  }

  @media (min-width: 1024px) {
    padding: ${({ theme }) => `${theme.spacing['4']} ${theme.spacing['12.5']}`};

    img {
      width: ${({ theme }) => theme.spacing['37']};
    }
  }
`
