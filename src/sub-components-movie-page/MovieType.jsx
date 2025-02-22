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
  padding-bottom: 2px;
  @media (max-width: 800px) {
    font-size: 14px;
    line-height: 20px;
    width: 63px;
    height: 26px;
    gap: 10px;
  }
`;
export default MovieType;
