import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../sass/components/_inputs.scss";
import { validateInput } from "../utils/helpers";

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
  const [errorMsg, setErrorMsg] = useState<any>("");
  const { backErrorMsgs } = useSelector((store: any) => store.user);

  return (
    <div
      className={`input ${
        ((errorMsg && !focused) || backErrorMsgs[name]) && "invalid"
      }`}
    >
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
          setErrorMsg(validateInput(name, value));
        }}
        onBlur={() => {
          !(name === "organizationName") &&
            // regexGenerator(type, name, setValid, valid, setErrorMsg, value);
            setErrorMsg(validateInput(name, value));

          setFocused(false);
        }}
        // pattern={regexGenerator(type, name, value)}
      />
      <p
        className={
          (validateInput(name, value) && !focused) ||
          (backErrorMsgs[name] && !focused)
            ? "error-msg error-active"
            : "error-msg"
        }
      >
        {backErrorMsgs[name] ? backErrorMsgs[name] : errorMsg}
      </p>
    </div>
  );
};
