import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray.dark};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }
`
