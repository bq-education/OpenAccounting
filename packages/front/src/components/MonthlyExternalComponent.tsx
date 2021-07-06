import React, { FC, useState } from "react";
import { projects, externalColumns as columns } from "../config";
import { Table, Column, HeaderRow } from "../style/components/styledcomponents";
import { External } from "../types";
import arraySort from "array-sort";
import RowComponent from "./RowComponent";

const externalExample: External[] = [
  {
    id: "1",
    name: "Pinco Palino",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
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
    name: "Robonautas Asociados",
    amount: 500,
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasdd",
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
    name: "Sofia Rulicora",
    project: "RetoTech",
    area: "Coordinacion",
    jira: "https://jira.bq.com/asddf/aasddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    due: "2020-12-03",
    paid: false,
    by: "Alberto Valero",
    updatedAt: "23/33/2323",
    createdAt: "23/33/2323",
    description: "bla bla bla",
    confirmed: true,
  },
];

const emptyRow: External = {
  id: "",
  name: "",
  amount: 0,
  project: projects[0].name,
  area: "",
  jira: "",
  due: "",
  paid: false,
  by: "",
  updatedAt: "",
  createdAt: "",
  description: "",
  confirmed: false,
};

const MonthlyExternalComponent: FC<{ month: number; year: number }> = ({
  month,
  year,
}) => {
  const [externalTable, setExternalTable] = useState<External[]>(
    externalExample
  );

  const deleteRow = (id: string): void => {
    const toRemove = externalTable.find((row) => row.id === id);
    if (toRemove) {
      const index = externalTable.indexOf(toRemove);
      externalTable.splice(index, 1);
      setExternalTable([...externalTable]);
    }
  };

  const addRow = (row: External): void => {
    setExternalTable([...externalTable, row]);
  };

  const updateRow = (row: External, newrow: External): void => {
    const index = externalTable.indexOf(row);
    externalTable[index] = newrow;
  };

  const sortBy = (rows: External[], key: string): External[] => {
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
                  setExternalTable([...sortBy(externalTable, col.key)]);
              }}
            >
              {col.name}
            </Column>
          ))}
        </HeaderRow>
        {externalTable.map((row) => (
          <RowComponent
            columns={columns}
            key={row.id}
            row={row}
            projects={projects}
            removeHandler={() => deleteRow(row.id)}
            updateHandler={(newrow) => updateRow(row, newrow as External)}
          ></RowComponent>
        ))}
        <RowComponent
          columns={columns}
          projects={projects}
          addHandler={(row) => addRow(row as External)}
          emptyRow={emptyRow}
        ></RowComponent>
      </Table>
    </React.Fragment>
  );
};

export default MonthlyExternalComponent;
