import React from "react";
import IconHolder from "./IconHolder";

export default function NavButton({ item, view, setView, dot }) {
  return (
    <IconHolder
      as="button"
      type="button"
      title={item.label}
      aria-label={item.label}
      aria-current={view === item.id ? "page" : undefined}
      $active={view === item.id}
      $dot={dot}
      onClick={() => setView(item.id)}
    >
      <img src={item.icon} alt="" />
    </IconHolder>
  );
}
