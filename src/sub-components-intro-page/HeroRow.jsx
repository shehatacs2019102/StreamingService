import styled from "styled-components";

const HeroRow = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 48px;
  width: 86%;
  padding: 32px 0;
  @media (max-width: 800px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    gap: 40px;
  }
`;
export default HeroRow;
