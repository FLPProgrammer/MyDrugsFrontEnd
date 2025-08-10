import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(
    90deg,
    rgba(222, 0, 0, 1) 0%,
    rgba(113, 3, 168, 1) 47%,
    rgba(66, 158, 0, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  font-family: 'Special Gothic Expanded One', sans-serif;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  overflow: hidden;

  &.fade-in {
    opacity: 1;
  }

  &.fade-out {
    opacity: 0;
  }

  .divDescription {
    margin-right: 1rem;
    text-align: center;

    h2 {
      color: white;
      font-size: 1.5rem;
    }
  }

  img {
    width: 250px;
    height: auto;
    object-fit: contain;
    max-height: 120px;
  }


  @media (max-width: 768px) {
        width: 100%;
    }
`;
