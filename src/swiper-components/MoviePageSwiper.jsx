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
      description: "300 is a 2006 American epic historical action film[4][5] directed by Zack Snyder, who co-wrote the screenplay with Kurt Johnstad and Michael B. Gordon. It is based on the 1998 Dark Horse comic book limited series of the same name by Frank Miller and Lynn Varley. The film, like its source material, is a fictionalized retelling of the Battle of Thermopylae in the Greco-Persian Wars. The plot revolves around King Leonidas (Gerard Butler), who leads 300 Spartans into battle against the Persian God-King Xerxes (Rodrigo Santoro) and his invading army of more than 300,000 soldiers"
    },
    {
      poster: require("../movie-posters/darkknight.jpg"),
      title: "Dark Knight",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?si=8KQkWv3wM17Dwa8N",
      description: "he Dark Knight is a 2008 superhero film directed by Christopher Nolan, from a screenplay co-written with his brother Jonathan. Based on the DC Comics superhero Batman, it is the sequel to Batman Begins, and the second installment in The Dark Knight trilogy. The plot follows the vigilante Batman, police lieutenant James Gordon, and district attorney Harvey Dent, who form an alliance to dismantle organized crime in Gotham City"
    },
    {
      poster: require("../movie-posters/fargo.jpg"),
      title: "Fargo",
      trailer: "https://www.youtube.com/embed/ju75Sd4yAZw?si=lUx04oTLX0xK9YZW",
      description: "Fargo is a 1996 black comedy crime film written, directed, produced and edited by Joel and Ethan Coen. It stars Frances McDormand, William H. Macy, Steve Buscemi, Harve Presnell, and Peter Stormare. McDormand plays police chief Marge Gunderson, who investigates after a car salesman, Jerry Lundegaard, hires two dimwitted criminals to kidnap his wife to extort a ransom from her wealthy father."
    },
    {
      poster: require("../movie-posters/manofsteel.jpg"),
      title: "Man Of Steel",
      trailer: "https://www.youtube.com/embed/T6DJcgm3wNY?si=4gqZjNjawQl9s2sz",
      description: "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and written by David S. Goyer, who developed the story with producer Christopher Nolan, it is the first film in the DC Extended Universe, and a reboot of the Superman film series, depicting the character's origin story. Henry Cavill stars as Superman"
    },
    {
      poster: require("../movie-posters/snowwhite.jpg"),
      title: "SnowWhite",
      trailer: "https://www.youtube.com/embed/uudKJzOFGlY?si=6-wO1BwcmryiSUW0",
      description: "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and written by David S. Goyer, who developed the story with producer Christopher Nolan, it is the first film in the DC Extended Universe, and a reboot of the Superman film series, depicting the character's origin story. Henry Cavill stars as Superman"

    },
    {
      poster: require("../movie-posters/thething.jpg"),
      title: "The Thing",
      trailer: "https://www.youtube.com/embed/JIdw2B6zipc?si=pMwlDK7p6gou_zJZ",
      description: "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and written by David S. Goyer, who developed the story with producer Christopher Nolan, it is the first film in the DC Extended Universe, and a reboot of the Superman film series, depicting the character's origin story. Henry Cavill stars as Superman"

    },
    {
      poster: require("../movie-posters/tron.jpg"),
      title: "Tron",
      trailer: "https://www.youtube.com/embed/P78pl1FUXfA?si=idjKLjMo4SUYyeTs",
      description: "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and written by David S. Goyer, who developed the story with producer Christopher Nolan, it is the first film in the DC Extended Universe, and a reboot of the Superman film series, depicting the character's origin story. Henry Cavill stars as Superman"

    },
    {
      poster: require("../movie-posters/x-men.jpg"),
      title: "X-Men",
      trailer: "https://www.youtube.com/embed/COvnHv42T-A?si=Nm_c3IrfS5H_025E",
      description: "Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Directed by Zack Snyder and written by David S. Goyer, who developed the story with producer Christopher Nolan, it is the first film in the DC Extended Universe, and a reboot of the Superman film series, depicting the character's origin story. Henry Cavill stars as Superman"

    },
  ]);
  const { setMovieTitle, setMoviePoster, setMovieTrailer, setMovieTDescription } = props;
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
              }}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
