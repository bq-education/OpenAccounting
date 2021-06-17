import styled from "@emotion/styled";
import theme from "../theme/theme";

export const WhiteButton = styled.button<{ margin?: string }>`
  background-color: white;
  color: ${theme.colors["color-black-100"]};
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid black;
  outline: none;
  height: 25px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  flex-basis: auto;
  cursor: pointer;
  margin: ${(props) => props.margin || "0 5px 0 5px"};
`;

export const RedButton = styled.button<{ margin?: string }>`
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid black;
  outline: none;
  height: 25px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  flex-basis: auto;
  cursor: pointer;
  margin: ${(props) => props.margin || "0 5px 0 5px"};
`;

export const BlackButton = styled.button<{ margin?: string }>`
  background-color: ${theme.colors["color-black-100"]};
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: 1px solid black;
  outline: none;
  height: 25px;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  margin: ${(props) => props.margin || "0 5px 0 5px"};
`;

export const Input = styled.input<{ width?: string; height?: string }>`
  background-color: white;
  border: 0px;
  height: 25px;
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "25px"};
`;

export const Cell = styled.input<{
  width?: string;
  height?: string;
  inheritCursor?: boolean;
}>`
  background-color: white;
  margin: 0;
  padding: 0 5px 0 5px;
  border: 0px;
  height: 25px;
  font-size: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  width: ${(props) => props.width || "500px"};
  height: ${(props) => props.height || "25px"};
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  cursor: ${(props) => (props.inheritCursor ? "inherit" : "auto")};
`;

export const SelectInput = styled.select<{
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  maxwidth?: string;
}>`
  background-color: white;
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxwidth || "100%"};
  height: ${(props) => props.height || "25px"};
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};
  border: 0px;
  font-size: 1rem;
  font-family: Roboto;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  border: 1px ${theme.colors["color-black-100"]} solid;
`;

export const Row = styled.div`
  padding: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
`;

export const Column = styled.div<{ width: string; justifycontent?: string }>`
  width: ${(props) => props.width};
  padding: 0 10px 0 10px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifycontent || "flex-start"}; ;
`;

export const HeaderRow = styled.div`
  padding: 5px 0px 5px 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: nowrap;
  //font-weight: bold;
  background-color: ${theme.colors["color-black-80"]};
  color: white;
`;

export const Action = styled.span`
  img,
  svg {
    fill: ${theme.colors["color-black-80"]};
    margin: auto;
    margin-left: 5px;
    margin-right: 5px;
    height: 20px;
    min-height: 20px;
    min-width: 20px;
    width: 20px;
    cursor: pointer;
  }
  svg:hover {
    fill: ${theme.colors["color-red-80"]};
  }
`;
