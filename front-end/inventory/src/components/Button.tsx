import React from "react";
import "../sass/components/_button.scss";

interface IButton {
  text: string;
  onClick?: () => void;
  className: string;
}

export const Button = ({ text, onClick, className }: IButton) => {
  return (
    <div className={className} onClick={onClick}>
      {text}
    </div>
  );
};
