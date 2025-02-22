import styled from "styled-components";

const MovieDescription = styled.div`
  width: 520px;
  height: 87px;
  display: flex;
  @media (max-width: 800px) {
    width: 343px;
    height: 104px;
    font-weight: 400;
    font-size: 16px;
    line-height: 25.6px;
    letter-spacing: 0%;
  }
`;
export default MovieDescription;
