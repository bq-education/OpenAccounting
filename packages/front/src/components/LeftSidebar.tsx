import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../logo.svg";
import theme from "../style/theme/theme";

type Application = {
  name: string;
  menu: string[];
};

const LeftSidebar: FC<{
  applications: Array<Application>;
  chosenItem: string;
  chosenApplication: string;
  setChosenItem: (it: string) => void;
  setChosenApplication: (ap: string) => void;
}> = ({
  applications,
  chosenApplication,
  chosenItem,
  setChosenApplication,
  setChosenItem,
}) => {
  return (
    <React.Fragment>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      {applications.map((application) => (
        <React.Fragment>
          <Spacer />
          <Application>{application.name}</Application>
          {application.menu.map((item) => (
            <Item
              selected={
                chosenApplication === application.name && chosenItem === item
              }
              onClick={() => {
                setChosenApplication(application.name);
                setChosenItem(item);
              }}
            >
              {item}
            </Item>
          ))}
        </React.Fragment>
      ))}
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

const Application = styled.div`
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
`;

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

export default LeftSidebar;
