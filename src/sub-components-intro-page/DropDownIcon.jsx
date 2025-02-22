import styled from "styled-components";

const PlusIcon = styled.img`
  height: 30px;
  width: 30px;
  transform:${(props)=>{return parseInt(props.id)===parseInt(props.show)?"rotate(45deg)":""}};
  transition: transform 0.1s ease-in;
`;
export default PlusIcon
