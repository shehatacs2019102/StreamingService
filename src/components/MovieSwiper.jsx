import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./movieswiper.css";
import Logo from "../assets/icons-mini-header/logo.svg";
import { Pagination,Autoplay} from "swiper/modules";
import styled from "styled-components";


const StudioLogo = styled.img`
  z-index: 10;
  height: 48px;
  width: 48px;
  margin-top: 15px;
  margin-left: 15px;
  position: absolute;
  align-self: flex-start;
  @media (max-width:800px) {
    display: none;
  }
`;
export default function App() {
  const [images,setImage] = useState([
    { image: require("../joker.jpg"), title: "The Joker" },
    { image: require("../Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../1917.jpg"), title: "1917" },
    { image: require("../wars.jpg"), title: "Star Wars" },
    { image: require("../joker.jpg"), title: "The Joker" },
    { image: require("../Hobbit.jpg"), title: "The Hobbit" },
    { image: require("../1917.jpg"), title: "1917" },
    { image: require("../wars.jpg"), title: "Star Wars" },
  ]);
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable:true,
        
      }}
      slideToClickedSlide={true}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
      // slidesPerView={5}
      // spaceBetween={30}
       autoplay={{
         delay:8000,
       }}
      disableOnInteraction= {true}
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#ffffff",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "32px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      breakpoints= {{
        320:{
          slidesPerView: 3,
          spaceBetween: 8,
          pagination:false
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
          pagination:false
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        
      }
      }
    >
      
        {images.map((image, i) => {
          return (
            <SwiperSlide>
              <StudioLogo src={Logo} />
              <h3>{image["title"]}</h3>
              <img className="swiper-image"src={image["image"]} />
            </SwiperSlide>
          );
        })}
  
    </Swiper>
  );
}
