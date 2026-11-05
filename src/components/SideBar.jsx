import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Logo from "../sub-components-general/Logo.jsx";
import LogoHolder from "../sub-componenets-side-action-bar/LogoHolder.jsx";
import NavButton from "../sub-componenets-side-action-bar/NavButton.jsx";
import {
  homeItem,
  trendingItem,
  profileItem,
  browseItem,
  listItem,
  notificationsItem,
  settingsItem,
} from "./navItems";

const Container = styled.div`
  height: 100vh;
  width: 80px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  background-color: #1a0b0d;
  padding: 12px 0px;
  box-sizing: border-box;
  z-index: 120;
  @media (max-width: 750px) {
    display: none;
    height: 0;
  }
`;

const TopGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: clamp(4px, 1.2vh, 10px);
`;

export default function SideBar({ view, setView, hasUnread }) {
  const nav = { view, setView };
  return (
    <Container>
      <TopGroup>
        <LogoHolder>
          <Logo src={logo} alt="" />
        </LogoHolder>
        <NavButton item={homeItem} {...nav} />
        <NavButton item={trendingItem} {...nav} />
        <NavButton item={profileItem} {...nav} />
        <NavButton item={browseItem} {...nav} />
        <NavButton item={listItem} {...nav} />
        <NavButton item={notificationsItem} dot={hasUnread} {...nav} />
      </TopGroup>
      <NavButton item={settingsItem} {...nav} />
    </Container>
  );
}
