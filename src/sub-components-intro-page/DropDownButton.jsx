import styled from "styled-components";

const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  text-align: start;
  padding: 24px;
  width: 100%;
  color: white;
  background-color: #141c3b;
  font-size: 26px;
  margin-bottom: 3px;
  border: 0;
  box-shadow: none;
  border-radius: 0px;
  &:hover {
    background-color: #202c5f;
    transition: 1s;
  }
  @media (max-width: 690px) {
    padding: 18px;
    font-size: 18px;
  }
`;

export default DropDownButton;
