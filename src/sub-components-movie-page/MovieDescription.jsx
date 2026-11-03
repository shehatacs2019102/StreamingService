import styled from "styled-components";

const MovieDescription = styled.div`
  width: 520px;
  max-width: 100%;
  height: auto;
  min-height: 76px;
  display: flex;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  border-radius: 12px;
  padding: 12px 16px;
  box-sizing: border-box;
  line-height: 1.45;
  @media (max-height: 820px) and (min-width: 751px) {
    min-height: auto;
    padding: 10px 14px;
    font-size: 14px;
    line-height: 1.4;
    width: 480px;
  }
  @media (max-width: 768px) {
    width: 343px;
    max-width: 100%;
    height: auto;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }
  @media (min-width: 768px) and (min-height: 1024px) {
    font-size: 21px;
    line-height: 33px;
    height: auto;
    width: 480px;
  }
`;
export default MovieDescription;
