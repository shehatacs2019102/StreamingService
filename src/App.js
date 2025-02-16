import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import MoviePage from "./layout/MoviePage";
import LoginPage from "./layout/LoginPage";
import { useState } from "react";
import styled from "styled-components";
import Actionbar from "./layout/Actionbar";
import Miniheader from "./layout/Miniheader";
import StartPage from "./layout/StartPage";
import blade from "./BLADELOGIN.jpeg"
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 100vh;
  width: 100vw;
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
  background: url(${blade});
  background-repeat:no-repeat;
  overflow: hidden;
  background-size:cover;
  @media (max-width: 800px) {
    width: 375px;
    height: 368px;
  }
`;
function App() {
  const [login, setlogin] = useState("");
  const handlelogin = (id) => {
    setlogin(id);
  };
  return (
    <div className="App" style={{ display: "relative" }}>
      {login === "dashboard" ? (
        <Container>
          <Sidebar />
          <Miniheader />
          <Holder>
            <Header />
            <MoviePage />
          </Holder>
          <Actionbar />
        </Container>
      ) : login === "login" ? (
        <LoginPage handlelogin={handlelogin} />
      ) : (
        <StartPage handlelogin={handlelogin} />
      )}
    </div>
  );
}

export default App;
