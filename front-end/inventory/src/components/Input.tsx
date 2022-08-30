import React from "react";
import "../sass/components/_inputs.scss";

interface IInput {
  labelText: string;
  placeholder: string;
  value: string;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  labelText,
  placeholder,
  value,
  type,
  onChange,
  name,
}: //   onChange,
IInput) => {
  return (
    <div className="input">
      <label htmlFor={labelText}>{labelText}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
