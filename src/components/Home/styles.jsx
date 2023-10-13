import styled from "styled-components";

// Div containing CTA
export const Cta = styled.div`
  color: #cbcbcd;
  box-shadow: 5px 5px 10px 3px #e9e9eb;
  background-color: #ffffffce;
  height: 60%;
  left: 0;
  border-radius: 20px;
  width: 60%;
  position: fixed;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  @media (max-width: 1048px) {
    & {
      width: 94%;
      margin-left: 3%;
    }
  }
`;

export const Control = styled.div`
  width: 60%;
  height: 30%;
  margin: 0 auto;
  @media (max-width: 1048px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      height: 60%;
      width: 94%;
    }
  }
`;

// CTA message
export const H1 = styled.h1`
  font-size: 45px;
  font-family: Arial, Helvetica, sans-serif;
  color: #171b19;
  width: 100%;
  margin-bottom: 10px;
`;

// Application Logo
export const LogoSpan = styled.span`
  background: linear-gradient(to bottom right, #d8eadf, #1e7661);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Button to start navigation
export const Button = styled.button`
  background-color: #19716c;
  color: #cfe3db;
  border: none;
  border: solid 1px #1e7661;
  padding: 10px 40px;
  border-radius: 20px;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: #19716c;
    background-color: transparent;
  }
`;

// Animated image
export const Img = styled.img`
  opacity: 90%;
  width: 20%;
  position: fixed;
  right: 10%;
  margin-bottom: 90px;
  @keyframes rotate {
    0% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(2deg);
    }
  }
  animation: rotate 1100ms alternate-reverse infinite;
  @media (max-width: 1048px) {
    & {
      display: none;
    }
  }
`;
