import styled from "styled-components";

const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  text-align: start;
  padding: 24px;
  width: 100%;
  color: white;
  background-color: rgb(45, 45, 45);
  font-size: 26px;
  margin-bottom: 3px;
  border: 0;
  box-shadow: none;
  border-radius: 0px;
  &:hover {
    background-color: rgb(85, 85, 85);
    transition: 1s;
  }
`;

export default DropDownButton