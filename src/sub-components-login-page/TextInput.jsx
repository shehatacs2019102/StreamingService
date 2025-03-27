import styled from "styled-components";

const TextInput = styled.input`
  padding: 8px 7px;
  color: white;
  background: none;
  border-color: white;
  border-style: solid;
  border-width: 0.1px;
  border-radius: 5px;
  &::placeholder {
    color: white;
  }
  outline: none;
`;

export default TextInput