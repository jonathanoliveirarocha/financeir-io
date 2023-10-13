import styled from "styled-components";

// General application elements

// Div with the content of all pages
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

// Standard input
export const Input = styled.input`
  padding: 5px;
  width: 70%;
  min-width: 50px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

// Standard button
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

// Standard select
export const Select = styled.select`
  padding: 5px 1px;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
  width: 80px;
  margin: 0px 10px;
`;

// Card with features
export const Card = styled.div`
  margin-bottom: 120px;
  text-align: center;
  width: 80%;
  max-width: 700px;
  min-width: 395px;
  height: 500px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px 3px #e9ebea;
  background-color: #ffffffce;
`;
