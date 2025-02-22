import React from "react";
import styled from "styled-components";
import Gmail from "../assets/icons-login-page/gmail.svg";
import Facebook from "../assets/icons-login-page/facebook.svg";
import Github from "../assets/icons-login-page/github.svg";
import BLADERUNNER from "../movie-posters/BLADELOGIN.jpeg";

const Container = styled.div`
  display: flex;
  color: white;
  flex-flow: row nowrap;
  align-items: center;
  align-self: center;
  font-family: "Plus Jakarta Sans", serif;

  justify-self: "center";
  justify-content: center;
  gap: 200px;
  width: 100%;
  height: 100vh;
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;

    display: block;
    background-image: url(${BLADERUNNER});
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
  }
`;
const WelcomeText = styled.h1`
  font-family: "Plus Jakarta Sans", serif;
  font-size: 72px;
  margin: 0px;
  display: flex;
`;
const WelcomeText2 = styled(WelcomeText)`
  justify-self: flex-start;
  font-size: 32px;
  font-style: italic;
  margin: 0 0 0 20px;
  border-width: 2px;
  padding: 10px 24px;
  border-color: white;
  border-style: solid;
  width: fit-content;
`;
const LoginButton = styled.button`
  width: 100%;
  background: linear-gradient(to right, #628eff, #8740cd 53%, #580475);
  border-style: none;
  color: white;
  padding: 10px 14px;
`;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 10px;
  @media (max-width: 800px) {

    display: none;
    height: 0px;
  }
`;
const LoginForm = styled.form`
  display: flex;
  justify-content: center;

  z-index: 6;
  align-items: center;
  gap: 25px;
  flex-flow: column wrap;
`;
const Holder2 = styled(Holder)`
  align-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  gap: 5px;
  height: 450px;
  width: 300px;
  position: relative;
  @media (max-width: 800px) {
    height: 640px;
    width: 300px;
    display:flex;
    
    }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 1px solid transparent;
    background: linear-gradient(120deg, #ffffff, rgba(0, 0, 0, 0)) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
   
  }
`;
const OR = styled.div`
  /* margin-top: 5px; */
  display: flex;
  justify-content: center;
  position: relative;
  justify-self: center;
  &::before {
    position: absolute;
    left: 70%;
    top: 50%;
    content: "";
    background-color: #ffffff;
    width: 90px;
    height: 0.5px;
  }
  &::after {
    position: absolute;
    content: "";
    right: 70%;
    top: 50%;
    background-color: #ffffff;
    width: 90px;
    height: 0.5px;
  }
`;
const LoginText = styled.h3`
  margin: 0px;
  @media (max-width:800px) {

    padding-bottom: 15px;
    
  }
`;
const TextInputs = styled.input`
  padding: 8px 7px;
  color: white;
  background: none;
  border-color: white;
  border-style: solid;
  border-width: 0.1px;
  border-radius: 5px;
  &::placeholder {
    color: white;
  }
  outline: none;
`;

export default function LoginPage(props) {
  const { handlelogin } = props;
  const handlesubmit = (e) => {
    e.preventDefault();
    handlelogin(e.target.id);
  };

  return (
    <Container>
      <Holder>
        <WelcomeText>Welcome Back .!</WelcomeText>
        <WelcomeText2>Skip the Lag ?</WelcomeText2>
      </Holder>

      <Holder2>
        <LoginText style={{ fontSize: "36px" }}>Login</LoginText>
        <LoginText style={{ fontSize: "16px" }}>
          Glad to see you back.!
        </LoginText>
        <LoginForm
          action=""
          id="dashboard"
          onSubmit={(e) => {
            handlesubmit(e);
          }}
        >
          <TextInputs type="text" placeholder="username" />
          <TextInputs type="password" placeholder="password" />
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
        <OR>or</OR>
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
      </Holder2>
    </Container>
  );
}
