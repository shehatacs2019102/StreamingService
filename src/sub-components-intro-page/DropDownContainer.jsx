import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 86%;
  @media (max-width: 800px) {
    align-self: flex-start;
    margin-left: 60px;
    width: 83%;
  }
  @media (max-width: 690px) {
    align-self: flex-start;
    margin-left: 35px;

    width: 83%;
  }
`;

export default DropDownContainer;
