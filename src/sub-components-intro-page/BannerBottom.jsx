import styled from "styled-components";

const BannerBottom = styled.div`
  position: relative;
  color: white;
  background: radial-gradient(
      50% 500% at 50% -420%,
      rgba(64, 97, 231, 0.4) 80%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    black;
  display: flex;
  align-items: center;
  width: 200%;
  height: 146.7px;
  border-top-left-radius: 50% 100%;
  border-top-right-radius: 50% 100%;
  margin-top: 100px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin-top: -5px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      rgba(33, 13, 22, 1) 16%,
      rgba(184, 40, 105, 1),
      rgba(229, 9, 20, 1),
      rgba(184, 40, 105, 1),
      rgba(33, 13, 22, 1) 84%
    );
  }
`;
export default BannerBottom;
