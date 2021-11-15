import styled from "styled-components/macro";
import { vars } from "../../../helpers/styles/variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled.button`
  color: ${vars.color.orange};
  font-size: 2rem;
  display: flex;
`;

export const Title = styled.div`
  margin: 0 1rem;
  font-weight: bold;
  color: ${vars.color.blue};
  text-transform: uppercase;
`;
