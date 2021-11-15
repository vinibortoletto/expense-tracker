import React from "react";
import * as S from "./Table.styles";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";

type Props = {
  filteredList: Item[];
};

const Table = ({ filteredList }: Props) => {
  return (
    <>
      <S.Container>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Title</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {filteredList.map((item, index) => (
            <tr key={index}>
              <td>{formatDate(item.date)}</td>
              <S.Category color={categories[item.category].color}>
                {item.category}
              </S.Category>
              <td>{item.title}</td>
              <S.Value
                color={categories[item.category].expense ? "red" : "green"}
              >
                ${item.value}
              </S.Value>
            </tr>
          ))}
        </tbody>
      </S.Container>
    </>
  );
};

export default Table;
