import React from "react";
import styled from "styled-components";
import MovieSwiper from "../components/MovieSwiper"
import Background from "../assets/startpage-assets/Background2.jpg";
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-family: "Plus Jakarta Sans", serif;
  overflow: visible;
 
  
`;
const Section1 = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
 margin-top: 20vh;
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
  background-size: contain;
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
`;
const Section2 = styled.div`
 margin-top: 200px;
`;
const GetStartedButton = styled.button`
  width: 160px;
  height: 45px;
  background: linear-gradient(to right, #628eff, #8740cd 53%, #580475);
  border-style: none;
  color: white;
  padding: 10px 14px;
  font-size:22px;
  font-weight: 600;
  border-radius: 1px;
  
  
`;
export default function StartPage() {
  return (
    <Container>
      <Section1>
        <Section1Content>
        <h1
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              maxWidth: "500px",
              textAlign: "center",
              marginBottom:'8px'
            }}
          >
            Unlimited movies, TV shows, and more
          </h1>
          <h2 style={{ fontSize: "1.2rem",
            marginBottom:'8px'
                        }}>
            Starts at 15 USD. Cancel anytime.
          </h2>
          <h3 style={{ fontSize: "1rem" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </Section1Content>    
          
          <GetStartedButton>Get started</GetStartedButton>
      
      </Section1>
      <Section2>
        <MovieSwiper/>
      </Section2>
    </Container>
  );
}
