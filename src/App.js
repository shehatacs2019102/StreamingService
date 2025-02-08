import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import bladerunner from "./blade-runner.jpg";
import MoviePage from "./layout/MoviePage";
import LoginPage from "./layout/LoginPage";
import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;

`;
function App() {
  const [login, setlogin] = useState(false);
  const handlelogin = () => {
    setlogin(!login);
  };
  return (
    <div className="App" style={{}}>
      {login ? (
        <Container>
          <Sidebar />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexFlow: "column wrap",
              gap: "100px",
              backgroundImage: `url(${bladerunner})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
            }}
          >
            <Header />
            <MoviePage />
          </div>
        </Container>
      ) : (
        <LoginPage handlelogin={handlelogin} />
      )}
    </div>
  );
}

export default App;
