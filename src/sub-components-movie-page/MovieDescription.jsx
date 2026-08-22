import styled from "styled-components";

const MovieDescription = styled.div`
  width: 520px;
  height: auto;
  min-height: 87px;
  display: flex;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 12px 16px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 343px;
    max-width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 25.6px;
    letter-spacing: 0%;
  }
  @media (min-width:768px) and (min-height:1024px) {
    font-size: 21px;
    line-height: 33px;
    height: auto;
    width:480px;
  }
`;
export default MovieDescription;
