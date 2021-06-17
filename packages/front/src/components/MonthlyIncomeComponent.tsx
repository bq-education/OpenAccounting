import React, { FC, useState } from "react";
import { projects } from "../config";
import { Table, Column, HeaderRow } from "../style/components/styledcomponents";
import { Income } from "../types";
import RowIncomeComponent from "./RowIncomeComponent";
import arraySort from "array-sort";

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
    invoice: "12334",
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
    invoice: "12334",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
    description: "bla bla bla",
    confirmed: true,
  },
];

const columnWidths = [
  "120px",
  "150px",
  "150px",
  "100px",
  "165px",
  "100px",
  "300px",
  "100px",
  "100px",
];

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
          <Column width="120px">Cantidad (€)</Column>
          <Column
            width="150px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "project")]);
            }}
          >
            Proyecto
          </Column>
          <Column
            width="150px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "area")]);
            }}
          >
            Área
          </Column>
          <Column
            width="150px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "jira")]);
            }}
          >
            Issue JIRA
          </Column>
          <Column
            width="100px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "invoice")]);
            }}
          >
            Nº Factura
          </Column>
          <Column
            width="165px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "due")]);
            }}
          >
            Fecha de pago
          </Column>
          <Column
            width="100px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "paid")]);
            }}
          >
            Cobrado
          </Column>
          <Column
            width="300px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "description")]);
            }}
          >
            Descripción
          </Column>
          <Column
            width="100px"
            onClick={() => {
              setIncomeTable([...sortBy(incomeTable, "confirmed")]);
            }}
          >
            Confirmado
          </Column>
          <Column width="100px">&nbsp;</Column>
        </HeaderRow>
        {incomeTable.map((row) => (
          <RowIncomeComponent
            key={row.id}
            row={row}
            projects={projects}
            removeHandler={() => deleteRow(row.id)}
            updateHandler={(newrow: Income) => updateRow(row, newrow)}
          ></RowIncomeComponent>
        ))}
        <RowIncomeComponent
          projects={projects}
          addHandler={(row: Income) => addRow(row)}
        ></RowIncomeComponent>
      </Table>
    </React.Fragment>
  );
};

export default MonthlyIncomeComponent;
