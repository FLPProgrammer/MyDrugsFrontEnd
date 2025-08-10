import styled, { keyframes } from 'styled-components';

const pulseOpacity = keyframes`
  0% { opacity: 0.4 }
  50% { opacity: 1 }
  100% { opacity: 0.4 }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 81vh;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: 'Special Gothic Expanded One', sans-serif;
  padding: 2rem;
  gap: 4rem;

  .boxImg {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 600px;
      position: relative;
      animation: slideIn 1.5s ease-out forwards;
      border: none;
      background: none;
      box-shadow: none;
    }
  }

  .contactTitle {
    font-size: 2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    animation: colorCycle 5s infinite;
  }

  .boxContacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    padding: 2rem;
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.colors.white};
    animation: ${({ theme }) => keyframes`
      0% { border-color: ${theme.colors.white}; }
      33% { border-color: ${theme.colors.red}; }
      66% { border-color: ${theme.colors.purple}; }
      100% { border-color: ${theme.colors.green}; }
    `} 3s infinite;
    background-color: rgba(255, 255, 255, 0.02);
    backdrop-filter: blur(6px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  .socialMedia {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.2rem;
    padding: 1rem 1.5rem;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-3px);
      background-color: rgba(255, 255, 255, 0.05);
    }

    .link {
      text-decoration: none;
      color: inherit;
      word-break: break-all;
      

      .sidepill {
        width: 30px;
        height: auto;
        animation: ${pulseOpacity} 2s infinite ease-in-out;
        margin-left: 10px;
      }
      
    }

  }

  @keyframes slideIn {
    0% {
      left: -200px;
      opacity: 0;
    }
    100% {
      left: 0;
      opacity: 1;
    }
  }

  @keyframes colorCycle {
  0% { color: ${({ theme }) => theme.colors.white}; }
  33% { color: ${({ theme }) => theme.colors.red}; }
  66% { color: ${({ theme }) => theme.colors.purple}; }
  100% { color: ${({ theme }) => theme.colors.green}; }
}

@media (max-width: 1024px) {
  height: 100vh
}

@media (max-width: 768px) {
  height: 100vh;
  width: 800px;

  .boxContacts {
    width: 90%;
    margin-right: 10px;
  }
}

@media (max-width: 480px) {
  width: 800px;
  height: 150vh;
}
`;

