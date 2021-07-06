import React, { FC } from "react";
import styled from "@emotion/styled";
import theme from "../style/theme/theme";

const MonthYearMenu: FC<{
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  month: number;
  year: number;
}> = ({ setMonth, month, setYear, year }) => {
  const MONTHS: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const cY = new Date().getFullYear();
  const years: number[] = [cY - 2, cY - 1, cY, cY + 1];

  return (
    <Container>
      <Select
        onChange={(e) => setMonth(parseInt(e.target.id))}
        value={MONTHS[month]}
      >
        {MONTHS.map((month, index) => (
          <option id={String(index)} key={index}>
            {month}
          </option>
        ))}
      </Select>
      <Select onChange={(e) => setYear(parseInt(e.target.value))} value={year}>
        {years.map((year, index) => (
          <option key={`${year}${index}`}>{year}</option>
        ))}
      </Select>
    </Container>
  );
};

export default MonthYearMenu;

const Container = styled.div`
  padding: 0;
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
`;

const Select = styled.select`
  // appearance: none;
  padding: 0px;
  width: 100px;
  height: 40px;
  margin: 0 10px 0 10px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors["color-black-100"]};
  background-color: white;
  border: 0;
  outline: none;
  cursor: pointer;
  justify-self: end;
  & > option {
    background-color: white;
  }
`;
