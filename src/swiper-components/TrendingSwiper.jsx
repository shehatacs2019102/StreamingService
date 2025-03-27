import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./trendingswiper.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function TrendingSwiper() {
  const [images] = useState([
    { image: require("../movie-posters/joker.jpg"), title: "The Joker" },
    { image: require("../movie-posters/Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../movie-posters/1917.jpg"), title: "1917" },
    { image: require("../movie-posters/wars.jpg"), title: "Star Wars" },
    { image: require("../movie-posters/joker.jpg"), title: "The Joker" },
    { image: require("../movie-posters/Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../movie-posters/1917.jpg"), title: "1917" },
    { image: require("../movie-posters/wars.jpg"), title: "Star Wars" },
    { image: require("../movie-posters/joker.jpg"), title: "The Joker" },
    { image: require("../movie-posters/Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../movie-posters/1917.jpg"), title: "1917" },
    { image: require("../movie-posters/wars.jpg"), title: "Star Wars" },
    { image: require("../movie-posters/joker.jpg"), title: "The Joker" },
    { image: require("../movie-posters/Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../movie-posters/1917.jpg"), title: "1917" },
  ]);
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      slideToClickedSlide={true}
      className="trendingSwiper"
      autoplay={{
        delay: 20000,
      }}
      disableOnInteraction={true}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 6,
          spaceBetween: 23,
        },
      }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide className="trendingSwiperSlide">
            <h3>{image["title"]}</h3>
            <h2>{i + 1}</h2>
            <img className="trendingSwiperImage" src={image["image"]} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
