import styled from "styled-components";
import MovieInfo from "./MovieInfo";

const MovieCategory = styled(MovieInfo)`
  border-style: solid;
  border-width: 1px;
  border-color: #cbd5e1;
  border-radius: 1234px;
  padding: 6px 12px;
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 800px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.5%;
    text-align: center;
  }
  @media (min-width:768px) and (min-height:1024px) {
    font-size: 25px;
    padding: 12px 24px;
  }
`;
export default MovieCategory;
