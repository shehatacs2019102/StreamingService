import styled from "styled-components";

const MovieType = styled.div`
  width: 83px;
  height: 32px;
  font-family: "Plus Jakarta Sans", serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #ffffffcc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
    width: 63px;
    height: 26px;
    gap: 10px;
  }
  @media (min-width:768px) and (min-height:1024px) {
    font-size: 32px;
    line-height: calc(20px / 32px);
  }
`;
export default MovieType;
