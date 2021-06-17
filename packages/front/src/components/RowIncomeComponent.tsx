import React, { FC, useState } from "react";
import {
  Action,
  Cell,
  Column,
  Row,
  WhiteButton,
} from "../style/components/styledcomponents";
import { Income, Project } from "../types";
import SelectComponent from "./SelectComponent";
import { ReactComponent as TrashLogo } from "../static/icons/trash.svg";
import { ReactComponent as Info } from "../static/icons/info.svg";
import ControlLink from "./ControlLink";

const RowIncomeComponent: FC<{
  row?: Income;
  projects: Project[];
  removeHandler?: () => void;
  addHandler?: (row: Income) => void;
  updateHandler?: (row: Income) => void;
}> = ({ row, projects, removeHandler, addHandler, updateHandler }) => {
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
    lastmodified: "",
    description: "",
    confirmed: false,
  };

  // TODO
  const updateRow = (row: Income): void => {
    updateHandler && console.log(`Run Upgrade Mutation for ${row.id}`);
  };

  const [values, setValues] = useState<Income>(row || { ...emptyRow });

  const updateCell = (values: Income, key: string, value: string) => {
    if (values && Object.keys(values).includes(key)) {
      if (key === "amount") {
        if (!isNaN(Number(value))) values.amount = Number(value);
      } else if (key === "paid") values.paid = "Si" === value;
      else (values as any)[key] = value;
    }
    setValues({ ...values });
    if (updateHandler) updateHandler(values);
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
        onBlur={(e) => updateRow(values)}
      ></Cell>
      <Column width="150px">
        <SelectComponent
          selected={values?.project || projects[0].name}
          options={projects.map((p) => p.name)}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateCell(values!, "project", e.target.value);
            updateCell(
              values!,
              "area",
              projects.find((p) => values?.project === e.target.value)
                ?.areas[0] || ""
            );
          }}
          onBlur={(e) => updateRow(values)}
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateCell(values!, "area", e.target.value);
          }}
          onBlur={(e) => updateRow(values)}
          maxwidth="150px"
        />
      </Column>
      <ControlLink url={values.jira}>
        <Cell
          width="150px"
          type="url"
          value={values.jira}
          onChange={(e) => updateCell(values!, "jira", e.target.value)}
          inheritCursor={true}
        ></Cell>
      </ControlLink>
      <Cell
        width="100px"
        value={values.invoice}
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
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateCell(
              values!,
              "paid",
              e.target.value === "Si" ? "true" : "false"
            );
          }}
          width="fit-content"
          maxwidth="150px"
        />
      </Column>
      <Cell
        width="300px"
        value={values.description}
        onChange={(e) => {
          updateCell(values!, "description", e.target.value);
        }}
      ></Cell>
      <Column width="100px">
        <SelectComponent
          selected={values.confirmed ? "Si" : "No"}
          options={["Si", "No"]}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            updateCell(
              values!,
              "confirmed",
              e.target.value === "Si" ? "true" : "false"
            );
          }}
          width="fit-content"
          maxwidth="150px"
        />
      </Column>
      {removeHandler && (
        <Column width="100px" justifycontent="center">
          <Action onClick={(e) => removeHandler()}>
            <TrashLogo />
          </Action>
          <Action
            data-tip={`Añadido por: ${values.by}.<br> Última modificación: ${values.lastmodified}`}
          >
            <Info />
          </Action>
        </Column>
      )}
      {addHandler && (
        <Column width="150px" justifycontent="center">
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
