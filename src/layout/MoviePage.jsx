import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/icons-mini-header/logo.svg";
import Name from "../assets/name.svg";
import MiniLogo from "../assets/icons-responsive-movie-page/logo.svg";
import MiniName from "../assets/icons-responsive-movie-page/name.svg";
import Title from "../assets/title.svg";
import Star from "../assets/star.svg";
import play from "../assets/play.svg";
import moreinfo from "../assets/moreinfo.svg";
import MovieSwiper from "../components/MovieSwiper";

const Container = styled.div`
  display: flex;
  font-family: "Plus Jakarta Sans", serif;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
  color: white;
  width: calc(100% - 50px);
  margin-left: 50px;
  gap: 32px;
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    margin-top: 100px;
    gap: 24px;
    margin-left: 16px;
  }
`;
const MovieInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 28px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 800px) {
    width: 343px;
    gap: 16px;
  }
`;
const Appbadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  @media (max-width: 800px) {
    width: 148.75px;
    height: 26px;
    gap: 4px;
  }
`;

const Movietitle = styled.img`
  @media (max-width: 800px) {
    width: 252.5px;
    height: 40px;
  }
`;
const Moviedata = styled.div`
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.6%;
    text-align: center;
  }
`;
const Moviecategory = styled(Moviedata)`
  border-style: solid;
  border-width: 1px;
  border-color: #cbd5e1;
  border-radius: 1234px;
  padding: 6px 12px;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.5%;
    text-align: center;
  }
`;
const BigscreenRating = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    display: none;
    height: 0;
  }
`;
const SmallscreenRating = styled.div`
  display: none;
  height: 0;
  align-items: center;
  flex-direction: row;
  gap: 3px;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    display: flex;
    height: auto;
  }
`;
const Moviedescription = styled.div`
  width: 520px;
  height: 87px;
  display: flex;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    width: 343px;
    height: 104px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25.6px;
    letter-spacing: 0%;
  }
`;
const LogoImage = styled.img`
  @media (max-width: 800px) {
    width: 24px;
    height: 24px;
    gap: 3.75px;
  }
`;
const LogoImage2 = styled.img`
  @media (max-width: 800px) {
    width: 51.75px;
    height: 12.75px;
  }
`;
const MovieType = styled.div`
  width: 83px;
  height: 32px;
  font-family: "Plus Jakarta Sans", serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffffcc;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
    width: 63px;
    height: 26px;
    gap: 10px;
    padding-bottom: 2px;
  }
`;
export default function MoviePage() {
  return (
    <Container>
      {window.screen.width > 800 ? (
        <Appbadge>
          <LogoImage src={Logo} alt="" />
          <LogoImage2 src={Name} alt="" />
          <MovieType>original</MovieType>
        </Appbadge>
      ) : (
        <Appbadge>
          <LogoImage src={MiniLogo} alt="" />
          <LogoImage2 src={MiniName} alt="" />
          <MovieType>original</MovieType>
        </Appbadge>
      )}
      <div>
        <Movietitle src={Title} alt="" />
      </div>
      <MovieInfo>
        <Moviedata>2028</Moviedata>
        <Moviedata>82 seasons</Moviedata>
        <Moviecategory>cartoon</Moviecategory>
        <BigscreenRating>
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          <img src={Star} alt="" />
          4.8
        </BigscreenRating>
        <SmallscreenRating>
          <img src={Star} alt="" />
          4.8
        </SmallscreenRating>
      </MovieInfo>
      <Moviedescription>
        When a small, unsuspecting town becomes the hunting ground for a
        malevolent entity, a group of unlikely heroes must rise — The Demonic
        Slash Group.
      </Moviedescription>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexFlow: "row wrap",
        }}
      >
        <img src={play} alt="" />
        <img src={moreinfo} alt="" />
      </div>
      <MovieSwiper />
    </Container>
  );
}
