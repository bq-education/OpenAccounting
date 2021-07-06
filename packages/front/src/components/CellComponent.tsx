import React, { FC } from "react";
import styled from "@emotion/styled";
import SelectComponent from "./SelectComponent";
import ControlLink from "./ControlLink";
import { InputType } from "../types";

const Cell: FC<{
  attributes: { [key: string]: string };
  value?: string | number | boolean;
  selected?: string;
  options?: string[];
  type?: InputType;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onBlur: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}> = ({ attributes, value, selected, options, type, onBlur, onChange }) => {
  return (
    <React.Fragment>
      {type === InputType.URL && (
        <ControlLink url={value as string}>
          <Text
            {...attributes}
            value={value as string | number}
            onChange={onChange}
            onBlur={onBlur}
            inheritCursor={true}
          />
        </ControlLink>
      )}
      {(type === InputType.STRING ||
        type === InputType.NUMBER ||
        type === InputType.DATE) && (
        <Text
          {...attributes}
          value={value as string | number}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
      {type === InputType.BOOLEAN && (
        <Column {...attributes}>
          <SelectComponent
            selected={value ? "Si" : "No"}
            options={["Si", "No"]}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const ex = {
                ...e,
                target: {
                  ...e.target,
                  value: e.target.value === "Si" ? "true" : "false",
                },
              };
              onChange(ex);
            }}
            width="fit-content"
            maxwidth="150px"
          />
        </Column>
      )}
      {type === InputType.SELECT && (
        <Column {...attributes}>
          <SelectComponent
            selected={selected || ""}
            options={options || [""]}
            onChange={onChange}
            onBlur={onBlur}
            width="fit-content"
            maxwidth="150px"
          />
        </Column>
      )}
    </React.Fragment>
  );
};

export default Cell;

const Text = styled.input<{
  width?: string;
  height?: string;
  inheritCursor?: boolean;
}>`
  background-color: white;
  margin: 0;
  padding: 0 5px 0 5px;
  border: 0px;
  height: 25px;
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "25px"};
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  cursor: ${(props) => (props.inheritCursor ? "inherit" : "auto")};
`;

const Column = styled.div<{ width?: string; justifycontent?: string }>`
  width: ${(props) => props.width || "fit-content"};
  padding: 0 10px 0 10px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifycontent || "flex-start"}; ;
`;
