import styled from "styled-components";

const FormText = styled.h3`
  margin: 0px;
  font-size: ${(props)=>{return props.type==="Login"?"36px":"16px"}};
  @media (max-width: 800px) {
    padding-bottom: 15px;
  }
`;
export default FormText;