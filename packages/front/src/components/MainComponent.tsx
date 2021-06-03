import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import LeftSidebar from "./LeftSidebar";

import theme from "../style/theme/theme";
import RightComponent from "./RightComponent";

type Application = {
  name: string;
  menu: string[];
};

const applications: Application[] = [
  {
    name: "Contabilidad",
    menu: ["Ingresos", "Gastos", "Personal Externo"],
  },
  {
    name: "Dedicaciones",
    menu: ["Introducir", "Consultar"],
  },
];

const MainComponent: FC = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [chosenApplication, setChosenApplication] = useState<string>(
    applications[0].name
  );
  const [chosenItem, setChosenItem] = useState<string>(applications[0].menu[0]);
  const leftSidebarPros = {
    applications,
    chosenItem,
    chosenApplication,
    setChosenItem,
    setChosenApplication,
  };
  return (
    <React.Fragment>
      <Div>
        <Left>
          <LeftSidebar {...leftSidebarPros} />
        </Left>
        <RightComponent
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          app={chosenApplication}
          item={chosenItem}
        />
      </Div>
    </React.Fragment>
  );
};

export default MainComponent;

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
