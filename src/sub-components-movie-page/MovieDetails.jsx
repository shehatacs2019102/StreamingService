import styled from "styled-components";

const MovieDetails = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 28px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 800px) {
    width: 343px;
    gap: 16px;
  }
`;
export default MovieDetails;
