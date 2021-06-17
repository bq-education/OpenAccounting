import React, { FC } from "react";
import styled from "@emotion/styled";
import MonthYearMenu from "./MonthYearMenu";
import theme from "../style/theme/theme";
import MonthlyIncomeComponent from "./MonthlyIncomeComponent";

const RightComponent: FC<{
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
  month: number;
  year: number;
  app: string;
  item: string;
}> = ({ month, year, setMonth, setYear, app, item }) => {
  return (
    <Div>
      <Top>
        <H1>{item}</H1>
        <MonthYearMenu
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
      </Top>
      <Main>
        {app === "Contabilidad" && item === "Ingresos" && (
          <MonthlyIncomeComponent month={month} year={year} />
        )}
      </Main>
    </Div>
  );
};

const Top = styled.div`
  padding: 20px 70px 20px 30px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const H1 = styled.h1`
  padding: 0;
  margin: 0;
`;

const Main = styled.div`
  padding: 20px 70px 20px 30px;
  width: 100%;
  box-sizing: border-box;
`;

const Div = styled.div`
  width: 100%;
`;

export default RightComponent;
