import styled from "styled-components";

const MoviePagePanel = styled.div`
  display: flex;
  gap: 15px;
  flex-flow: row wrap;
  align-items: center;
  & > img {
    cursor: pointer;
    height: 52px;
    width: auto;
  }
  @media (max-height: 820px) and (min-width: 751px) {
    gap: 12px;
    & > img {
      height: 42px;
    }
  }
`;
export default MoviePagePanel;
