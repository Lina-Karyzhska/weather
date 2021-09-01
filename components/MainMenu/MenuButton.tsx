import React from "react";

interface IMenuButtonProps {
  handleOpen: () => void;
}

const MenuButton: React.FC<IMenuButtonProps> = ({ handleOpen }) => {
  return (
    <button className="menu" onClick={handleOpen}>
      <svg viewBox="0 -53 384 384" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      </svg>
    </button>
  );
}

export default MenuButton;
