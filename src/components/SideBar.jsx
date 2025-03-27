import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import home from "../assets/icons-sidebar/home.svg";
import rising from "../assets/icons-sidebar/rising.svg";
import user from "../assets/icons-sidebar/user.svg";
import calendar from "../assets/icons-sidebar/calendar.svg";
import notification from "../assets/icons-sidebar/notification.svg";
import bolt from "../assets/icons-sidebar/bolt.svg";
import settings from "../assets/icons-sidebar/settings.svg";
import Logo from "../sub-components-general/Logo.jsx";
import LogoHolder from "../sub-componenets-side-action-bar/LogoHolder.jsx";
import IconHolder from "../sub-componenets-side-action-bar/IconHolder.jsx";

const Container = styled.div`
  height: calc(100vh - 20px);
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column wrap;
  background-color: #1e293b;
  padding: 10px 0px;
  z-index: 120;
  @media (max-width: 750px) {
    display: none;
    height: 0;
  }
`;

export default function SideBar() {
  return (
    <Container>
      <div style={{ display: "flex", flexFlow: "column wrap", gap: "10px" }}>
        <LogoHolder>
          <Logo src={logo} alt="" />
        </LogoHolder>
        <IconHolder>
          <img src={home} alt="" />
        </IconHolder>
        <IconHolder>
          <img src={rising} alt="" />
        </IconHolder>
        <IconHolder>
          <img src={user} alt="" />
        </IconHolder>
        <IconHolder>
          <img src={calendar} alt="" />
        </IconHolder>
        <IconHolder>
          <img src={bolt} alt="" />
        </IconHolder>
        <IconHolder>
          <img src={notification} alt="" />
        </IconHolder>
      </div>
      <IconHolder>
        <img src={settings} alt="" />
      </IconHolder>
    </Container>
  );
}
