import React from "react";
import styled from "styled-components";
import LoginBackground from "../sub-components-login-page/loginbackground";
import WelcomeText from "../sub-components-login-page/WelcomeText";
import CustomWelcomeText from "../sub-components-login-page/CustomWelcomeText";
import LoginButton from "../sub-components-login-page/LoginButton";
import LeftDiv from "../sub-components-login-page/LeftDiv"
import RightDiv from "../sub-components-login-page/RightDiv"
import LoginForm from "../sub-components-login-page/LoginForm";
import TextInput from "../sub-components-login-page/TextInput";
import FormText from "../sub-components-login-page/FormText";

const DemoNotice = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: #aaaaaa;
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  text-align: center;
  align-self: center;
  margin: 24px 0 0;
`;

const Container = styled.div`
  display: flex;
  color: white;
  flex-flow: row nowrap;
  align-items: center;
  align-self: center;
  font-family: "Plus Jakarta Sans", serif;
  justify-content: center;
  gap: 200px;
  width: 100%;
  height: 100vh;
  @media (min-width:820px) and (max-width:1500px) {
   gap:40px;
  }
`;

export default function LoginPage(props) {
  const { handlelogin } = props;
  const handlesubmit = (e) => {
    e.preventDefault();
    handlelogin(e.target.id);
  };

  return (
    <Container>
      <LoginBackground />
      <LeftDiv>
        <WelcomeText>Welcome Back .!</WelcomeText>
        <CustomWelcomeText>Skip the Lag ?</CustomWelcomeText>
      </LeftDiv>
      <RightDiv>
        <FormText type="Login">Login</FormText>
        <FormText>
          Glad to see you back.!
        </FormText>
        <LoginForm
          action=""
          id="dashboard"
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <TextInput type="text" placeholder="username" />
          <TextInput type="password" placeholder="password" />
          <div
            style={{
              display: "flex",
              flexFlow: "row wrap",
              alignSelf: "flex-start",
            }}
          >
            <input type="checkbox" />
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <LoginButton type="submit">login</LoginButton>
        </LoginForm>
        <DemoNotice>
          This is a portfolio demo UI only. There is no real account system —
          nothing you type here is stored, transmitted, or checked against
          any account.
        </DemoNotice>
      </RightDiv>
    </Container>
  );
}
