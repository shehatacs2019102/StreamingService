import React from "react";
import Button from "./button";
import DropDownCard from "./DropDownCard";
const sampleData = new Array(7).fill("item name");
const DropDownButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
    
        width: "calc(75% - 50px)",
        
      }}
    >
      <Button header={props.header} onClick={() => setOpen(open => !open)} />
      
      {open && <DropDownCard text={props.text} setOpen={setOpen} />}
    </div>
  );
};

export default DropDownButton;
