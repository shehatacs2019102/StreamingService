import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MoviePage from "./layout/MoviePage";
import { useState } from "react";
import styled from "styled-components";
import BottomBar from "./components/BottomBar";
import MiniHeader from "./components/MiniHeader";
import IntroPage from "./layout/IntroPage";
import poster from "./movie-posters/300.jpg";
import MovieModal from "./sub-components-movie-page/MovieModal";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${(props) =>
    `linear-gradient(90deg, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.35) 55%, rgba(0, 0, 0, 0.15) 100%), url(${props.moviePoster})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 750px) {
    flex-flow: column wrap;
    height: auto;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  gap: 24px;
  height: 100vh;
  width: calc(100vw - 80px);
  padding: 12px 0 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  @media (min-height: 920px) and (min-width: 1025px) {
    justify-content: flex-start;
    gap: 64px;
  }
  @media (max-height: 820px) and (min-width: 751px) {
    gap: 10px;
    padding: 6px 0 12px 0;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: auto;
    overflow: visible;
    padding: 0;
  }
`;
function App() {
  const [login, setlogin] = useState("");
  const [moviePoster, setMoviePoster] = useState(poster);
  const [movieTrailer,setMovieTrailer]=useState("https://www.youtube.com/embed/2zqy21Z29ps?si=IUuyzeTjUV6Ya_7w");
  const [modalstate,setModalState]=useState(false);
  const handlelogin = (id) => {
    setlogin(id);
  };
  return (
    <div className="App" style={{ display: "relative" }}>
      {login === "dashboard" ? (
        <Container moviePoster={moviePoster}>
          <MovieModal modalstate={modalstate} setModalState={setModalState} movieTrailer={movieTrailer}/>
          <SideBar />
          <MiniHeader />
          <Holder>
            <Header />
            <MoviePage setMoviePoster={setMoviePoster} setModalState={setModalState} setMovieTrailer={setMovieTrailer} />
          </Holder>
          <BottomBar />
        </Container>
      ) : (
        <IntroPage handlelogin={handlelogin} />
      )}
    </div>
  );
}

export default App;
