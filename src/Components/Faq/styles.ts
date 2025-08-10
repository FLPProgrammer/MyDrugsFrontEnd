import styled from 'styled-components';

export const Container = styled.div`
        height: 120vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
        gap: 3.13rem;
        font-family: 'Special Gothic Expanded One';


    div {
        width: 70%;
    }

    div h2 {
        animation: colorCycle 5s infinite;
        transition: color 0.5s ease-in-out;
    }

    @keyframes colorCycle {
        0% { color: ${({ theme }) => theme.colors.white}; }
        33% { color: ${({ theme }) => theme.colors.red}; }
        66% { color: ${({ theme }) => theme.colors.purple}; }
        100% { color: ${({ theme }) => theme.colors.green}; }
    }


    @media (max-width: 768px) {
        width: 800px;
        height: 1280px;
    }

  @media (max-width: 480px) {
        height: 1100px;
        padding: 2rem 1rem;
        text-align: center;
        justify-content: flex-start;

        h1 {
            font-size: 1.5rem;
        }

        div {
            width: 70%;
        }

        

        div h2 {
            font-size: 1.1rem;
        }

        div p {
            font-size: 0.95rem;
        }
    }
`