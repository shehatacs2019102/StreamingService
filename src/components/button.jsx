import React from "react";
import styled from "styled-components";
import Cross from "../assets/startpage-icons/cross.svg"
const DropButton = styled.button`
display: flex;
justify-content: space-between;
text-align: start;
padding:24px;
width: 100%;
color: white;
background-color: rgb(45, 45, 45);
font-size:26px;
margin-bottom: 3px;
border: 0;
 
 box-shadow: none;
 border-radius: 0px;
 &:hover{
    background-color: rgb(85, 85, 85);
    transition:1s;
 }

`;
const Plusicon = styled.img`
    height:30px;
    width:30px;
    &:focus{
        transition:0.5;
        transform: rotate(20deg);
    }
`;
const Button = (props) => (
  <DropButton  onClick={props.onClick}>
    {props.header}
      <Plusicon src={Cross}  />
  </DropButton>
);

export default Button;
