import React, { FC, useState } from "react";
import { projects, expenseColumns as columns } from "../config";
import { Table, Column, HeaderRow } from "../style/components/styledcomponents";
import { Expense } from "../types";
import arraySort from "array-sort";
import RowComponent from "./RowComponent";

const expenseExample: Expense[] = [
  {
    id: "1",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    due: "2020-12-03",
    paid: true,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
    description: "bla bla bla",
    confirmed: true,
  },
  {
    id: "2",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
    description: "bla bla bla",
    confirmed: false,
  },
  {
    id: "3",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
    description: "bla bla bla",
    confirmed: true,
  },
];

const emptyRow: Expense = {
  id: "",
  amount: 0,
  project: projects[0].name,
  area: "",
  jira: "",
  due: "",
  paid: false,
  by: "",
  lastmodified: "",
  description: "",
  confirmed: false,
};

const MonthlyExpenseComponent: FC<{ month: number; year: number }> = ({
  month,
  year,
}) => {
  const [expenseTable, setExpenseTable] = useState<Expense[]>(expenseExample);

  const deleteRow = (id: string): void => {
    const toRemove = expenseTable.find((row) => row.id === id);
    if (toRemove) {
      const index = expenseTable.indexOf(toRemove);
      expenseTable.splice(index, 1);
      setExpenseTable([...expenseTable]);
    }
  };

  const addRow = (row: Expense): void => {
    setExpenseTable([...expenseTable, row]);
  };

  const updateRow = (row: Expense, newrow: Expense): void => {
    const index = expenseTable.indexOf(row);
    expenseTable[index] = newrow;
  };

  const sortBy = (rows: Expense[], key: string): Expense[] => {
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
                  setExpenseTable([...sortBy(expenseTable, col.key)]);
              }}
            >
              {col.name}
            </Column>
          ))}
        </HeaderRow>
        {expenseTable.map((row) => (
          <RowComponent
            columns={columns}
            key={row.id}
            row={row}
            projects={projects}
            removeHandler={() => deleteRow(row.id)}
            updateHandler={(newrow) => updateRow(row, newrow as Expense)}
          ></RowComponent>
        ))}
        <RowComponent
          columns={columns}
          projects={projects}
          addHandler={(row) => addRow(row as Expense)}
          emptyRow={emptyRow}
        ></RowComponent>
      </Table>
    </React.Fragment>
  );
};

export default MonthlyExpenseComponent;
