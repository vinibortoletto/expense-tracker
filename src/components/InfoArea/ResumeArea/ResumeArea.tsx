import React, { useEffect, useState } from "react";
import { Item } from "../../../types/Item";
import * as S from "./ResumeArea.styles";
import ResumeItem from "./ResumeItem/ResumeItem";
import { categories } from "../../../data/categories";

type Props = {
  filteredList: Item[];
};

const ResumeArea = ({ filteredList }: Props) => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const handleCalc = () => {
      let newIncome = 0;
      let newExpenses = 0;
      let newBalance = 0;

      filteredList.forEach((item) => {
        if (!categories[item.category].expense) newIncome += item.value;
        if (categories[item.category].expense) newExpenses += item.value;
      });

      newBalance = newIncome - newExpenses;

      setIncome(newIncome);
      setExpenses(newExpenses);
      setBalance(newBalance);
    };

    handleCalc();
  }, [filteredList]);

  return (
    <>
      <S.Container>
        <ResumeItem title="Income" value={income} />
        <ResumeItem title="Expenses" value={expenses} />
        <ResumeItem
          title="Balance"
          value={balance}
          color={balance > 0 ? "green" : "red"}
        />
      </S.Container>
    </>
  );
};

export default ResumeArea;
