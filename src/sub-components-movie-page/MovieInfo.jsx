import styled from "styled-components";

const MovieInfo = styled.div`
  font-family: "Plus Jakarta Sans", serif;
  @media (max-width: 768px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.6%;
    text-align: center;
  }
  @media (min-width:768px) and (min-height:1024px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.6%;
    text-align: center;
  }
`;
export default MovieInfo