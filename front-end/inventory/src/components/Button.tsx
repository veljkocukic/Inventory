import React from "react";
import "../sass/components/_button.scss";

interface IButton {
  text: string;
  onClick?: () => void;
  className: string;
  onSubmit?: () => void;
}

export const Button = ({ text, onClick, className, onSubmit }: IButton) => {
  return (
    <div className={className} onClick={onClick} onSubmit={onSubmit}>
      {text}
    </div>
  );
};
