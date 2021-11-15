import styled from "styled-components/macro";
import { AreaStyles } from "../../helpers/styles/AreaStyles";
import { vars } from "../../helpers/styles/variables";

export const Container = styled.table`
  ${AreaStyles};
  margin-top: 1rem;

  thead {
    margin-bottom: 1rem;
  }

  thead tr {
    font-weight: bold;
    font-size: 0.8rem;
    color: ${vars.color.blue};
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    justify-items: start;
    margin-bottom: 0.5rem;
  }
`;

export const Category = styled.td<{ color: string }>`
  background-color: ${(props) => props.color};
  padding: 0.2rem 1rem;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
`;

export const Value = styled.td<{ color: string }>`
  color: ${(props) => props.color};
`;
