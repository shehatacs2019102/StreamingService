import React from "react";
import styled from "styled-components";
import { useState } from "react";
import logo from "../assets/icons-sidebar/logo.svg";
import logotext from "../assets/icons-responsive-movie-page/name.svg";
import title from "../assets/icons-responsive-movie-page/title.svg";
import star from "../assets/icons-responsive-movie-page/star.svg";
import play from "../assets/icons-responsive-movie-page/play.svg";
import moreinfo from "../assets/icons-responsive-movie-page/moreinfo.svg";
import Logo from "../sub-components-general/Logo.jsx";
import LogoText from "../sub-components-movie-page/LogoText.jsx";
import AppBadge from "../sub-components-movie-page/AppBadge.jsx";
import MovieType from "../sub-components-movie-page/MovieType.jsx";
import MovieTitle from "../sub-components-movie-page/MovieTitle.jsx";
import MovieDetails from "../sub-components-movie-page/MovieDetails.jsx";
import MovieInfo from "../sub-components-movie-page/MovieInfo.jsx";
import MovieCategory from "../sub-components-movie-page/MovieCategory.jsx";
import MovieDescription from "../sub-components-movie-page/MovieDescription.jsx";
import DesktopScreenMovieRating from "../sub-components-movie-page/DesktopScreenRating.jsx";
import SmallScreenMovieRating from "../sub-components-movie-page/SmallScreenMovieRating.jsx";
import MoviePagePanel from "../sub-components-movie-page/MoviePagePanel.jsx";
import MoviePageSwiper from "../swiper-components/MoviePageSwiper.jsx";


const Container = styled.div`
  display: flex;
  font-family: "Plus Jakarta Sans", serif;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
  color: white;
  width: calc(100% - 50px);
  margin-left: 50px;
  /* gap: 32px; */
  @media (max-width: 800px) {
    width: auto;
    height: auto;
    margin-top: 40px;
    gap: 24px;
    margin-left: 16px;
   
    
  }
  @media (max-height: 800px) {
    gap:10px;
  }
`;
const Movietitle = styled.div`
font-size: 40px;
`;

export default function MoviePage(props) {
  const [movtitle, setMovtitle] = useState("joker")
  return (
    <Container>
      <AppBadge>
        <Logo src={logo} alt="" />
        <LogoText src={logotext} alt="" />
        <MovieType>original</MovieType>
      </AppBadge>
      <div>
        {/* <MovieTitle src={title} alt="" /> */}
       <Movietitle> {movtitle} </Movietitle> 
      </div>
      <MovieDetails>
        <MovieInfo>2028</MovieInfo>
        <MovieInfo>82 seasons</MovieInfo>
        <MovieCategory>cartoon</MovieCategory>
        <DesktopScreenMovieRating>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          4.8
        </DesktopScreenMovieRating>
        <SmallScreenMovieRating>
          <img src={star} alt="" />
          4.8
        </SmallScreenMovieRating>
      </MovieDetails>
      <MovieDescription>
        When a small, unsuspecting town becomes the hunting ground for a
        malevolent entity, a group of unlikely heroes must rise — The Demonic
        Slash Group.
      </MovieDescription>
      <MoviePagePanel>
        <img src={play} alt="" />
        <img src={moreinfo} alt="" />
      </MoviePagePanel>
      <MoviePageSwiper setbgImage={props.setbgImage} setMovtitle={setMovtitle} />
    </Container>
  );
}
