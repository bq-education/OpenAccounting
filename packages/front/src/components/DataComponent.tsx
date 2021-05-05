import React, { FC } from "react";
import styled from "@emotion/styled";
import LeftSidebar from "./LeftSidebar";
import TopMenu from "./TopMenu";

import theme from "../style/theme/theme";

const DataComponent: FC = () => {
  return (
    <React.Fragment>
      <Div>
        <Left>
          <LeftSidebar />
        </Left>
        <Top>
          <TopMenu />
        </Top>
      </Div>
    </React.Fragment>
  );
};

export default DataComponent;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 240px;
  height: 100vh;
  background-color: ${theme.colors["color-black-100"]};
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #ffffff;
`;

const Top = styled.div`
  border-bottom: 1px solid black;
`;
