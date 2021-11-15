import styled, { css } from "styled-components/macro";
import { AreaStyles } from "../../helpers/styles/AreaStyles";
import { vars } from "../../helpers/styles/variables";
import { media } from "../../helpers/styles/mixins";

type Props = {
  isCategory?: string;
  isDate?: string;
};

export const Container = styled.form`
  ${AreaStyles};
  margin-top: 1rem;
  gap: 0.5rem;

  ${media("tablet")} {
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  }
`;

export const Label = styled.label`
  color: ${vars.color.blue};
  font-weight: bold;
  font-size: 0.8rem;
`;

export const InputStyles = css`
  width: 100%;
  height: 3rem;
  padding: 0.6rem;
  margin-top: 0.5rem;
  border: 1px solid grey;
  border-radius: 3px;
  background: transparent;
`;

export const Error = css`
  border: 2px solid red;
`;

export const Input = styled.input<Props>`
  ${InputStyles}

  &[type="date"] {
    color: ${(props) => props.isDate};
  }

  &.error {
    ${Error}
  }
`;

export const Select = styled.select<Props>`
  ${InputStyles}
  color: ${(props) => props.isCategory};

  &.error {
    ${Error}
  }
`;

export const Button = styled.button`
  height: 3rem;
  padding: 0.6rem;
  margin-top: 1rem;
  border-radius: 3px;
  color: white;
  background: ${vars.color.orange};
  font-weight: bold;

  ${media("tablet")} {
    align-self: end;
  }
`;
