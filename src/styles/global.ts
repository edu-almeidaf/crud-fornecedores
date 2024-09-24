import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, select, button, a {
    color: ${({ theme }) => theme.colors.gray.dark};
    font: 400 1rem Roboto, sans-serif;
    outline-offset: 2px;
  }
  
  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }
`
