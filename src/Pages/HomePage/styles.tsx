import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`

export const FadeWrapper = styled.div`
    opacity: 1;
    transition: opacity 1s ease-in-out;

    &.fade-out {
        opacity: 0;
    }
`