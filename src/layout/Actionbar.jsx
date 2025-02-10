import React from "react";
import styled from "styled-components";
import home from "../assets/icons-sidebar/home.svg";
import rising from "../assets/icons-sidebar/rising.svg";
import user from "../assets/icons-sidebar/user.svg";
import calendar from "../assets/icons-sidebar/calendar.svg";
import notification from "../assets/icons-sidebar/notification.svg";

const Container = styled.div`
  display: none;
  height: 0;
  @media (max-width: 800px) {
    display: flex;
    position: fixed;
    top: 46vh;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    margin-top: 46vh;
    gap: 30px;
    width: 100vw;
    height: calc(80px - 33px);
    background-color: #000000;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #1E293B;
    padding: 16px 8px;
    box-shadow: 0px 8px 8px -4px #17171708, 0px 20px 24px -4px #17171714;

    

  }
`;

const Icon = styled.img``;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 123px;
  height: 48px;
  width: 48px;
  padding:16px 8px;
  &:hover {
    background:#1E293B;
  }
`;
export default function Actionbar() {
  return (
    <Container>
      <Holder>
        <Icon src={home} />
      </Holder>
      <Holder>
        <Icon src={rising} />
      </Holder>
      <Icon src={user} />
      <Holder>
        <Icon src={calendar} />
      </Holder>
      <Holder>
        <Icon src={notification} />
      </Holder>
    </Container>
  );
}
