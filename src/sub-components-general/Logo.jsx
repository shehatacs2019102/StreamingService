import styled from "styled-components";

const Logo = styled.img`
  width: ${(props)=>{return props.type==="Banner"?"80px":"32px"}};
  height: ${(props)=>{return props.type==="Banner"?"80px":"32px"}};;
  gap: 5px;
  border-radius: ${(props)=>{return props.type==="Banner"?"0px":"12px"}};;
  background-color:${(props)=>{return props.type==="mini"||props.type==="Banner"?"transparent":"white"}};
  @media (max-width: 800px) {
    width: ${(props)=>{return props.type==="mini"?"32px":props.type==="Banner"?"100px":"24px"}};
    height: ${(props)=>{return props.type==="mini"?"32px":props.type==="Banner"?"100px":"24px"}};
    gap: 3.75px;
  }
`;

export default Logo;
