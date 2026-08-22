import React,{useState} from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
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
  gap: 32px;
  @media (max-width:400px) and (max-height:882px) {
    width:auto;
    height:auto;
    row-gap: calc(5px + 2vh);
    margin-top:calc(5px + 2vh );
    margin-left:calc(5px + 3vw );
  }
  @media (max-width:768px) and (min-height:844px) {
    width:auto;
    height:auto;
    row-gap: calc(10px + 3vh);
    margin-top:calc(10px + 6vh);
    margin-left:calc(5px + 3vw);
  }
  @media (max-width:768px) and (min-height:1024px) {
    width:100vw;
    height: auto;
    margin-top:30px;
    gap: 45px;
    margin-left: 23px;
  }
  @media (max-width:1024px) and (min-height:1366px) {
    width:100vw;
    height: auto;
    margin-top:80px;
    gap: 50px;
    margin-left: 53px;
  }
  @media (max-width:1024px) and (min-height:600px) {
    gap:12px;
  }
  @media (max-width:1024px) and (min-height:800px) {
    gap:20px;
  }
`;

function truncateDescription(text, maxLength) {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  return cut.slice(0, cut.lastIndexOf(" ")) + "...";
}

export default function MoviePage(props) {
  const [movieTitle, setMovieTitle] = useState("300");
  const [movieDescription, setMovieTDescription] = useState("based on the 1998 Dark Horse comic book limited series of the same name by Frank Miller and Lynn Varley. The film, like its source material, is a fictionalized retelling of the Battle of Thermopylae in the Greco-Persian Wars. The plot revolves around King Leonidas (Gerard Butler)");
  const [movieRating, setMovieRating] = useState(4.9);
  const [movieDate, setMovieDate] = useState(2008);
  const [movieGenre, setMovieGenre] = useState("action")
  const {setMoviePoster,setMovieTrailer,setModalState}=props;
  const stars = [];
  for (let i = 0; i < Math.floor(movieRating); i++) {
    stars.push(<img key={i} src={star} alt="star" />);
  }
  return (
    <Container>
      <AppBadge>
        <Logo src={logo} alt="" />
        <LogoText>StreamFlow</LogoText>
        <MovieType>original</MovieType>
      </AppBadge>
      <MovieTitle>{movieTitle}</MovieTitle>
      <MovieDetails>
        <MovieInfo>{movieDate}</MovieInfo>
        <MovieInfo>1080p</MovieInfo>
        <MovieCategory>{movieGenre}</MovieCategory>
        <DesktopScreenMovieRating>
          {stars} {/* 2. Simply render the array here */}
        {movieRating}

        </DesktopScreenMovieRating>
        <SmallScreenMovieRating>
          <img src={star} alt="" />
          4.8
        </SmallScreenMovieRating>
      </MovieDetails>
      <MovieDescription>
        {truncateDescription(movieDescription, 180)}
      </MovieDescription>
      <MoviePagePanel>
        <img src={play} onClick={()=>{setModalState(true)}} alt="" />
        <img src={moreinfo} alt="" />
      </MoviePagePanel>
      <MoviePageSwiper setMoviePoster={setMoviePoster} setMovieTitle={setMovieTitle}  setMovieTrailer={setMovieTrailer} setMovieTDescription={setMovieTDescription} setMovieRating={setMovieRating} setMovieDate={setMovieDate} setMovieGenre={setMovieGenre}/>
    </Container>
      );
}
