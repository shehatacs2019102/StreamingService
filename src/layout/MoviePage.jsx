import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import Name from "../assets/name.svg";
import Title from "../assets/title.svg";
import Star from "../assets/star.svg";
import play from "../assets/play.svg";
import moreinfo from "../assets/moreinfo.svg";
import MovieSwiper from "../components/MovieSwiper"
const Container = styled.div`
  display: flex;
  font-family: "Plus Jakarta Sans", serif;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;
  flex: 0 1 0;
  color: white;
  width: calc(100% - 50px);
  margin: 0 0 0 50px;
  gap:32px;
`;
const MovieInfo = styled.div`
  display:flex;
  flex-flow: row wrap;
  flex: 0 1 0;
  gap:28px;
  justify-content: flex-start;
  align-items: center;
  
  

`;
export default function MoviePage() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
          flexShrink:'1',
          flexGrow:'0',
          flexBasis:'0',


          flexFlow: "row wrap",
          
        }}
      >
        <img src={Logo} alt="" />
        <img src={Name} alt="" />
        <div
          style={{
            height: "28px",
          }}
        >
          Original
        </div>
        
            
      </div>
      <div>
            <img src={Title} alt="" />
      </div>
      <MovieInfo>
        <div>2028</div>
        <div>82 seasons</div>
        <div style={{
            borderStyle:'solid',
            borderWidth:'1px',
            borderColor:'#CBD5E1',
            borderRadius:'1234px',
            padding:'6px 12px'
            
        }}
        >cartoon</div>
        <div style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'row',
            gap: '3px'
        }}>
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            4.8
            
        </div>
       
      </MovieInfo>
      <div style={{
        width: '520px',
        height:'87px',
        display:'flex',
        flexShrink:'1',
          flexGrow:'0',
          flexBasis:'0',
      }}>
      <p>
      When a small, unsuspecting town becomes the hunting ground for a malevolent entity,
      a group of unlikely heroes must rise — The Demonic Slash Group.
      </p>
      </div>
     <div style={{
      display:'flex',
      gap:'15px',
      flexFlow:'row wrap'
     }}>
      <img src={play} alt="" />
      <img src={moreinfo} alt="" />
     </div>
     <MovieSwiper/>
    </Container>
  );
}
