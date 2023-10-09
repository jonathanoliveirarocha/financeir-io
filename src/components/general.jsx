import styled from "styled-components";

export const Input = styled.input`
  padding: 5px;
  width: 100px;
  border: solid 1px grey;
  border-radius: 5px;
`;

export const Card = styled.div`
  margin-bottom: 120px;
  text-align: center;
  width: 80%;
  max-width: 700px;
  height: 500px;
  border-radius: 8px;
  border: solid 1px grey;
`;

export const MiniCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 30%;
  height: 60px;
  border: solid 1px grey;
`;

export const MoneyView = styled.div`
  padding: 5px;
  background-color: #f3f3f3;
  justify-content: space-between;
  height: 61%;
  border-radius: 8px;
  border: solid 1px grey;
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
  margin-left: 7px;
  display: flex;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 6px;
  justify-content: space-between;
`;

export const DivSpaceB = styled.div`
  align-items: center;
  border-radius: 8px;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  padding: 5px;
  color: #23cf5c;
  border: solid 1px #23cf5c;
  border-radius: 5px;
  background-color: initial;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: white;
    background-color: #23cf5c;
  }
`;

export const Select = styled.select`
  padding: 5px;
  width: fit-content;
  border: solid 1px grey;
  border-radius: 5px;
  cursor: pointer;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
