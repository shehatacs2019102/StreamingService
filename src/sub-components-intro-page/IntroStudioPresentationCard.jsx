import styled from "styled-components";


const IntroStudioPresentationCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 30%;
  height: 230px;
  padding: 10px 20px;
  border-radius: 1rem;
  background: linear-gradient(149deg, #192247 0%, #210e17 96.86%);
  @media (max-width: 800px) {
    flex-basis: 42%;
  }
  @media (max-width: 690px) {
    flex-basis: 90%;
   
  }
`;
export default IntroStudioPresentationCard