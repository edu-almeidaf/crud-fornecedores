import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Outlet } from 'react-router-dom'
import { Header } from './components/header'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { Toaster } from 'react-hot-toast'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Toaster />

      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
