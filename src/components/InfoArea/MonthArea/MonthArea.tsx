import React from "react";
import * as S from "./MonthArea.styles";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { formatCurrentMonth } from "../../../helpers/dateFilter";

type Props = {
  currentMonth: string;
  setCurrentMonth: React.Dispatch<React.SetStateAction<string>>;
  handleMonthChange: (newMonth: string) => void;
};

const MonthArea = ({
  currentMonth,
  setCurrentMonth,
  handleMonthChange,
}: Props) => {
  const prevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    newDate.setMonth(newDate.getMonth() - 1);
    handleMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
  };

  const nextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let newDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    newDate.setMonth(newDate.getMonth() + 1);
    handleMonthChange(`${newDate.getFullYear()}-${newDate.getMonth() + 1}`);
  };

  return (
    <>
      <S.Container>
        <S.Arrow type="button" onClick={prevMonth}>
          <BsFillArrowLeftSquareFill />
        </S.Arrow>
        <S.Title>{formatCurrentMonth(currentMonth)}</S.Title>
        <S.Arrow type="button" onClick={nextMonth}>
          <BsFillArrowRightSquareFill />
        </S.Arrow>
      </S.Container>
    </>
  );
};

export default MonthArea;
