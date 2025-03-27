import styled from "styled-components";

const DesktopScreenMovieRating = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 768px) {
    display: none;
    height: 0;
  }
  @media (min-width:768px) and (min-height:1024px) {
    display: flex;
    height: auto;
    font-size: 24px;
  }
`;
export default DesktopScreenMovieRating;
