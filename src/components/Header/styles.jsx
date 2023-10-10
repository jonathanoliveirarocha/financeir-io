import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background: #1e7661;
  display: flex;
  align-items: center;
  box-shadow: 5px 5px 10px -1px #b0b3b2;
`;
export const Logo = styled.h1`
  font-size: larger;
  color: #fff;
  padding: 10px;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Link = styled.a`
  color: #ebebeb;
  float: right;
  padding: 8px 16px;
  text-decoration: none;
  &:hover {
    color: #c4c4c4;
  }
`;

export const Nav = styled.nav`
  padding: 8px 16px;
  width: 100%;
  border: none;
`;
