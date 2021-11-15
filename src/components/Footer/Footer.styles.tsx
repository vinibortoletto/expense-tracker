import styled from "styled-components/macro";

export const Container = styled.div`
  text-align: center;
  padding: 10rem 0 2rem 0;
  font-size: 0.8rem;

  span {
    font-weight: bold;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 2rem;
    filter: grayscale(1) brightness(0);
  }

  svg {
    filter: grayscale(1) brightness(0);
    font-size: 2rem;
  }
`;
