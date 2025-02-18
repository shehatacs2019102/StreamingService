import React from "react";
import styled from "styled-components";

const Card = styled.div`

background-color: rgb(45, 45, 45);
margin-bottom: 3px;
font-size:26px;
padding: 24px;
`;
const DropDownCard = ( props ) => (
  <Card >
    {props.text}
  </Card>
);

export default DropDownCard;
