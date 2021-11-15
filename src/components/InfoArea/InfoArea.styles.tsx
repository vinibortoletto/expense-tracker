import styled from "styled-components/macro";
import { AreaStyles } from "../../helpers/styles/AreaStyles";
import { media } from "../../helpers/styles/mixins";

export const Container = styled.div`
  ${AreaStyles};
  justify-content: center;
  gap: 1rem;
  text-align: center;

  ${media(600)} {
    grid-template-columns: 40% 60%;
  }
`;
