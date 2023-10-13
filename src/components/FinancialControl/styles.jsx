import styled from "styled-components";

// Div with distance between elements
export const DivSpaceB = styled.div`
  border-radius: 8px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  display: flex;
  @media (max-width: 858px) {
    & button {
      margin-top: 18px;
      height: 28px;
    }
  }
`;

// Result Cards
export const MiniCard = styled.div`
  display: flex;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 30%;
  height: 60px;
  border: 1px solid #ccc;
  font-size: large;
  @media (max-width: 528px) {
    & p {
      font-size: 16px;
    }
  }
`;

// Operation history
export const MoneyView = styled.div`
  padding: 5px;
  justify-content: space-between;
  height: 65%;
  border-radius: 8px;
  margin: 5px;
  overflow-y: scroll;
  margin-top: 25px;
`;

// Elements in history
export const ElementMoneyView = styled.div`
  background-color: white;
  margin-left: 5px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 6px;
  justify-content: space-between;
  box-shadow: 0px 0px 9px 0px #e9ebea;
`;

// Div with adjustment between history elements
export const ElementMoneyCenter = styled.div`
  display: flex;
  justify-content: right;
  width: 30%;
`;

// Colors if positive or negative
export const In = styled.span`
  color: #23cf5c;
  font-size: small;
`;

export const Out = styled.span`
  color: #cf2e23;
  font-size: small;
`;
