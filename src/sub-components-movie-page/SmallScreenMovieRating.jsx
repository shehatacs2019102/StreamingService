import styled from "styled-components";
import DesktopScreenMovieRating from "./DesktopScreenRating.jsx";

const SmallScreenMovieRating = styled(DesktopScreenMovieRating)`
  display: none;
  height: 0;
  @media (max-width: 800px) {
    display: flex;
    height: auto;
  }
`;
export default SmallScreenMovieRating;
