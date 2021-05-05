import React, { FC } from "react";
import styled from "@emotion/styled";

const TopMenu: FC = () => {
  return (
    <React.Fragment>
      <Header>
        <Entry>Income</Entry>
        <Entry>Expenses</Entry>
        <Entry>External Personnel</Entry>
      </Header>
    </React.Fragment>
  );
};

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Entry = styled.div`
  padding: 10px;
`;

export default TopMenu;
