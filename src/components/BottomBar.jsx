import React from "react";
import styled from "styled-components";
import home from "../assets/icons-sidebar/home.svg";
import rising from "../assets/icons-sidebar/rising.svg";
import user from "../assets/icons-sidebar/user.svg";
import calendar from "../assets/icons-sidebar/calendar.svg";
import notification from "../assets/icons-sidebar/notification.svg";
import IconHolder from "../sub-componenets-side-action-bar/IconHolder";

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
    border-top-color: #1e293b;
    padding: 8px 8px;
    box-shadow: 0px 8px 8px -4px #17171708, 0px 20px 24px -4px #17171714;
    position: absolute;
    top: calc(100vh - 47px);
  }
`;
export default function BottomBar() {
  return (
    <Container>
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
        <img src={notification} alt="" />
      </IconHolder>
    </Container>
  );
}
