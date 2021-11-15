import styled from "styled-components/macro";
import { vars } from "../../../../helpers/styles/variables";

export const Container = styled.div`
  font-weight: bold;
`;

export const Title = styled.div`
  color: ${vars.color.blue};
  font-size: 0.8rem;
`;

export const Info = styled.div<{ color?: string }>`
  color: ${(props) => props.color};
`;
