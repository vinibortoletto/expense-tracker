import React, { useEffect, useState } from "react";
import * as S from "./App.styles";
import { GlobalStyles } from "./helpers/styles/GlobalStyles";
import InfoArea from "./components/InfoArea/InfoArea";
import NewItemInput from "./components/NewItemInput/NewItemInput";
import Table from "./components/Table/Table";
import Footer from "./components/Footer/Footer";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <GlobalStyles />
      <S.Header>
        <h1>Expense tracker</h1>
      </S.Header>

      <main>
        <InfoArea
          filteredList={filteredList}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
          handleMonthChange={handleMonthChange}
        />
        <NewItemInput list={list} setList={setList} />
        <Table filteredList={filteredList} />
      </main>

      <Footer />
    </>
  );
};

export default App;
