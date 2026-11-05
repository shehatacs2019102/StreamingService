import styled from "styled-components";

const HeaderPanelButton = styled.button`
  display: flex;
  width: 40px;
  height: 40px;
  padding: 9px;
  box-sizing: border-box;
  background: ${(props) =>
    props.$active ? "#e5262c" : "rgba(255, 255, 255, 0.14)"};
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  & > img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: ${(props) =>
      props.$active ? "#e5262c" : "rgba(255, 255, 255, 0.26)"};
    transform: translateY(-1px);
  }
`;

export default HeaderPanelButton;
