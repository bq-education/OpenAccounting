import React, { FC, useState } from "react";
import { projects } from "../config";
import { Table, Column, HeaderRow } from "../style/components/styledcomponents";
import { Income } from "../types";
import RowIncomeComponent from "./RowIncomeComponent";

const incomeExample: Income[] = [
  {
    id: "1",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    factura: "12334",
    due: "2020-12-03",
    paid: true,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
  },
  {
    id: "2",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    factura: "12334",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
  },
  {
    id: "3",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    factura: "12334",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
  },
];

const MonthlyIncomeComponent: FC<{ month: number; year: number }> = ({
  month,
  year,
}) => {
  const [incomeTable, setIncomeTable] = useState<Income[]>(incomeExample);

  const removeRow = (id: string): void => {
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

  return (
    <React.Fragment>
      <Table>
        <HeaderRow>
          <Column width="120px">Cantidad (€)</Column>
          <Column width="150px">Proyecto</Column>
          <Column width="150px">Área</Column>
          <Column width="150px">Issue JIRA</Column>
          <Column width="100px">Nº Factura</Column>
          <Column width="165px">Fecha de pago</Column>
          <Column width="100px">Cobrado</Column>
          <Column width="150px">Introducido por</Column>
          <Column width="200px">Última modificación</Column>
          <Column width="150px">&nbsp;</Column>
        </HeaderRow>
        {incomeTable.map((row) => (
          <RowIncomeComponent
            key={row.id}
            row={row}
            projects={projects}
            removeHandler={() => removeRow(row.id)}
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
