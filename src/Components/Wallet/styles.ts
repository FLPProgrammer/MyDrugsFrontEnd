import styled, { keyframes } from 'styled-components'

interface WalletContainerProps {
  open: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px); 
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div<WalletContainerProps>`
  position: absolute;
  right: 0%;
  top: 220%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0,0,0,0.8);
  z-index: 999;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  animation: ${({ open }) => open ? fadeIn : 'none'} 2s ease-in-out;
  transition: opacity 0.5s ease-in-out;
`;
