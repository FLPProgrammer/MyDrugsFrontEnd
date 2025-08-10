import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
    background: ${({ theme }) => theme.colors.superman};
    gap: 3.13rem;

    .boxImg {
        .logo {
            position: relative;
            width: 300px;
            top: 80%;
            left: 15%;
            opacity: 0.5;
            
        }

        .supermanpill {
            position: absolute;
            width: 300px;
            top: 48%;
            left: 36%;
            z-index: 1000;
        }
    }

    .boxDescription, .boxPrice {
        font-family: 'Special Gothic Expanded One';
    }

    .boxDescription {
        position: relative;
        top: -10%;
        left: 10%;

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
        left: -1%;
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
            .supermanpill {
                 top: 50%; 
                 left: 35%;
                 width: 28%; 
            }
        }
        .boxPrice {
            margin-left: 20px;
        }
    }

        @media (max-width: 768px) {
        width: 805px;
          
        .divButton1 {
        margin-left: 30px;
     }
    .boxImg {
        .logo {
            width: 200px;
            top: 90%;
            left: 10%;
        }

        .supermanpill{
            top: 55%;
            left: 42%;
            
        }
    }

    .boxDescription {
        top: -5%;
        left: 5%;

        h1 {
            font-size: 2rem;
        }
    }

    .boxPrice {
        position: relative;
        width: 100%;
        top: 0;
        left: 0;
        text-align: center;

        h3 {
            font-size: 1.1rem;
        }

        .addButton {
            width: 50px;
            font-size: 2rem;
        }
    }
}
`