import styled from "styled-components";

const Logo = styled.img`
  width: ${(props) => {
    return props.type === "Banner" ? "100px" : "32px";
  }};
  height: ${(props) => {
    return props.type === "Banner" ? "100px" : "32px";
  }};
  gap: 5px;
  border-radius: ${(props) => {
    return props.type === "Banner" ? "0px" : "12px";
  }};
  background-color: transparent;
  @media (max-width: 768px) {
    width: ${(props) => {
      return props.type === "mini"
        ? "32px"
        : props.type === "Banner"
        ? "80px"
        : "24px";
    }};
    height: ${(props) => {
      return props.type === "mini"
        ? "32px"
        : props.type === "Banner"
        ? "80px"
        : "24px";
    }};
    gap: 3.75px;
  }
  @media (min-width:768px) and (min-height:1024px) {
    width: ${(props) => {
      return props.type === "Banner"
        ? "80px"
        : "42px";
    }};
    height: ${(props) => {
      return props.type === "Banner"
        ? "80px"
        : "42px";
    }};
  }
`;

export default Logo;
