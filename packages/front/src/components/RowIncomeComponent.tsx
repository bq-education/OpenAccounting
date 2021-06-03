import React, { FC } from "react";
import { Cell, Column, Row } from "../style/components/styledcomponents";
import { Income, Project } from "../types";
import SelectComponent from "./SelectComponent";

const RowIncomeComponent: FC<{ row: Income; projects: Project[] }> = ({
  row,
  projects,
}) => {
  const updateCell = (row: Income, key: string, value: string) => {
    if (row && Object.keys(row).includes(key)) {
      debugger;
      if (key === "amount") {
        if (!isNaN(Number(value))) row.amount = Number(value);
      } else if (key === "paid") row.paid = Boolean(value);
      else (row as any)[key] = value;
    }
    // setIncomeTable([...incomeTable]);
  };

  return (
    <Row>
      <Cell
        width="150px"
        type="number"
        step="any"
        min="0"
        value={row.amount}
        onChange={(e) => updateCell(row, "amount", e.target.value)}
      ></Cell>
      <SelectComponent
        options={projects.map((p) => p.name)}
        onChange={(value: string) => {
          console.log(value);
        }}
        width="150px"
      />
      <Cell
        width="150px"
        value={row.area}
        onChange={(e) => updateCell(row, "area", e.target.value)}
      ></Cell>
      <Cell
        width="250px"
        type="url"
        value={row.jira}
        onChange={(e) => updateCell(row, "jira", e.target.value)}
      ></Cell>
      <Cell
        width="165px"
        type="date"
        value={row.due}
        onChange={(e) => updateCell(row, "due", e.target.value)}
      ></Cell>
      <Cell
        width="150px"
        value={row.paid ? "Si" : "No"}
        onChange={(e) =>
          updateCell(row, "paid", e.target.value === "Si" ? "true" : "false")
        }
      ></Cell>
      <Cell
        width="150px"
        value={row.by}
        onChange={(e) => updateCell(row, "by", e.target.value)}
      ></Cell>
      <Cell width="150px" value={row.lastmodified}></Cell>
      <Column width="150px"> Borrar </Column>
    </Row>
  );
};

export default RowIncomeComponent;
