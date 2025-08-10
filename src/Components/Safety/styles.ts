import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 80.7vh;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Special Gothic Expanded One';

    img {
        animation: slideIn 1.5s ease-out forwards;
        position: relative;
        left: -200px;
    }


    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid white;
        width: 800px;
        height: 420px;   
        padding: 1.25rem;
        gap: 3.13rem;
        padding: 1.25rem;
        border: 2px solid;
        border-radius: 20px;
}

div {
    width: 600px;
    line-height: 1.5rem;

    h1 {
        animation: colorCycle 5s infinite;
        transition: 0.5s ease-in-out;
    }

     small {
        color: yellow;
    }

     strong:first-child {
        color: ${({ theme }) => theme.colors.purple};
    }

    strong:nth-child(2) {
        color: green;
    }

    strong:nth-child(3) {
        color: blue;
    }

    strong:nth-child(4) {
        color: ${({ theme }) => theme.colors.red}
    }

    strong:nth-child(5) {
        color: pink
    }

    strong:nth-child(6) {
        color: yellow;
    }

    strong:nth-child(7) {
        color: cadetblue;
    }



    img {
        filter: invert(1);
        width: 300px;
    }


    @keyframes colorCycle {
        0% { color: ${({ theme }) => theme.colors.white}; }
        33% { color: ${({ theme }) => theme.colors.red}; }
        66% { color: ${({ theme }) => theme.colors.purple}; }
        100% { color: ${({ theme }) => theme.colors.green}; }
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

    @media (max-width: 1024px) {
        height: 100vh;

        .smilingPill {
            width: 300px;
        }

        section {
            width: 68%;

        }
    }


    @media (max-width: 768px) {
        height: 122vh;
        width: 800px;
        padding: 10px;

        .smilingPill {
            width: 200px;
        }

        section {
            width: 800px;
        }
        
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 40%;
            font-size: 0.7rem;
            padding: 10px
        }

        .mdma {
            width: 200px;
        }

    }

    @media (max-width: 1024px) {
        section {
            margin-right: 10px;
        }
    }

    @media (max-width: 768px) {
        section {
            width: 100%;
            margin-right: 10px;
            padding: 12px;
            margin-right: 35px;
        }
    }
    
    @media (max-width: 480px) {
        height: 150vh;

        section {
            margin-right: 10px;
        }

        .divInfo {
            padding: 5px;
        }
    }
`