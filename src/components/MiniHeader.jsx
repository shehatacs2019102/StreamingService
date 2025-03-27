import styled from "styled-components";
import React from "react";
import search from "../assets/icons-mini-header/search.svg";
import logo from "../assets/logo.png";
import Logo from "../sub-components-general/Logo";
import HeaderPanelButton from "../sub-componenets-header/HeaderPanelButton";

const Container = styled.div`
  display: none;
  height: 0;
  @media (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100vw - 32px);
    height: calc(64px - 24px);
    padding: 12px 16px;
    gap: 10px;
  }
`;

export default function Miniheader() {
  return (
    <Container>
      <Logo src={logo} type="mini" alt="" />
      <HeaderPanelButton src={search} alt="" />
    </Container>
  );
}
