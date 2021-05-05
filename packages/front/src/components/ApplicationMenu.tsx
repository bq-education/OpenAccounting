import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import theme from "../style/theme/theme";

const ApplicationMenu: FC<{ items: string[] }> = ({ items }) => {
  const [selected, setSelected] = useState<string>(items[0]);
  return (
    <div>
      {items.map((value, index) => (
        <Item
          key={index}
          selected={value === selected}
          onClick={() => setSelected(value)}
        >
          {value}
        </Item>
      ))}
    </div>
  );
};

export default ApplicationMenu;

const Item = styled.div<{ selected: boolean }>`
  width: 124px;
  height: 20px;
  margin: 0px 72px 10px 44px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  cursor: pointer;
  color: ${(props) =>
    props.selected ? theme.colors["color-sky-blue-100"] : " #ffffff"};
`;
