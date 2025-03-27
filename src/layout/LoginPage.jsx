import React from "react";
import styled from "styled-components";
import Gmail from "../assets/icons-login-page/gmail.svg";
import Facebook from "../assets/icons-login-page/facebook.svg";
import Github from "../assets/icons-login-page/github.svg";
import LoginBackground from "../sub-components-login-page/LoginBackground";
import WelcomeText from "../sub-components-login-page/WelcomeText";
import CustomWelcomeText from "../sub-components-login-page/CustomWelcomeText";
import LoginButton from "../sub-components-login-page/LoginButton";
import LeftDiv from "../sub-components-login-page/LeftDiv"
import RightDiv from "../sub-components-login-page/RightDiv"
import ORDiv from "../sub-components-login-page/ORDiv";
import LoginForm from "../sub-components-login-page/LoginForm";
import TextInput from "../sub-components-login-page/TextInput";
import FormText from "../sub-components-login-page/FormText";

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
          <a style={{ textDecoration: "none", color: "white" }} href="url">
            Forgot password ?
          </a>
        </LoginForm>
        <ORDiv>or</ORDiv>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            gap: "18px",
            marginTop: "10px",
          }}
        >
          <img src={Gmail} alt="" />
          <img src={Facebook} alt="" />
          <img src={Github} alt="" />
        </div>
      </RightDiv>
    </Container>
  );
}
