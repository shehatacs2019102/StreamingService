import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MoviePage from "./layout/MoviePage";
import SidePanel from "./layout/SidePanel";
import { useState } from "react";
import styled from "styled-components";
import BottomBar from "./components/BottomBar";
import MiniHeader from "./components/MiniHeader";
import IntroPage from "./layout/IntroPage";
import poster from "./movie-posters/300.jpg";
import MovieModal from "./sub-components-movie-page/MovieModal";
import useMovies from "./useMovies";
import useStoredState from "./useStoredState";

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
    padding: 0 0 60px 0;
  }
`;
function App() {
  const [login, setlogin] = useState("");
  const [moviePoster, setMoviePoster] = useState(poster);
  const [movieTrailer,setMovieTrailer]=useState("https://www.youtube.com/embed/2zqy21Z29ps?si=IUuyzeTjUV6Ya_7w");
  const [modalstate,setModalState]=useState(false);
  const [view, setView] = useState("home");
  const [request, setRequest] = useState(null);
  const [notificationsSeen, setNotificationsSeen] = useState(false);
  const [notificationsCleared, setNotificationsCleared] = useState(false);
  const movies = useMovies();
  const [myList, setMyList] = useStoredState("streamflow.myList", []);
  const [autoplay, setAutoplay] = useStoredState("streamflow.autoplay", true);
  const notifications = notificationsCleared
    ? []
    : [...movies].sort((a, b) => b.date - a.date).slice(0, 5);
  const handlelogin = (id) => {
    setlogin(id);
  };
  const changeView = (next) => {
    if (next === "notifications") setNotificationsSeen(true);
    setView(next);
  };
  const toggleMyList = (title) => {
    setMyList((list) =>
      list.includes(title) ? list.filter((t) => t !== title) : [...list, title]
    );
  };
  const openMovie = (title) => {
    setView("home");
    setRequest({ title });
  };
  const leaveDemo = () => {
    setView("home");
    setlogin("");
  };
  const nav = {
    view,
    setView: changeView,
    hasUnread: !notificationsSeen && notifications.length > 0,
  };
  return (
    <div className="App" style={{ display: "relative" }}>
      {login === "dashboard" ? (
        <Container moviePoster={moviePoster}>
          <MovieModal modalstate={modalstate} setModalState={setModalState} movieTrailer={movieTrailer}/>
          <SideBar {...nav} />
          <MiniHeader {...nav} />
          <Holder>
            <Header {...nav} />
            <div style={{ display: view === "home" ? "contents" : "none" }}>
              <MoviePage
                setMoviePoster={setMoviePoster}
                setModalState={setModalState}
                setMovieTrailer={setMovieTrailer}
                movies={movies}
                request={request}
                autoplay={autoplay}
                active={view === "home" && !modalstate}
                myList={myList}
                toggleMyList={toggleMyList}
              />
            </div>
            {view !== "home" && (
              <SidePanel
                view={view}
                setView={changeView}
                movies={movies}
                myList={myList}
                toggleMyList={toggleMyList}
                clearMyList={() => setMyList([])}
                openMovie={openMovie}
                autoplay={autoplay}
                setAutoplay={setAutoplay}
                notifications={notifications}
                clearNotifications={() => setNotificationsCleared(true)}
                leaveDemo={leaveDemo}
              />
            )}
          </Holder>
          <BottomBar {...nav} />
        </Container>
      ) : (
        <IntroPage handlelogin={handlelogin} />
      )}
    </div>
  );
}

export default App;
