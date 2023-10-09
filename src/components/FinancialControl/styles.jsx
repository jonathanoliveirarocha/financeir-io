import styled from "styled-components";

export const MiniCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 30%;
  height: 60px;
  border: solid 1px grey;
  font-size: large;
`;

export const MoneyView = styled.div`
  padding: 5px;
  justify-content: space-between;
  height: 61%;
  border-radius: 8px;
  box-shadow: inset 0px 0px 15px 3px #e9ebea;
  margin: 5px;
  overflow-y: scroll;
  margin-top: 25px;
`;

export const In = styled.span`
  color: #23cf5c;
  font-size: small;
`;

export const Out = styled.span`
  color: #cf2e23;
  font-size: small;
`;

export const ElementMoneyView = styled.div`
  background-color: white;
  margin-left: 5px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 6px;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 3px #e9ebea;
`;

export const DivSpaceB = styled.div`
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  display: flex;
`;