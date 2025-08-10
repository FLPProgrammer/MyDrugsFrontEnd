import styled from 'styled-components';


export const Container = styled.div`
    position: fixed;
    top: 19%;
    left: 1%;
    width: 320px;
    height: 82vh; /* altura fixa */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* separa lista de produtos dos botões */
    gap: 10px;
    animation: slideIn 1.5s ease-in-out forwards;
    z-index: 1000;

    h3 {
        font-size: 24px;
        margin-bottom: 10px;
        text-align: center;
    }

    .itemsContainer {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow-y: auto;
        padding-right: 8px;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: ${({ theme }) => theme.colors.background};
        padding: 10px;
        border-radius: 8px;
    }

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 6px;
    }

    p {
        margin: 0;
        font-size: 14px;
        color: #555;
    }

    .paymentBox {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 10px;
        border-top: 1px solid #444;
    }

    .buttonPaymentBox {
        width: 95%;
        background: linear-gradient(
            90deg,
            rgba(222, 0, 0, 1) 0%,
            rgba(113, 3, 168, 1) 47%,
            rgba(66, 158, 0, 1) 100%
        );
        padding: 0.5rem;
        border-radius: 20px;
        color: ${({ theme }) => theme.colors.white};
        font-family: 'Special Gothic Expanded One', sans-serif;
        border: none;
        transition: all 0.3s ease;

        &:hover {
            cursor: pointer;
            transform: scale(1.02);
            filter: brightness(1.1);
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


    .buttonPaymentBox {
        width: 95%;
        display: inline-block;
        background: linear-gradient(
            90deg,
            rgba(222, 0, 0, 1) 0%,
            rgba(113, 3, 168, 1) 47%,
            rgba(66, 158, 0, 1) 100%
        );
        padding: 0.5rem;
        border-radius: 20px;
        color: ${({ theme }) => theme.colors.white};
        font-family: 'Special Gothic Expanded One', sans-serif;
        border: none;
        transition: all 0.3s ease;

        &:hover {
            cursor: pointer;
            transform: scale(1.02);
            filter: brightness(1.1);
        }
    }
`