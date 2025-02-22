import styled from "styled-components";
import LogoHolder from "./LogoHolder";

const IconHolder = styled(LogoHolder)`
  border-radius: 123px;
  height: 48px;
  width: 48px;
  &:hover {
    background-color: #334155;
  }
  @media (max-width: 800px) {
    &:hover {
      background: #1e293b;
    }
  }
`;
export default IconHolder;
