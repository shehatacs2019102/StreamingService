import styled from "styled-components";
import Background from "../assets/startpage-assets/Background2.jpg";

const Banner = styled.div`
  color: white;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: brightness(0.6);
  }
  @media (max-width: 800px) {
    height: 30%;
  }
`;
export default Banner;
