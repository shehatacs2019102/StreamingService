
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./trendingswiper.css";
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/navigation';
import Logo from "../assets/icons-mini-header/logo.svg";
// import { Autoplay, Navigation} from "swiper/modules";
import { Autoplay,Navigation } from 'swiper/modules';
import styled from "styled-components";
export default function TrendingSwiper() {
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
    
   
    navigation={true}
    modules={[ Navigation , Autoplay]}
    slideToClickedSlide={true}
      
      className="mySwiper"
    
       autoplay={{
         delay:20000,
       }}
      //  loop={true}
      disableOnInteraction= {true}
      
    >
        
        {images.map((image, i) => {
          return (
            

            
            <SwiperSlide>
              
              <h3>{image["title"]}</h3>
              <h2>{i+1}</h2>
              <img className="swiper-image"src={image["image"]} />
            </SwiperSlide>
           
            
          );
        })}
  
    </Swiper>
  )
}
