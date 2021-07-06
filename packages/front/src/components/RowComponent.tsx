import React, { FC, useState } from "react";
import {
  Action,
  Column,
  Row,
  WhiteButton,
} from "../style/components/styledcomponents";
import { IColumn, Income, Project } from "../types";
import { ReactComponent as TrashLogo } from "../static/icons/trash.svg";
import { ReactComponent as Info } from "../static/icons/info.svg";
import Cell from "./CellComponent";

const RowComponent: FC<{
  row?: any;
  projects: Project[];
  emptyRow?: Income;
  removeHandler?: () => void;
  addHandler?: (row: Income) => void;
  updateHandler?: (row: Income) => void;
  columns: IColumn[];
}> = ({
  row,
  projects,
  columns,
  emptyRow,
  removeHandler,
  addHandler,
  updateHandler,
}) => {
  // TODO
  const updateRow = (row: any): void => {
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
      {columns.map((cell: IColumn) => (
        <Cell
          type={cell.type}
          attributes={cell.attributes}
          value={values[cell.key] as string | number}
          onChange={(
            e:
              | React.ChangeEvent<HTMLInputElement>
              | React.ChangeEvent<HTMLSelectElement>
          ) => updateCell(values!, cell.key, e.target.value)}
          onBlur={(e) => updateRow(values)}
          options={
            (cell.key === "area" &&
              projects
                .find((p) => values?.project === p.name)
                ?.areas.map((a) => a)) ||
            cell.options
          }
        />
      ))}
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
              setValues(emptyRow!);
            }}
          >
            Añadir
          </WhiteButton>
        </Column>
      )}
    </Row>
  );
};

export default RowComponent;
