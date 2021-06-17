import React, { FC } from "react";
import { SelectInput } from "../style/components/styledcomponents";

const SelectComponent: FC<{
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  width: string;
  maxwidth: string;
  selected: string;
}> = ({ options, onChange, onBlur, width, maxwidth, selected }) => {
  return (
    <React.Fragment>
      <SelectInput
        defaultValue={selected}
        width={width}
        max-width={maxwidth}
        padding="0"
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur?.(e)}
      >
        {options.map((op) => (
          <option key={op}>{op}</option>
        ))}
      </SelectInput>
    </React.Fragment>
  );
};

export default SelectComponent;
