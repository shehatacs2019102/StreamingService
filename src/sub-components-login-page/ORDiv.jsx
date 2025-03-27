import styled from "styled-components";

const ORDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  justify-self: center;
  &::before {
    position: absolute;
    left: 70%;
    top: 50%;
    content: "";
    background-color: #ffffff;
    width: 90px;
    height: 0.5px;
  }
  &::after {
    position: absolute;
    content: "";
    right: 70%;
    top: 50%;
    background-color: #ffffff;
    width: 90px;
    height: 0.5px;
  }
`;

export default ORDiv