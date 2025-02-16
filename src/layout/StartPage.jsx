import React from "react";
import styled from "styled-components";
import Background from "../assets/startpage-assets/Background2.jpg";
import logo from "../assets/startpage-assets/Netflix_2015_logo.svg";
import TrendingSwiper from "../components/TrendingSwiper";
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-flow: column nowrap; 
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", serif;
  overflow-x: hidden;
  overflow-y:visible;
`;
const Section1 = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;

    /* display: block; */
    background-image: url(${Background});
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
  }
`;
const Section1Content = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-top: 20vh;
`;
const Section2 = styled.div`
  position: relative;
  color:white;
  background:radial-gradient(
                    50% 500% at 50% -420%,
                    rgba(64, 97, 231, 0.4) 80%,
                    rgba(0, 0, 0, 0.1) 100%
                ),black;
  display:flex;
  align-items:center;
  width:200%;
  height:146.7px;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  margin-top: 100px;
  &::before {
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin-top:-5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background:linear-gradient(
                    to right,
                    rgba(33, 13, 22, 1) 16%,
                    rgba(184, 40, 105, 1),
                    rgba(229, 9, 20, 1),
                    rgba(184, 40, 105, 1),
                    rgba(33, 13, 22, 1) 84%
                );           
  }
`;
const GetStartedButton = styled.button`
  width: 160px;
  height: 45px;
  background: linear-gradient(to right, #628eff, #8740cd 53%, #580475);
  border-style: none;
  color: white;
  padding: 10px 14px;
  font-size: 22px;
  font-weight: 600;
  border-radius: 1px;
`;
const Logo = styled.img`
  width: 148px;
  height: 40px;
`;
const Topbar = styled.div`
  display: flex;
  width: 80%;
  /* flex-flow: row wrap; */
  justify-content: space-between;

  height: 5.5rem;
  padding-top: 30px;
`;

const Section3=styled.div`
background:black;
display:flex;
width:100%;
height:100%;
justify-content: flex-start;
align-items: center;
flex-flow: column wrap;
color:white;

`;
const Card = styled.div`
display: flex;
flex-flow: column wrap;
align-items: center;
width:190px;
height:280px;
padding: 10px 20px;
border-radius: 1rem;
background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);

`;
const Info = styled.p`
display: flex;

font-size: 16px;

`;
export default function StartPage(props) {
  const { handlelogin } = props;
  const handleClick = (id) => {
    handlelogin(id);
  };
  return (
    <Container>
      <Section1>
        <Topbar>
          <Logo src={logo} alt="" />
          <Logo src={logo} alt="" />
        </Topbar>
        <Section1Content>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              maxWidth: "500px",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            Unlimited movies, TV shows, and more
          </h1>
          <h2 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>
            Starts at 15 USD. Cancel anytime.
          </h2>
          <h3 style={{ fontSize: "1rem" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </Section1Content>
        <GetStartedButton
          id="login"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
        >
          Get started
        </GetStartedButton>
      </Section1>
      <Section2>
      </Section2>
      <Section3>

        <h2 style={{marginRight:"62%"}}>Trending Now</h2>
        <TrendingSwiper/>
        <h2 style={{marginRight:"55%"}}>More Reasons to Join</h2>
        <div style={{display:'flex', gap:'16px'}}>
             <Card>
              <h2>Enjoy on your TV</h2>
              <Info>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Info>
             </Card>
             <Card>
              <h2> watch offline</h2>
              <Info>Save your favorites easily and always have something to watch.</Info>

             </Card>
             <Card>
              <h2>Watch Everywhere</h2>
              <Info>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Info>

              

             </Card>
             <Card>
              <h2>profiles for kids</h2>
              <Info>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</Info>

             
             </Card>
            
        </div>
      </Section3>
    </Container>
  );
}
