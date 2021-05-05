import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import theme from "../style/theme/theme";

const Applications: FC<{
  list: string[];
  setApplication: (app: string) => void;
}> = ({ list, setApplication }) => {
  return (
    <div>
      <Select onChange={(e) => setApplication(e.target.value)}>
        {list.map((application, index) => (
          <option key={index}>{application}</option>
        ))}
      </Select>
    </div>
  );
};

export default Applications;

const Select = styled.select`
  // appearance: none;
  padding: 0px;
  width: 130px;
  height: 20px;
  margin: 0px 66px 9px 44px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #ffffff;
  background-color: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  justify-self: end;
  & > option {
    background-color: ${theme.colors["color-black-80"]};
  }
`;
