import styled from "styled-components";

const MovieTitle = styled.div`
  font-size: clamp(26px, 3.2vw, 40px);
  font-weight: 700;
  line-height: 1.15;
  @media (max-height: 820px) and (min-width: 751px) {
    font-size: clamp(24px, 2.6vw, 32px);
  }
  @media (max-width: 800px) {
    font-size: 28px;
  }
`;
export default MovieTitle;
