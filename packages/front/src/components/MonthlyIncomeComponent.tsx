import React, { FC, useState } from "react";
import { projects } from "../config";
import {
  Table,
  Row,
  Column,
  HeaderRow,
  Cell,
} from "../style/components/styledcomponents";
import { Income } from "../types";
import RowIncomeComponent from "./RowIncomeComponent";
import SelectComponent from "./SelectComponent";

const incomeExample: Income[] = [
  {
    id: "1",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    lastmodified: "23/33/2323",
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
  },
];

const MonthlyIncomeComponent: FC<{ month: number; year: number }> = ({
  month,
  year,
}) => {
  const [incomeTable, setIncomeTable] = useState<Income[]>(incomeExample);
  const updateCell = (id: string, key: string, value: string) => {
    const row: Income | undefined = incomeTable.find((r) => r.id === id);
    if (!row) throw new Error("Row not found. This should not happen");
    if (row && Object.keys(row).includes(key)) {
      debugger;
      if (key === "amount") {
        if (!isNaN(Number(value))) row.amount = Number(value);
      } else if (key === "paid") row.paid = Boolean(value);
      else (row as any)[key] = value;
    }
    setIncomeTable([...incomeTable]);
  };

  return (
    <React.Fragment>
      <Table>
        <HeaderRow>
          <Column width="150px">Cantidad (€)</Column>
          <Column width="150px">Proyecto</Column>
          <Column width="150px">Área</Column>
          <Column width="250px">Issue JIRA</Column>
          <Column width="165px">Fecha de pago</Column>
          <Column width="150px">Cobrado</Column>
          <Column width="150px">Introducido por</Column>
          <Column width="150px">Última modificación</Column>
          <Column width="150px">&nbsp;</Column>
        </HeaderRow>
        {incomeTable.map((row) => (
          <RowIncomeComponent
            key={row.id}
            row={row}
            projects={projects}
          ></RowIncomeComponent>
        ))}
      </Table>
    </React.Fragment>
  );
};

export default MonthlyIncomeComponent;
