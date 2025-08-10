import { styled, keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 150px;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Special Gothic Expanded One', sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;

    .icon {
        width: 80px;
        height: auto;
        margin-left: 20px;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
    }

    .boxIcon {
        position: absolute;
        left: 43.5%;
        top: 50%;
        transform: translateY(-50%);
  }

    .boxText, .boxText2 {
        display: flex;
        gap: 2rem;
        font-size: 1.6rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .boxText a, .boxText2 a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        font-weight: bold;
        position: relative;
        padding: 4px 8px;
        transition: all 0.2s ease-in-out;
        border: none;

        &:hover {
            transform: scale(1.05);
            opacity: 0.9;
        }

        &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.white};
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.3s ease-in-out;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }


    @media(max-width: 768px) {
        width: 800px;

        .icon {
            position: relative;
            width: 70px;
        }

        .boxText {
            font-size: 20px;
            display: flex;
             gap: 0.5rem;           
        }

        .boxText2 {
            font-size: 20px;
            display: flex;
            gap: 0.5rem;    
        }



    }
`;

const colorCycle = keyframes`
  0% { color: white}
  33% { color: red }
  66% { color: purple}
  100% { color: green}
`


export const GreetingText = styled.p`
    animation: ${colorCycle} 5s infinite;
    font-size: 1rem;
    font-weight: bold;
    
    
    @media (max-width: 1024px) {
        position: absolute;
        top: 5%;
        left: 42%;
    }
    

`