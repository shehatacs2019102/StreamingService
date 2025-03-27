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
    },
    {
      poster: require("../movie-posters/darkknight.jpg"),
      title: "Dark Knight",
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY?si=8KQkWv3wM17Dwa8N",
    },
    {
      poster: require("../movie-posters/fargo.jpg"),
      title: "Fargo",
      trailer: "https://www.youtube.com/embed/ju75Sd4yAZw?si=lUx04oTLX0xK9YZW",
    },
    {
      poster: require("../movie-posters/manofsteel.jpg"),
      title: "Man Of Steel",
      trailer: "https://www.youtube.com/embed/T6DJcgm3wNY?si=4gqZjNjawQl9s2sz",
    },
    {
      poster: require("../movie-posters/snowwhite.jpg"),
      title: "SnowWhite",
      trailer: "https://www.youtube.com/embed/uudKJzOFGlY?si=6-wO1BwcmryiSUW0",
    },
    {
      poster: require("../movie-posters/thething.jpg"),
      title: "The Thing",
      trailer: "https://www.youtube.com/embed/JIdw2B6zipc?si=pMwlDK7p6gou_zJZ",
    },
    {
      poster: require("../movie-posters/tron.jpg"),
      title: "Tron",
      trailer: "https://www.youtube.com/embed/P78pl1FUXfA?si=idjKLjMo4SUYyeTs",
    },
    {
      poster: require("../movie-posters/x-men.jpg"),
      title: "X-Men",
      trailer: "https://www.youtube.com/embed/COvnHv42T-A?si=Nm_c3IrfS5H_025E",
    },
  ]);
  const { setMovieTitle, setMoviePoster, setMovieTrailer } = props;
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
              }}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
