import React from "react";
import styled from "styled-components";

const Item = styled.button`
  padding: 4px 0;
  border: 0;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "#e5262c" : "transparent")};
  color: white;
  font-family: "Plus Jakarta Sans", serif;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  opacity: ${(props) => (props.$active ? "100%" : "60%")};
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 100%;
  }
`;

export default function HeaderListItem({ active, onClick, children }) {
  return (
    <li>
      <Item
        type="button"
        $active={active}
        aria-current={active ? "page" : undefined}
        onClick={onClick}
      >
        {children}
      </Item>
    </li>
  );
}
