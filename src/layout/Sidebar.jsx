import React from "react";
import styled from "styled-components";
import logo from "../assets/icons-sidebar/logo.svg";
import home from "../assets/icons-sidebar/home.svg";
import rising from "../assets/icons-sidebar/rising.svg";
import user from "../assets/icons-sidebar/user.svg";
import calendar from "../assets/icons-sidebar/calendar.svg";
import notification from "../assets/icons-sidebar/notification.svg";
import bolt from "../assets/icons-sidebar/bolt.svg";
import settings from "../assets/icons-sidebar/settings.svg";

const Container = styled.div`
  height: calc(100vh - 20px);
  width: 80px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  flex-flow: column wrap;
  background-color: #1e293b;
  padding: 10px 0px;
  @media (max-width: 800px) {
    display:none;
    height:0;
    };`
const Wrapper = styled.div`

`;
const TopHolder = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 12px;
`;
const Icon = styled.img``;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 123px;
  height: 48px;
  width: 48px;
  &:hover {
    background-color: #334155;
  }
`;
export default function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <TopHolder>
          <Logo src={logo} />
        </TopHolder>

        <Holder>
          <Icon src={home} />
        </Holder>
        <Holder>
          <Icon src={rising} />
        </Holder>
        <Holder>
          <Icon src={user} />
        </Holder>
        <Holder>
          <Icon src={calendar} />
        </Holder>
        <Holder>
          <Icon src={bolt} />
        </Holder>
        <Holder>
          <Icon src={notification} />
        </Holder>
      </Wrapper>
      <Holder>
        <Icon src={settings} />
      </Holder>
    </Container>
  );
}
