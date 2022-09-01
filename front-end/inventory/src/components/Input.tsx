import React, { useEffect, useState } from "react";
import "../sass/components/_inputs.scss";

interface IInput {
  labelText: string;
  value: string;
  type: string;
  name: string;
  pattern?: () => any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ labelText, value, type, onChange, name }: IInput) => {
  const [focused, setFocused] = useState(false);
  const [invalid, setInvalid] = useState<string | boolean>("s");

  console.log(invalid);

  const regexGenerator = (type: string, name: string, value?: any) => {
    let pattern;

    if (type === "email") {
      pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      setInvalid(pattern.test(value));

      return pattern.test(value);
    }
    if (name === "username" && type === "text") {
      pattern = /[a-z]{7,15}/;
      setInvalid(pattern.test(value));

      return pattern.test(value);
    }
    if (type === "password") {
      pattern = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
      setInvalid(pattern.test(value));

      return pattern.test(value);
    }
    if (name === "organizationName") {
      pattern = /^d+$/;

      setInvalid(pattern.test(value));

      return pattern.test(value);
    }
  };

  return (
    <div className={`input ${!invalid && !focused && "invalid"}`}>
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
        onFocus={() => {
          setFocused(true);
          !invalid && regexGenerator(type, name, value);
        }}
        onBlur={() => {
          regexGenerator(type, name, value);
          setFocused(false);
        }}
        // pattern={regexGenerator(type, name, value)}
      />
    </div>
  );
};
