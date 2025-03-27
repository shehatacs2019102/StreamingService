import styled from "styled-components";

const MovieDetails = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 28px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 343px;
    gap: 16px;
  }
  @media (min-width:768px) and (min-height:1024px) {
    width: auto;
    gap:20px
  }
`;
export default MovieDetails;
