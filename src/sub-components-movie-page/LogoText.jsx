import styled from "styled-components";

const LogoText = styled.div`
  font-weight: 500;
  font-size: 25px;
  @media (max-width: 800px) {
    font-size: 13px;
  }
  @media (min-width:768px) and (min-height:1024px) {
    font-size: 30px;
  }
`;
export default LogoText;
