import styled from "styled-components";

const MyListButton = styled.button`
  height: 52px;
  padding: 0 24px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  background: ${(props) => (props.$saved ? "#e5262c" : "rgba(26, 11, 13, 0.7)")};
  transition: background-color 0.2s ease;
  @media (max-height: 820px) and (min-width: 751px) {
    height: 42px;
    padding: 0 18px;
    font-size: 14px;
  }
`;
export default MyListButton;
