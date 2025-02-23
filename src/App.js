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
import joker from "./movie-posters/joker.jpg";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100vw;
 background:${(props)=>{return `url(${props.bgImage})`}};
  background-repeat:no-repeat;
  background-size:cover;
  @media (max-width: 800px) {
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
  @media (max-width: 800px) {
    width: 375px;
    height: 368px;
    overflow: visible;
  }
  @media (max-height: 800px) {
    gap:0px;
  }
`;

function App() {
  const [bgImage, setbgImage] = useState(joker)
  const [login, setlogin] = useState("");
  const handlelogin = (id) => {
    setlogin(id);
  };
  return (
    <div className="App" style={{ display: "relative" }}>
      {login === "dashboard" ? (
        <Container bgImage={bgImage}>
          <SideBar />
          <MiniHeader />
          <Holder>
            <Header />
            <MoviePage setbgImage={setbgImage}   />
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
