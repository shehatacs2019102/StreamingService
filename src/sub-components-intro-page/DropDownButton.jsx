import styled from "styled-components";

const DropDownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  padding: 20px 4px;
  width: 100%;
  color: white;
  background: transparent;
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: none;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #ff5a5f;
  }
  @media (max-width: 690px) {
    font-size: 16px;
  }
`;

export default DropDownButton;
