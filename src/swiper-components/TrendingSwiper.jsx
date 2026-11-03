import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./trendingswiper.css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { apiEnabled, fetchTrending } from "../api";

export default function TrendingSwiper() {
  const [images, setImages] = useState([
    { image: require("../movie-posters/dune.jpg"), title: "Dune" },
    { image: require("../movie-posters/oppenheimer.jpg"), title: "Oppenheimer" },
    { image: require("../movie-posters/interstellar.jpg"), title: "Interstellar" },
    { image: require("../movie-posters/spiderverse.jpg"), title: "Spider-Man: Spider-Verse" },
    { image: require("../movie-posters/bladerunner.jpg"), title: "Blade Runner 2049" },
    { image: require("../movie-posters/inception.jpg"), title: "Inception" },
    { image: require("../movie-posters/joker.jpg"), title: "Joker" },
    { image: require("../movie-posters/1917.jpg"), title: "1917" },
    { image: require("../movie-posters/madmax.jpg"), title: "Mad Max: Fury Road" },
    { image: require("../movie-posters/johnwick.jpg"), title: "John Wick" },
    { image: require("../movie-posters/Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../movie-posters/wars.jpg"), title: "Star Wars" },
    { image: require("../movie-posters/darkknight.jpg"), title: "Dark Knight" },
    { image: require("../movie-posters/300.jpg"), title: "300" },
    { image: require("../movie-posters/thething.jpg"), title: "The Thing" },
  ]);
  useEffect(() => {
    if (!apiEnabled) return;
    fetchTrending()
      .then((items) => {
        if (!items.length) return;
        // Repeat the list to fill 15 slides, matching the bundled layout.
        setImages(
          Array.from({ length: 15 }, (_, i) => {
            const item = items[i % items.length];
            return { image: item.poster, title: item.title };
          })
        );
      })
      .catch((err) => console.warn("Using bundled trending list:", err.message));
  }, []);
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
