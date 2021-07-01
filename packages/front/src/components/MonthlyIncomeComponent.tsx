import React, { FC, useState } from "react";
import { projects } from "../config";
import { Table, Column, HeaderRow } from "../style/components/styledcomponents";
import { IColumn, Income } from "../types";
import arraySort from "array-sort";
import RowComponent from "./RowComponent";

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

const columns: IColumn[] = [
  {
    name: "Cantidad",
    key: "amount",
    attributes: {
      type: "number",
      width: "120px",
      step: "any",
    },
    shortable: false,
    type: "number",
  },
  {
    name: "Proyecto",
    key: "project",
    attributes: {
      width: "150px",
      selected: projects[0].name,
    },
    options: projects.map((p) => p.name),

    shortable: true,
    type: "select",
  },
  {
    name: "Área",
    key: "area",
    attributes: {
      width: "150px",
      selected: projects[0].areas[0],
    },
    options: projects.map((p) => p.name),
    shortable: false,
    type: "select",
  },
  {
    name: "JIRA",
    key: "jira",
    attributes: {
      width: "150px",
      type: "url",
    },
    shortable: true,
    type: "url",
  },
  {
    name: "Nº Factura",
    key: "invoice",
    attributes: {
      width: "100px",
    },
    shortable: true,
    type: "string",
  },
  {
    name: "Vencimiento",
    key: "due",
    attributes: { width: "165px", type: "date" },
    shortable: true,
    type: "date",
  },
  {
    name: "Cobrado",
    key: "paid",
    attributes: { width: "100px" },
    shortable: true,
    type: "boolean",
  },
  {
    name: "Descripción",
    key: "description",
    attributes: { width: "300px" },
    shortable: false,
  },
  {
    name: "Confirmado",
    key: "confirmed",
    attributes: { width: "100px" },
    type: "boolean",
    shortable: true,
  },
  {
    name: "",
    key: "actions",
    attributes: { width: "100px" },
    shortable: false,
  },
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
            updateHandler={(newrow: Income) => updateRow(row, newrow)}
          ></RowComponent>
        ))}
        <RowComponent
          columns={columns}
          projects={projects}
          addHandler={(row: Income) => addRow(row)}
        ></RowComponent>
      </Table>
    </React.Fragment>
  );
};

export default MonthlyIncomeComponent;
