import styled from "styled-components";

export const CurrencyContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const inputsDiv = styled.div`
  line-height: 170px;
  height: 30%;
  width: 100%;
  & select {
    margin: 10px;
  }
  & input {
    width: 30%;
  }
`;

export const CurrencyCardContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 30%;
  flex-wrap: wrap;
`;

export const coinContent = styled.div`
  flex-grow: 1;
  box-shadow: 0 8px 16px 1px rgba(145, 158, 171, 0.24);
  display: flex;
  justify-content: center;
  width: 180px;
  margin: 10px;
  border-radius: 8px;
  min-width: 100px;
  height: 80px;
  flex-basis: 200;
  overflow-x: auto;
  padding: 15px;
`;
