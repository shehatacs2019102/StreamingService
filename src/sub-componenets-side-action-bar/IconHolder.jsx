import styled from "styled-components";
import LogoHolder from "./LogoHolder";

const IconHolder = styled(LogoHolder)`
  position: relative;
  padding: 0;
  border: 0;
  border-radius: 14px;
  height: 44px;
  width: 44px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? "#3a1014" : "transparent")};
  transition: background-color 0.2s ease, transform 0.15s ease;
  & > img {
    width: 22px;
    height: 22px;
    opacity: ${(props) => (props.$active ? 1 : 0.85)};
    transition: opacity 0.2s ease;
  }
  &:hover {
    background-color: #3a1014;
    transform: translateY(-1px);
    & > img {
      opacity: 1;
    }
  }
  &::after {
    content: "";
    display: ${(props) => (props.$dot ? "block" : "none")};
    position: absolute;
    top: 9px;
    right: 10px;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #e5262c;
  }
  @media (max-height: 760px) {
    height: 38px;
    width: 38px;
    & > img {
      width: 20px;
      height: 20px;
    }
  }
`;
export default IconHolder;
