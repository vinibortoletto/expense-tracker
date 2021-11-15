import React from "react";
import { Item } from "../../types/Item";
import * as S from "./InfoArea.styles";
import MonthArea from "./MonthArea/MonthArea";
import ResumeArea from "./ResumeArea/ResumeArea";

type Props = {
  currentMonth: string;
  setCurrentMonth: React.Dispatch<React.SetStateAction<string>>;
  handleMonthChange: (newMonth: string) => void;
  filteredList: Item[];
};

const InfoArea = ({
  currentMonth,
  setCurrentMonth,
  handleMonthChange,
  filteredList,
}: Props) => {
  return (
    <>
      <S.Container>
        <MonthArea
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          handleMonthChange={handleMonthChange}
        />
        <ResumeArea filteredList={filteredList} />
      </S.Container>
    </>
  );
};

export default InfoArea;
