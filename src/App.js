import "./App.css";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import cover from "./blade-runner.jpg";
import MoviePage from "./layout/MoviePage";
import LoginPage from "./layout/LoginPage";
import { useState } from "react";
import styled from "styled-components";
import Actionbar from "./layout/Actionbar";
import Miniheader from "./layout/Miniheader";
import StartPage from "./layout/StartPage";

const Container = styled.div`
  display: flex;
  
  flex-flow: column nowrap;
  
  height: 100vh;
  width: 100vw;
  @media (max-width: 800px) {
    flex-flow: column wrap;
  }
`;
const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column wrap;
  gap: 100px;
  height: 100vh;
  @media (max-width: 800px) {
    width: 375px;
    height: 368px;
  }
`;
function App() {
  const [login, setlogin] = useState(false);
  const handlelogin = () => {
    setlogin(!login);
  };
  return (
    <div className="App" style={{display:'relative'}}>
      {/* {login ? (
        <Container>
          <Sidebar />
          <Miniheader />
          {
            <Holder>
              <Header />
              <MoviePage />
            </Holder>
          }
          <Actionbar />
        </Container>
      ) : (
        <LoginPage handlelogin={handlelogin} />
      )} */}
      <Container>
        <StartPage/>
        
        </Container>
    </div>
  );
}

export default App;
