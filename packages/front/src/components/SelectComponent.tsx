import React, { FC } from "react";
import { SelectInput } from "../style/components/styledcomponents";

const SelectComponent: FC<{
  options: string[];
  onChange: (value: string) => void;
  width: string;
}> = ({ options, onChange, width }) => {
  return (
    <React.Fragment>
      <SelectInput
        width={width}
        padding="0"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </SelectInput>
    </React.Fragment>
  );
};

export default SelectComponent;
