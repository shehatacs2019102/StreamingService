import styled from "styled-components";

const GetStartedButton = styled.button`
  height: 50px;
  padding: 0 30px;
  background: #e5262c;
  border-style: none;
  color: white;
  font-family: inherit;
  font-size: 17px;
  font-weight: 700;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  &:hover {
    background: #ff3b41;
    transform: translateY(-1px);
  }
`;
export default GetStartedButton;
