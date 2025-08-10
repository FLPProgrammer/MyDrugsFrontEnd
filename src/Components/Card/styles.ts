import styled, { keyframes } from 'styled-components';

const borderCycle = keyframes`
  0% { border-color: ${({ theme }) => theme.colors.white}; }
  33% { border-color: ${({ theme }) => theme.colors.red}; }
  66% { border-color: ${({ theme }) => theme.colors.purple}; }
  100% { border-color: ${({ theme }) => theme.colors.green}; }
`;

const textCycle = keyframes`
  0% { color: ${({ theme }) => theme.colors.white}; }
  33% { color: ${({ theme }) => theme.colors.red}; }
  66% { color: ${({ theme }) => theme.colors.purple}; }
  100% { color: ${({ theme }) => theme.colors.green}; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 500px;
  padding: 20px;
  gap: 20px;
  background: linear-gradient(90deg, #000, #383737);
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Special Gothic Expanded One', sans-serif;
  transition: transform 0.4s, box-shadow 0.4s;
  animation: ${borderCycle} 4s linear infinite;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
  }

  .boxImg {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  .boxInfo {
    text-align: center;
    p {
      font-size: 16px;
      animation: ${textCycle} 5s ease-in-out infinite;
    }
  }

  .stars {
    display: flex;
    justify-content: center;
    gap: 4px;
  }

  .boxPrice {
    display: flex;
    flex-direction: column;
    gap: 5px;

    p {
      padding: 6px 12px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      background: linear-gradient(90deg, #de0000, #7103a8, #429e00);
      font-size: 14px;
      width: fit-content;
    }
  }

  .buyButton {
    background: linear-gradient(90deg, #ff416c, #ff4b2b);
    border: none;
    color: white;
    padding: 0.6rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: brightness(1.1);
    }
  }
`;
