import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './movieswiper.css';
import Logo from "../assets/logo.svg";

// import required modules
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

const images = [
  { image: require("../joker.jpg"), title:'The Joker' },
  { image: require("../Hobbit.jpg") , title:'The Hobbit' },
  { image: require("../1917.jpg"), title:'1917' },
  { image: require("../wars.jpg"), title:'Star Wars' },
];
const StudioLogo = styled.img`
  z-index: 10;
  height: 48px;
  width: 48px;
  margin-top: 15px;
  margin-left: 15px;

  position: absolute;
  align-self: flex-start;
`;
export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
      slidesPerView={5}
      spaceBetween={30}
      loop={true}>
        <SwiperSlide><StudioLogo src={Logo} alt="" /><h3>{images[0].title}</h3><  img src= {images[0].image} className="swiper-image" /></SwiperSlide>
        <SwiperSlide><StudioLogo src={Logo} alt="" /><h3>{images[1].title}</h3><  img src= {images[1].image} className="swiper-image" /></SwiperSlide>
        <SwiperSlide><h3>{images[2].title}</h3><  img src= {images[2].image} className="swiper-image" /></SwiperSlide>
        <SwiperSlide><h3>{images[3].title}</h3><  img src= {images[3].image} className="swiper-image" /></SwiperSlide>
        <SwiperSlide><h3>{images[3].title}</h3><  img src= {images[3].image} className="swiper-image" /></SwiperSlide>
        <SwiperSlide><h3>{images[3].title}</h3><  img src= {images[3].image} className="swiper-image" /></SwiperSlide>
     
      </Swiper>
    </>
  );
}
