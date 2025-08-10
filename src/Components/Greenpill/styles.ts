import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background: ${({ theme }) => theme.colors.green};
    gap: 3.13rem;

    .boxImg {
        .logo {
            position: relative;
            width: 300px;
            top: 80%;
            left: 1%;
            opacity: 0.5;
            
        }

        .greenpill {
            position: absolute;
            width: 1200px;
            top: 37%;
            left: 8%;
            z-index: 1000;
        }
    }

    .boxDescription, .boxPrice {
        font-family: 'Special Gothic Expanded One';
    }

    .boxDescription {
        position: relative;
        top: -10%;
        left: 5%;

        h1 {
            color: ${({ theme }) => theme.colors.white};
            animation: blackAndWhiteCycle  5s infinite;
            transition: 3s ease-in-out;
        }

        h2 {
            color: ${({ theme }) => theme.colors.darkGray}
        }

    }

    .boxPrice {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 500px;
        top: 5%;
        left: -3%;
        color: ${({ theme }) => theme.colors.darkGray};
        gap: 20px;

        h3 {
            color: ${({ theme }) => theme.colors.white};
        }

        .addButton {
            width: 70px;
            font-size: 3rem;
            background-color: transparent;
            border: 1px solid;
            color: ${({ theme }) => theme.colors.white};
            border-color: ${({ theme }) => theme.colors.white};
            z-index: 1000;

            &:hover {
                background-color: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.blue};
                transition: 0.3s;
                cursor: pointer;
      }
        }
    }

    @keyframes blackAndWhiteCycle  {

        0% { color: ${({ theme }) => theme.colors.background}; }

        100% { color: ${({ theme }) => theme.colors.white}; }
    }



           @media (max-width: 1024px) {

         .boxImg {
            .greenpill {
                 top: 40%; 
                 left: -8%; 
            }
        }
        .boxPrice {
            margin-left: 20px;
        }
    }
`