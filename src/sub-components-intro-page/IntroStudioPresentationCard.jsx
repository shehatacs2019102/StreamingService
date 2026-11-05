import styled from "styled-components";

const IntroStudioPresentationCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
  min-width: 0;
  box-sizing: border-box;
  padding: 24px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.2s ease;
  &:hover {
    border-color: #e5262c;
  }
  h2 {
    font-size: 1.1rem;
    margin: 0 0 8px 0;
  }
  @media (max-width: 800px) {
    flex-basis: 42%;
  }
  @media (max-width: 690px) {
    flex-basis: 100%;
  }
`;
export default IntroStudioPresentationCard;
