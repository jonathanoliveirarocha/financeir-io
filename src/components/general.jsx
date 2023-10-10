import styled from "styled-components";

export const Input = styled.input`
  padding: 5px;
  width: 100px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  background-color: #1e7661;
  border: solid 1px #1e7661;
  border-radius: 3px;
  color: #cfe3db;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: #1e7661;
    background-color: transparent;
  }
`;

export const Select = styled.select`
  padding: 5px;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

export const Main = styled.div`
  background-image: linear-gradient(to bottom, #d8eadf, #fff, #fff);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Card = styled.div`
  margin-bottom: 120px;
  text-align: center;
  width: 80%;
  max-width: 700px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 3px #e9ebea;
  background-color: #ffffffce;
`;
