import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    overflow: hidden;
    padding: 2rem;

    opacity: 1;
    transition: opacity 1s ease-in-out;

    &.fade-out {
        opacity: 0;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 3.13rem;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .boxText1, .boxText2, .boxText3, .boxText4 {
        font-size: 1.2rem;
        font-family: 'Special Gothic Expanded One';
        width: 100%;

        a {
            font-weight: bolder;
            color: ${({ theme }) => theme.colors.white};
            animation: colorCycle 5s infinite;
            transition: color 0.5s ease-in-out;
            text-decoration: none;
            display: inline-block;
        }

        p {
            color: ${({ theme }) => theme.colors.darkGray}
        }
    }

    .boxImg {
        padding: 2rem;
        display: flex;
        justify-content: center;
        width: 100%;
        
        .logo {
            width: 100%;
            max-width: 500px;
            height: auto;
        }
    }

    .buttonLeft, .buttonRight {
        position: relative;
    }

    .buttonLeft {
        left: -8%;
    }

    .buttonRight {
        right: -8%;
    }

    @media (max-width: 1024px) {
        .boxImg {
            margin-right: 40px;
        }
    }


    @media (max-width: 768px) {
        padding: 1rem;
        
        .boxImg {
            padding: 1rem;
            
            .logo {
                max-width: 500px;
            }
        }
        
        .buttonLeft {
            left: -4%;
        }
        
        .buttonRight {
            right: -4%;
        }
    }

    @keyframes colorCycle {
        0% { color: ${({ theme }) => theme.colors.white}; }
        33% { color: ${({ theme }) => theme.colors.red}; }
        66% { color: ${({ theme }) => theme.colors.purple}; }
        100% { color: ${({ theme }) => theme.colors.green}; }
    }
`;