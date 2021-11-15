import React from "react";
import * as S from "./ResumeItem.styles";

type Props = {
  title: string;
  value: number;
  color?: string;
};

const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Info color={color}>${value}</S.Info>
      </S.Container>
    </>
  );
};

export default ResumeItem;
