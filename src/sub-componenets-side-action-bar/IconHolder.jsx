import styled from "styled-components";
import LogoHolder from "./LogoHolder";

const IconHolder = styled(LogoHolder)`
  border-radius: 14px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.15s ease;
  & > img {
    width: 22px;
    height: 22px;
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }
  &:hover {
    background-color: #334155;
    transform: translateY(-1px);
    & > img {
      opacity: 1;
    }
  }
  @media (max-height: 760px) {
    height: 38px;
    width: 38px;
    & > img {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 800px) {
    &:hover {
      background: #1e293b;
    }
  }
`;
export default IconHolder;
