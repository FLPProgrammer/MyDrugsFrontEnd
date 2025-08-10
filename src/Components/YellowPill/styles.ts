import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background: ${({ theme }) => theme.colors.yellow};
  gap: 3.13rem;

  .boxImg {
    .logo {
      position: relative;
      width: 300px;
      top: 80%;
      left: 15%;
      opacity: 0.5;
    }

    .yellowpill {
      position: absolute;
      width: 400px;
      top: 43%;
      left: 34%;
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
      animation: blinkCycle 5s infinite;
      transition: 3s ease-in-out;
    }

    h2 {
      color: ${({ theme }) => theme.colors.darkGray};
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
      border: 1px solid ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.white};
     
      &:hover {
                background-color: ${({ theme }) => theme.colors.white};
                color: ${({ theme }) => theme.colors.blue};
                transition: 0.3s;
                cursor: pointer;
      }
    }
  }

  @keyframes blinkCycle {
    0% { color: ${({ theme }) => theme.colors.background}; }
    100% { color: ${({ theme }) => theme.colors.white}; }
  }

      @media (max-width: 1024px) {

         .boxImg {
            .yellowpill {
                 top: 47%; 
                 left: 30%;
                 width: 35%; 
            }
        }
        .boxPrice {
            margin-left: 60px;
        }
    }
@media (max-width: 768px) {
  width: 805px; 
  min-height: 100vh; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  overflow: hidden; 

  .divButton1 {
    margin-left: 0; 
  }

  .boxImg {
    .logo {
      width: 100%;
      max-width: 200px;
      position: absolute;
      top: 45%;
      left: 40%;
    }

    .yellowpill {
      width: 100%;
      max-width: 250px;
      position: absolute ;
       top: 40%;
       left: 38%;
    }
  }

  .boxDescription {   
    text-align: center;
    position: absolute;
    top: 35%;
    left: 5%;

    h1 {
      font-size: 1rem;
    }
  }

  .boxPrice {
    position: static;
    width: 100%;
    text-align: center;

    h3 {
      font-size: 1.1rem;
    }

    .addButton {
      width: 50px;
      font-size: 2rem;
    }
  }

  .divButton2 {
    position: static;
    margin-top: 1rem;
  }
}


`;
