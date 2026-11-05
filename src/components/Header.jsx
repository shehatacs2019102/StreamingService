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

const menu = [
  { id: "home", label: "Home" },
  { id: "browse", label: "Browse" },
  { id: "kids", label: "Kids" },
  { id: "support", label: "Support" },
  { id: "faq", label: "FAQ" },
];

export default function Header({ view, setView }) {
  return (
    <Container>
      <HeaderList>
        {menu.map((item) => (
          <HeaderListItem
            key={item.id}
            active={view === item.id}
            onClick={() => setView(item.id)}
          >
            {item.label}
          </HeaderListItem>
        ))}
      </HeaderList>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <HeaderPanelButton
          type="button"
          title="Search"
          aria-label="Search"
          $active={view === "search"}
          onClick={() => setView("search")}
        >
          <img src={search} alt="" />
        </HeaderPanelButton>
        <HeaderPanelButton
          type="button"
          title="Profile"
          aria-label="Profile"
          $active={view === "profile"}
          onClick={() => setView("profile")}
        >
          <img src={user} alt="" />
        </HeaderPanelButton>
      </div>
    </Container>
  );
}
