import styled from "styled-components";
import React from "react";
import search from "../assets/icons-header/search.svg";
import user from "../assets/icons-sidebar/user.svg";
import HeaderList from "../sub-componenets-header/HeaderList.jsx";
import HeaderListItem from "../sub-componenets-header/HeaderListItem.jsx";
import HeaderPanelButton from "../sub-componenets-header/HeaderPanelButton.jsx";

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
  padding: 0px 32px 0px 10px;
  box-sizing: border-box;
  @media (max-height: 820px) {
    ul {
      margin: 8px 0;
    }
  }
  @media (max-width: 750px) {
    display: none;
    height: 0;
  }
`;

export default function Header() {
  return (
    <Container>
      <HeaderList>
        <HeaderListItem>Home</HeaderListItem>
        <HeaderListItem>Browse</HeaderListItem>
        <HeaderListItem>Kids</HeaderListItem>
        <HeaderListItem>Support</HeaderListItem>
        <HeaderListItem>FAQ</HeaderListItem>
      </HeaderList>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <HeaderPanelButton src={search} alt="" />
        <HeaderPanelButton src={user} alt="" />
      </div>
    </Container>
  );
}
