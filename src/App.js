import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MoviePage from "./layout/MoviePage";
import LoginPage from "./layout/LoginPage";
import { useState } from "react";
import styled from "styled-components";
import BottomBar from "./components/BottomBar";
import MiniHeader from "./components/MiniHeader";
import IntroPage from "./layout/IntroPage";
import poster from "./movie-posters/300.jpg"
import MovieModal from "./sub-components-movie-page/MovieModal";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100vw;
  background: ${(props)=>{return `url(${props.moviePoster})`}};
  background-repeat:no-repeat;
  background-size:cover;
  @media (max-width: 750px) {
    flex-flow: column wrap;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  gap: 100px;
  height: 100vh;
  width: calc(100vw - 80px);
  overflow: hidden;
  @media (max-width: 750px) {
    width: 375px;
    height: 368px;
    overflow: visible;
  }
  @media (max-width:1024px) and (min-height:600px) {
    gap:30px;
  }
  @media (max-width:1024px) and (min-height:800px) {
    gap:60px;
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
      ) : login === "login" ? (
        <LoginPage handlelogin={handlelogin} />
      ) : (
        <IntroPage handlelogin={handlelogin} />
      )}
    </div>
  );
}

export default App;
