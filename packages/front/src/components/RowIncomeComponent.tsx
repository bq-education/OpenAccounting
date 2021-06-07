import React, { FC, useState } from "react";
import {
  Cell,
  Column,
  Row,
  WhiteButton,
} from "../style/components/styledcomponents";
import { Income, Project } from "../types";
import SelectComponent from "./SelectComponent";

const RowIncomeComponent: FC<{
  row?: Income;
  projects: Project[];
  removeHandler?: () => void;
  addHandler?: (row: Income) => void;
}> = ({ row, projects, removeHandler, addHandler }) => {
  const emptyRow: Income = {
    id: "",
    amount: 0,
    project: projects[0].name,
    area: "",
    jira: "",
    factura: "",
    due: "",
    paid: false,
    by: "",
    lastmodified: "",
  };

  const [values, setValues] = useState<Income>(
    row || {
      id: "",
      amount: 0,
      project: projects[0].name,
      area: "",
      jira: "",
      factura: "",
      due: "",
      paid: false,
      by: "",
      lastmodified: "",
    }
  );

  const updateCell = (values: Income, key: string, value: string) => {
    if (values && Object.keys(values).includes(key)) {
      if (key === "amount") {
        if (!isNaN(Number(value))) values.amount = Number(value);
      } else if (key === "paid") values.paid = "Si" === value;
      else (values as any)[key] = value;
    }
    setValues({ ...values });
  };

  return (
    <Row>
      <Cell
        width="120px"
        type="number"
        step="any"
        min="0"
        value={values?.amount || ""}
        onChange={(e) => updateCell(values!, "amount", e.target.value)}
      ></Cell>
      <Column width="150px">
        <SelectComponent
          selected={values?.project || projects[0].name}
          options={projects.map((p) => p.name)}
          onChange={(value: string) => {
            updateCell(values!, "project", value);
            updateCell(
              values!,
              "area",
              projects.find((p) => values?.project === value)?.areas[0] || ""
            );
          }}
          width="fit-content"
          maxwidth="150px"
        />
      </Column>
      <Column width="150px">
        <SelectComponent
          width="150px"
          selected={values?.area || projects[0].areas[0]}
          options={
            projects
              .find((p) => values?.project === p.name)
              ?.areas.map((a) => a) || []
          }
          onChange={(value: string) => {
            updateCell(values!, "area", value);
          }}
          maxwidth="150px"
        />
      </Column>
      <Cell
        width="150px"
        type="url"
        value={values.jira}
        onChange={(e) => updateCell(values!, "jira", e.target.value)}
      ></Cell>
      <Cell
        width="100px"
        value={values.factura}
        onChange={(e) => updateCell(values!, "factura", e.target.value)}
      ></Cell>
      <Cell
        width="165px"
        type="date"
        value={values.due}
        onChange={(e) => updateCell(values!, "due", e.target.value)}
      ></Cell>
      <Column width="100px">
        <SelectComponent
          selected={values.paid ? "Si" : "No"}
          options={["Si", "No"]}
          onChange={(value: string) => {
            updateCell(values!, "paid", value === "Si" ? "true" : "false");
          }}
          width="fit-content"
          maxwidth="150px"
        />
      </Column>
      <Cell width="150px" value={values.by} readOnly={true}></Cell>
      <Cell
        width="200px"
        type="date"
        value={values.lastmodified}
        onKeyDown={() => false}
        readOnly={true}
      ></Cell>
      {removeHandler && (
        <Column width="150px" onClick={(e) => removeHandler()}>
          Borrar
        </Column>
      )}
      {addHandler && (
        <Column width="150px">
          <WhiteButton
            margin="0"
            onClick={(e) => {
              addHandler(values);
              setValues(emptyRow);
            }}
          >
            Añadir
          </WhiteButton>
        </Column>
      )}
    </Row>
  );
};

export default RowIncomeComponent;
