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
import MyListButton from "../sub-components-movie-page/MyListButton.jsx";
import MoviePageSwiper from "../swiper-components/MoviePageSwiper.jsx";

const Container = styled.div`
  display: flex;
  font-family: "Plus Jakarta Sans", serif;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  color: white;
  width: calc(100% - 64px);
  margin-left: 40px;
  gap: clamp(10px, 2.2vh, 28px);
  box-sizing: border-box;
  @media (max-height: 820px) and (min-width: 751px) {
    gap: clamp(8px, 1.5vh, 14px);
    margin-left: 32px;
    width: calc(100% - 48px);
  }
  @media (max-width: 750px) {
    width: auto;
    height: auto;
    row-gap: calc(8px + 2vh);
    margin-top: calc(8px + 2vh);
    margin-left: calc(8px + 3vw);
    margin-right: calc(8px + 3vw);
  }
  @media (max-width: 768px) and (min-height: 1024px) {
    width: 100%;
    height: auto;
    margin-top: 30px;
    gap: 36px;
    margin-left: 23px;
  }
  @media (max-width: 1024px) and (min-height: 1366px) {
    width: 100%;
    height: auto;
    margin-top: 60px;
    gap: 44px;
    margin-left: 40px;
  }
`;

function truncateDescription(text, maxLength) {
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  return cut.slice(0, cut.lastIndexOf(" ")) + "...";
}

export default function MoviePage(props) {
  const [movieTitle, setMovieTitle] = useState("300");
  const [movieDescription, setMovieTDescription] = useState("Based on the 1998 Dark Horse comic book limited series by Frank Miller and Lynn Varley, 300 is a fictionalized retelling of the Battle of Thermopylae in the Greco-Persian Wars, following King Leonidas (Gerard Butler) as he leads 300 Spartans against the Persian god-king Xerxes.");
  const [movieRating, setMovieRating] = useState(4.8);
  const [movieDate, setMovieDate] = useState(2006);
  const [movieGenre, setMovieGenre] = useState("action")
  const {setMoviePoster,setMovieTrailer,setModalState,movies,request,autoplay,active,myList,toggleMyList}=props;
  const saved = myList.includes(movieTitle);
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
          {movieRating}
        </SmallScreenMovieRating>
      </MovieDetails>
      <MovieDescription>
        {truncateDescription(movieDescription, 180)}
      </MovieDescription>
      <MoviePagePanel>
        <img src={play} onClick={()=>{setModalState(true)}} alt="" />
        <img src={moreinfo} alt="" />
        <MyListButton $saved={saved} aria-pressed={saved} onClick={()=>{toggleMyList(movieTitle)}}>
          {saved ? "✓ In My List" : "+ My List"}
        </MyListButton>
      </MoviePagePanel>
      <MoviePageSwiper movies={movies} request={request} autoplay={autoplay} active={active} setMoviePoster={setMoviePoster} setMovieTitle={setMovieTitle}  setMovieTrailer={setMovieTrailer} setMovieTDescription={setMovieTDescription} setMovieRating={setMovieRating} setMovieDate={setMovieDate} setMovieGenre={setMovieGenre}/>
    </Container>
      );
}
