import styled from "styled-components";
import React from "react";
import search from "../assets/icons-mini-header/search.svg";
import logo from "../assets/icons-mini-header/logo.svg";

const Container = styled.div`
  display: none;
  height: 0;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 32px);
    height: calc(64px - 24px);
    padding: 12px 16px;
    gap: 10px;
  }
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;  
const Button = styled.img`
  background: rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;
export default function Miniheader() {
  return (
    <Container>
      <Logo src={logo} />
      <Button src={search} alt="" />
    </Container>
  );
}
