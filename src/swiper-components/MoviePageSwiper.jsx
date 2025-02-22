import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./moviepageswiper.css";
import Logo from "../assets/icons-mini-header/logo.svg";
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
  const [images] = useState([
    { image: require("../movie-posters/joker.jpg"), title: "The Joker" },
    { image: require("../movie-posters/Barbie.jpg"), title: "Barbie" },
    { image: require("../movie-posters/300.jpg"), title: "300" },
    { image: require("../movie-posters/darkknight.jpg"), title: "The Dark Knight" },
    { image: require("../movie-posters/DAYBREAKERS.jpg"), title: "DAy Breakers" },
    { image: require("../movie-posters/tron.jpg"), title: "Tron legacy" },
    { image: require("../movie-posters/up.webp"), title: "up" },
    { image: require("../movie-posters/manofsteel.jpg"), title: "Man Of Steel" },
    { image: require("../movie-posters/fargo.jpg"), title: "fargo" },
    { image: require("../movie-posters/thething.jpg"), title: "The Thing" },
    { image: require("../movie-posters/x-men.jpg"), title: "X-MEN" },
    { image: require("../movie-posters/wars.jpg"), title: "Star Wars" },
    { image: require("../movie-posters/snowwhite.jpg"), title: "snow white huntsmen" },
    { image: require("../movie-posters/Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../movie-posters/1917.jpg"), title: "1917" },
  ]);
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
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide className="movieSwiperSlide">
            <StudioLogo src={Logo} alt="" />
            <h3>{image["title"]}</h3>
            <img className="movieSwiperImage" src={image["image"]} alt="" onClick={()=>{props.setbgImage(image["image"])}} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
