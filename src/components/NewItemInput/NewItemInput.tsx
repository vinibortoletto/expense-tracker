import React, { useState } from "react";
import * as S from "./NewItemInput.styles";
import { Item } from "../../types/Item";

type Props = {
  list: Item[];
  setList: React.Dispatch<React.SetStateAction<Item[]>>;
};

const NewItemInput = ({ list, setList }: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    category: "",
    value: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleErrors = () => {
    const { title, category, date, value } = formData;
    const titleInput = document.getElementById("title");
    const dateInput = document.getElementById("date");
    const categoryInput = document.getElementById("category");
    const valueInput = document.getElementById("value");
    let error = false;

    if (title === "" || date === "" || category === "" || value === "")
      error = true;
    else error = false;

    if (title === "") titleInput?.classList.add("error");
    else titleInput?.classList.remove("error");

    if (date === "") dateInput?.classList.add("error");
    else dateInput?.classList.remove("error");

    if (category === "") categoryInput?.classList.add("error");
    else categoryInput?.classList.remove("error");

    if (value === "") valueInput?.classList.add("error");
    else valueInput?.classList.remove("error");

    return error;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newList = list;
    const [year, month, day] = formData.date.split("-");
    const date = new Date(parseInt(year), parseInt(month), parseInt(day));

    const newItem: Item = {
      category: formData.category,
      date: date,
      title: formData.title,
      value: parseInt(formData.value),
    };

    if (handleErrors() === false) {
      newList.push(newItem);
      setList([...newList]);
      setFormData({
        category: "",
        date: "",
        title: "",
        value: "",
      });
    }
  };

  return (
    <>
      <S.Container onSubmit={handleSubmit}>
        <div>
          <S.Label htmlFor="date">Date</S.Label>
          <S.Input
            isDate={formData.date === "" ? "grey" : "black"}
            type="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <S.Label htmlFor="title">Title</S.Label>
          <S.Input
            type="text"
            id="title"
            placeholder="Dinner with Clair"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div>
          <S.Label htmlFor="category">Category</S.Label>
          <S.Select
            isCategory={formData.category === "" ? "grey" : "black"}
            name="category"
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select opt
            </option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="salary">Salary</option>
          </S.Select>
        </div>

        <div>
          <S.Label htmlFor="value">Value</S.Label>
          <S.Input
            type="number"
            name="value"
            id="value"
            placeholder="35.50"
            value={formData.value}
            onChange={handleChange}
          />
        </div>

        <S.Button type="submit">Add item</S.Button>
      </S.Container>
    </>
  );
};

export default NewItemInput;
