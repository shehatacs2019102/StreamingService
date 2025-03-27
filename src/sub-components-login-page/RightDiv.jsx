import styled from "styled-components";
import LeftDiv from "./LeftDiv";

const RightDiv = styled(LeftDiv)`
  align-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  gap: 5px;
  height: 450px;
  width: 300px;
  position: relative;
  @media (max-width: 800px) {
    height: 640px;
    width: 300px;
    display: flex;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    border: 1px solid transparent;
    background: linear-gradient(120deg, #ffffff, rgba(0, 0, 0, 0)) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;

export default RightDiv;