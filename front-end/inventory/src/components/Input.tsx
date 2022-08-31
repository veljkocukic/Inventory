import React, { useState } from "react";
import "../sass/components/_inputs.scss";

interface IInput {
  labelText: string;
  value: string;
  type: string;
  name: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  labelText,
  value,
  type,
  onChange,
  name,
  className,
}: IInput) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`input ${className}`}>
      <label
        className={value || focused ? "label active" : "label"}
        htmlFor={labelText}
      >
        {labelText}
      </label>
      <input
        autoComplete="off"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};
