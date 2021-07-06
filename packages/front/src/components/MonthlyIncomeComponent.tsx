import React, { FC, useState } from "react";
import { projects, incomeColumns as columns } from "../config";
import { Table, Column, HeaderRow } from "../style/components/styledcomponents";
import arraySort from "array-sort";
import RowComponent from "./RowComponent";
import { Income } from "../types";

const incomeExample: Income[] = [
  {
    id: "1",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    invoice: "12334",
    due: "2020-12-03",
    paid: true,
    by: "Alberto Valero",
    updatedAt: "23/33/2323",
    createdAt: "23/33/2323",
    description: "bla bla bla",
    confirmed: true,
  },
  {
    id: "2",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    invoice: "12334",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    updatedAt: "23/33/2323",
    createdAt: "23/33/2323",
    description: "bla bla bla",
    confirmed: false,
  },
  {
    id: "3",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    invoice: "12334",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    updatedAt: "23/33/2323",
    createdAt: "23/33/2323",
    description: "bla bla bla",
    confirmed: true,
  },
];

const emptyRow: Income = {
  id: "",
  amount: 0,
  project: projects[0].name,
  area: "",
  jira: "",
  invoice: "",
  due: "",
  paid: false,
  by: "",
  updatedAt: "",
  createdAt: "",
  description: "",
  confirmed: false,
};

const MonthlyIncomeComponent: FC<{ month: number; year: number }> = ({
  month,
  year,
}) => {
  const [incomeTable, setIncomeTable] = useState<Income[]>(incomeExample);

  const deleteRow = (id: string): void => {
    const toRemove = incomeTable.find((row) => row.id === id);
    if (toRemove) {
      const index = incomeTable.indexOf(toRemove);
      incomeTable.splice(index, 1);
      setIncomeTable([...incomeTable]);
    }
  };

  const addRow = (row: Income): void => {
    setIncomeTable([...incomeTable, row]);
  };

  const updateRow = (row: Income, newrow: Income): void => {
    const index = incomeTable.indexOf(row);
    incomeTable[index] = newrow;
  };

  const sortBy = (rows: Income[], key: string): Income[] => {
    arraySort(rows, key);
    return rows;
  };

  return (
    <React.Fragment>
      <Table>
        <HeaderRow>
          {columns.map((col) => (
            <Column
              width={col.attributes.width}
              onClick={() => {
                col.shortable &&
                  setIncomeTable([...sortBy(incomeTable, col.key)]);
              }}
            >
              {col.name}
            </Column>
          ))}
        </HeaderRow>
        {incomeTable.map((row) => (
          <RowComponent
            columns={columns}
            key={row.id}
            row={row}
            projects={projects}
            removeHandler={() => deleteRow(row.id)}
            updateHandler={(newrow) => updateRow(row, newrow as Income)}
          ></RowComponent>
        ))}
        <RowComponent
          columns={columns}
          projects={projects}
          addHandler={(row) => addRow(row as Income)}
          emptyRow={emptyRow}
        ></RowComponent>
      </Table>
    </React.Fragment>
  );
};

export default MonthlyIncomeComponent;
