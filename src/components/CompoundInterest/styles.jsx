import styled from "styled-components";

// Inputs div
export const InputsDiv = styled.div`
  width: 100%;
  padding: 30px 0 17px 0;
  text-align: center;
  & input {
    width: 110px;
    margin: 3px;
  }
  & label {
    margin-right: 10px;
  }
  & select {
    margin: 1px;
  }
`;

// Grid layout for inputs
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.78fr 1.1fr;
  grid-template-rows: 1fr;
  height: 100px;
  width: 100%;
`;

// Grid Columns
export const GridItem = styled.div`
  padding: 10px;
`;

// Buttons div
export const ButtonDiv = styled.div`
  & button {
    margin: 10px;
  }
  @media (max-width: 775px) {
    margin: 20px;
  }
`;

// Clean button
export const ButtonClean = styled.button`
  background-color: transparent;
  border: none;
  color: #1e7661;
  cursor: pointer;
  &:hover {
    color: #77b4a5;
  }
`;

// Container with result
export const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

// Card for results
export const ResultCard = styled.div`
  flex-grow: 1;
  box-shadow: 0 8px 16px 1px rgba(145, 158, 171, 0.24);
  display: flex;
  justify-content: center;
  width: 180px;
  margin: 10px;
  padding: 15px;
  line-height: 23px;
  border-radius: 8px;
  min-width: 100px;
  height: 80px;
  flex-basis: 200;
  overflow-x: auto;
`;
