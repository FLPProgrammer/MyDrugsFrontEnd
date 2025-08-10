import { styled, keyframes } from 'styled-components'
import backgroundImg from '@/assets/backgroundImg.jpg'

const borderAnimation = keyframes`
    0% {
        border-color: ${({ theme }) => theme.colors.white};
    }
    33% {
        border-color: ${({ theme }) => theme.colors.red};
    }
    66% {
        border-color: ${({ theme }) => theme.colors.purple};
    }
    100% {
        border-color: ${({ theme }) => theme.colors.green};
    }
`;

export const Container = styled.div`
      height: 81vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.background};
      font-family: 'Special Gothic Expanded One', sans-serif;

    .boxImg {
        width: 100%;
        height: 80vh;
        background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 5px;
        border-top-right-radius: 300px;
        border-bottom-right-radius: 300px;
    }

    .boxForm {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem; 
        width: 60%; 
        padding: 2rem; 
        background-color: rgba(0, 0, 0, 0.5); 
        border-radius: 20px;
        margin: 10px;
    }

    .icon {
        width: 120px; 
        margin-bottom: 1rem; 
    }


      @media (max-width: 1024px) {
        height: 100vh;
    }
`;

export const Form = styled.form`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem; 
        width: 100%; 
`;

export const Button = styled.button`
    width: 60%; 
    border-radius: 20px;
    padding: 15px; 
    font-family: 'Special Gothic Expanded One', sans-serif;
    animation: ${borderAnimation} 5s infinite;
    border: 3px solid transparent;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    transition: background-color 0.3s ease, border-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.purple};
    }
`;

export const LinkText = styled.span`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 90%;
    padding: 15px; 
    border-radius: 20px;
    font-family: 'Special Gothic Expanded One', sans-serif;
    border: 3px solid ${({ theme }) => theme.colors.white};
    animation: ${borderAnimation} 5s infinite;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    transition: border-color 0.3s ease;

    &:focus {
        border-color: ${({ theme }) => theme.colors.purple};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.white};
    }

`;
