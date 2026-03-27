import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./moviepageswiper.css";
import logo from "../assets/logo.png";
import { Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";

const StudioLogo = styled.img`
  z-index: 10;
  height: 48px;
  width: 48px;
  margin-top: 15px;
  margin-left: 15px;
  position: absolute;
  align-self: flex-start;
  @media (max-width: 800px) {
    display: none;
  }
`;
export default function MoviePageSwiper(props) {
  const [movies] = useState([
    {
      poster: require("../movie-posters/300.jpg"),
      title: "300",
      trailer: "https://www.youtube.com/embed/2zqy21Z29ps?si=IUuyzeTjUV6Ya_7w",
      description: "based on the 1998 Dark Horse comic book limited series of the same name by Frank Miller and Lynn Varley. The film, like its source material, is a fictionalized retelling of the Battle of Thermopylae in the Greco-Persian Wars. The plot revolves around King Leonidas (Gerard Butler)",
      rating: 4.9,
      date: 2008,
      genre:"action"
    },
    {
      poster: require("../movie-posters/darkknight.jpg"),
      title: "Dark Knight",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?si=8KQkWv3wM17Dwa8N",
      description: "he Dark Knight is a 2008 superhero film directed by Christopher Nolan, from a screenplay co-written with his brother Jonathan. Based on the DC Comics superhero Batman, it is the sequel to Batman Begins, and the second installment in The Dark Knight trilogy. The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City"
    ,rating:3.6,
    date:2012,
    genre:"action"
      },
    {
      poster: require("../movie-posters/fargo.jpg"),
      title: "Fargo",
      trailer: "https://www.youtube.com/embed/ju75Sd4yAZw?si=lUx04oTLX0xK9YZW",
      description: "Fargo is a 1996 black comedy crime film written, directed, produced and edited by Joel and Ethan Coen. It stars Frances McDormand, William H. Macy, Steve Buscemi, Harve Presnell, and Peter Stormare. McDormand plays police chief Marge Gunderson, who investigates after a car salesman, Jerry Lundegaard, hires two dimwitted criminals to kidnap his wife to extort a ransom from her wealthy father."
    , rating:2.9,
  date:1996,
  genre:"detective"},
    {
      poster: require("../movie-posters/manofsteel.jpg"),
      title: "Man Of Steel",
      trailer: "https://www.youtube.com/embed/T6DJcgm3wNY?si=4gqZjNjawQl9s2sz",
      description: "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and written by David S. Goyer, who developed the story with producer Christopher Nolan, it is the first film in the DC Extended Universe, and a reboot of the Superman film series, depicting the character's origin story. Henry Cavill stars as Superman"
    ,rating:7,
  date:2010,
  genre:"super hero"},
    {
      poster: require("../movie-posters/snowwhite.jpg"),
      title: "SnowWhite",
      trailer: "https://www.youtube.com/embed/uudKJzOFGlY?si=6-wO1BwcmryiSUW0",
      description: "In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen."

    ,rating:6.3,
  date:2013,
  genre:"fantasy"},
    {
      poster: require("../movie-posters/thething.jpg"),
      title: "The Thing",
      trailer: "https://www.youtube.com/embed/JIdw2B6zipc?si=pMwlDK7p6gou_zJZ",
      description: "tells the story of a group of American researchers in Antarctica who encounter the eponymous Thing, an extraterrestrial life-form that assimilates, then imitates, other organisms. The group is overcome by paranoia and conflict as they learn that they can no longer trust each other and that any of them could be the Thing"

    ,rating:3,
  date:1984,
genre:"horror"},
    {
      poster: require("../movie-posters/tron.jpg"),
      title: "Tron",
      trailer: "https://www.youtube.com/embed/P78pl1FUXfA?si=idjKLjMo4SUYyeTs",
      description: "In 1989, Kevin Flynn, the CEO of ENCOM, disappears. Twenty years later, his son Sam, now ENCOM's primary shareholder, pranks the corporation by releasing the company's signature operating system online for free. ENCOM executive Alan Bradley, Kevin's old friend, approves of this, believing it aligns with Flynn's ideals of free software; nonetheless, Sam is arrested for trespassing. "
    , rating:5,
  date:2008,
genre:"sci-fi"},
    {
      poster: require("../movie-posters/x-men.jpg"),
      title: "X-Men",
      trailer: "https://www.youtube.com/embed/COvnHv42T-A?si=Nm_c3IrfS5H_025E",
      description: "MacTaggert, seeking Xavier's advice on mutation, takes him and Raven to the CIA, where they convince Director McCone that mutants exist and that Shaw is a threat. Another CIA officer sponsors the mutants and invites them to the secret Division X facility. MacTaggert and Xavier find Shaw as Lehnsherr attacks him, and Xavier rescues Lehnsherr from drowning before Shaw escapes"

    , rating:4,
  date:2004,
genre:"super hero"},
  ]);
  const { setMovieTitle, setMoviePoster, setMovieTrailer, setMovieTDescription, setMovieRating , setMovieDate ,setMovieGenre } = props;
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      slideToClickedSlide={true}
      modules={[Pagination, Autoplay]}
      className="movieSwiper"
      autoplay={{
        delay: 8000,
      }}
      disableOnInteraction={true}
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#ffffff",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "32px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        344: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        412: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      }}
    >
      {movies.map((movie, i) => {
        return (
          <SwiperSlide className="movieSwiperSlide">
            <StudioLogo src={logo} alt="" />
            <h3>{movie["title"]}</h3>
            <img
              className="movieSwiperImage"
              src={movie["poster"]}
              onClick={() => {
                setMoviePoster(movie["poster"]);
                setMovieTitle(movie["title"]);
                setMovieTrailer(movie["trailer"]);
                setMovieTDescription(movie["description"]);
                setMovieRating(movie["rating"]);
                setMovieDate(movie["date"]);
                setMovieGenre(movie["genre"])
              }}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
