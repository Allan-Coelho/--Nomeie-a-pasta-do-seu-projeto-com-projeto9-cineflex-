import styled from "styled-components";

export default function HeaderLogo() {
  return <Logo>CINEFLEX</Logo>;
}

const Logo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  font-weight: 400;
  color: #e8833a;
  background-color: #c3cfd9;
`;
