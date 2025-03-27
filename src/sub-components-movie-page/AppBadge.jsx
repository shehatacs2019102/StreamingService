import styled from "styled-components";

const AppBadge = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  width: auto;
  height: 36px;
  gap: 8px;
  @media (max-width: 800px) {
    height: 26px;
    gap: 4px;
  }
`;
export default AppBadge;
