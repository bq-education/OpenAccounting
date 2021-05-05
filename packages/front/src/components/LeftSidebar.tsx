import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../logo.svg";
import theme from "../style/theme/theme";
import Applications from "./Applications";
import ApplicationMenu from "./ApplicationMenu";

const applications = [
  {
    name: "Contabilidad",
    menu: ["Ingresos", "Gastos", "Personal Externo"],
  },
  {
    name: "Ingresos",
    menu: ["Fact. Emitidas", "Fact. Recibidas", "Clientes", "Productos"],
  },
];

const LeftSidebar: FC = () => {
  const [application, setApplication] = useState<string>(applications[0].name);
  return (
    <React.Fragment>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Spacer />
      <Applications
        list={applications.map((app) => app.name)}
        setApplication={setApplication}
      />
      <Spacer />
      <ApplicationMenu
        items={
          applications[applications.map((app) => app.name).indexOf(application)]
            .menu
        }
      />
    </React.Fragment>
  );
};

const LogoContainer = styled.div`
  width: 140px;
  height: 40px;
  background-color: ${theme.colors["color-black-100"]};
  padding: 20px 70px 20px 30px;
  margin: 0;
  & > svg {
    width: 140px;
    height: 40px;
    object-fit: contain;
    margin: 0;
    display: block;
    margin: auto;
  }
`;

const Spacer = styled.div`
  width: 240px;
  height: 1px;
  margin: 0 0 10px 0;
  background-color: ${theme.colors["color-black-80"]};
`;

export default LeftSidebar;
