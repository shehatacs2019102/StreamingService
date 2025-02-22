import styled from "styled-components";

const DesktopScreenMovieRating = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 3px;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    display: none;
    height: 0;
  }
`;
export default DesktopScreenMovieRating;
