import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@/Routes'
import { CartProvider } from '@/Contexts/CartContext'
import { WalletProvider } from '@/Contexts/WalletContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <WalletProvider>
            <AppRoutes />
          </WalletProvider>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
