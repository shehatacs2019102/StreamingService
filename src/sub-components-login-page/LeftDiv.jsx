import styled from "styled-components";

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 10px;
  @media (max-width: 800px) {
    display: none;
    height: 0px;
  }
`;

export default LeftDiv;