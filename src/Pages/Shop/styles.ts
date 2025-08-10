import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};

    .boxCards {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
        width: 80%;
        max-width: 1400px;
        margin: 0 auto;
    }

    @media (max-width: 1024px) {
        height: 340vh;
        .boxCards {
            gap: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        height: 440vh;
        width: 800px;

        .boxCards {
            gap: 1rem;
        }
    }
`;
