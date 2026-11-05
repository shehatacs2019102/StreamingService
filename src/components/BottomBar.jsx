import React from "react";
import styled from "styled-components";
import NavButton from "../sub-componenets-side-action-bar/NavButton";
import {
  homeItem,
  trendingItem,
  profileItem,
  browseItem,
  notificationsItem,
} from "./navItems";

const Container = styled.div`
  display: none;
  height: 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 110;
    gap: 30px;
    width: calc(100vw - 16px);
    height: 30px;
    background-color: #000000;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #1a0b0d;
    padding: 8px 8px;
    box-shadow: 0px 8px 8px -4px #17171708, 0px 20px 24px -4px #17171714;
    position: fixed;
    left: 0;
    bottom: 0;
  }
`;
export default function BottomBar({ view, setView, hasUnread }) {
  const nav = { view, setView };
  return (
    <Container>
      <NavButton item={homeItem} {...nav} />
      <NavButton item={trendingItem} {...nav} />
      <NavButton item={profileItem} {...nav} />
      <NavButton item={browseItem} {...nav} />
      <NavButton item={notificationsItem} dot={hasUnread} {...nav} />
    </Container>
  );
}
