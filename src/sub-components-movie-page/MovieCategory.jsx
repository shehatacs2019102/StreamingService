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
`;
export default MovieCategory;
