import { Item } from "../types/Item";

export const formatDate = (date: Date): string => {
  let month = date.getMonth();
  let year = date.getFullYear();
  let day = date.getDate();

  const addZero = (number: number) =>
    number < 10 ? `0${number}` : `${number}`;

  return `${addZero(day)}/${addZero(month)}/${year}`;
};

export const getCurrentMonth = (): string => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split("-");
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Obtober",
    "November",
    "December",
  ];

  return `${months[parseInt(month) - 1]} ${year}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split("-");

  list.forEach((item) => {
    const itemMonth = item.date.getMonth();
    const itemYear = item.date.getFullYear();

    if (itemMonth === parseInt(month) && itemYear === parseInt(year))
      newList.push(item);
  });

  return newList;
};
