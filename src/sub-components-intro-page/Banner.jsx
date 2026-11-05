import styled from "styled-components";

const Banner = styled.div`
  color: white;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  min-height: calc(100vh - 40px);
  box-sizing: border-box;
  padding-bottom: 40px;
  background: radial-gradient(
      55% 65% at 76% 50%,
      rgba(229, 38, 44, 0.24),
      rgba(229, 38, 44, 0) 72%
    ),
    #0b0506;
  @media (max-width: 800px) {
    min-height: 0;
  }
`;
export default Banner;
