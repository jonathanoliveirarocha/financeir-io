import styled from "styled-components";

export const Footer = styled.footer`
  bottom: 0;
  width: 100%;
  line-height: 30px;
  height: 30px;
  position: fixed;
  text-align: center;
  background: #d8eadf;
  & a {
    letter-spacing: 1px;
    text-decoration: none;
    color: black;
    &:hover {
      color: #7b7b7b;
    }
  }
`;
