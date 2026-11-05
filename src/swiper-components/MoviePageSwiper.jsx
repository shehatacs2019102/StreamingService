import React, { useEffect, useRef } from "react";
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
  height: 40px;
  width: 40px;
  margin-top: 12px;
  margin-left: 12px;
  position: absolute;
  align-self: flex-start;
  @media (max-height: 820px) {
    height: 30px;
    width: 30px;
    margin-top: 10px;
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
export default function MoviePageSwiper(props) {
  const swiperRef = useRef(null);
  const { movies, request, autoplay, active, setMovieTitle, setMoviePoster, setMovieTrailer, setMovieTDescription, setMovieRating , setMovieDate ,setMovieGenre } = props;

  const selectMovie = (movie) => {
    if (!movie) return;
    setMoviePoster(movie.poster);
    setMovieTitle(movie.title);
    setMovieTrailer(movie.trailer);
    setMovieTDescription(movie.description);
    setMovieRating(movie.rating);
    setMovieDate(movie.date);
    setMovieGenre(movie.genre);
  };

  // Jump to a film picked on another screen.
  useEffect(() => {
    if (!request) return;
    const index = movies.findIndex((movie) => movie.title === request.title);
    if (index === -1) return;
    swiperRef.current?.slideTo(index);
    selectMovie(movies[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request]);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;
    if (autoplay && active) swiper.autoplay.start();
    else swiper.autoplay.stop();
  }, [autoplay, active]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      observer={true}
      observeParents={true}
      centeredSlides={true}
      slideToClickedSlide={true}
      pagination={{
        clickable: true,
      }}
      onSlideChange={(swiper) => {
        selectMovie(movies[swiper.activeIndex]);
      }}
      modules={[Pagination, Autoplay]}
      className="movieSwiper"
      autoplay={{
        delay: 8000,
        disableOnInteraction: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        344: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        412: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 3.5,
          spaceBetween: 14,
        },
        1000: {
          slidesPerView: 4.5,
          spaceBetween: 16,
        },
      }}
    >
      {movies.map((movie, i) => {
        return (
          <SwiperSlide
            key={movie.id || movie.title || i}
            className="movieSwiperSlide"
            onClick={() => {
              swiperRef.current?.slideTo(i);
              selectMovie(movie);
            }}
          >
            <StudioLogo src={logo} alt="" />
            <h3>{movie["title"]}</h3>
            <img
              className="movieSwiperImage"
              src={movie["poster"]}
              alt={movie["title"]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
