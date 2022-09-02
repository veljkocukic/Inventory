import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../sass/components/_inputs.scss";
import { regexGenerator } from "../views/Login/loginFuncs";

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
  const [valid, setValid] = useState<string | boolean>("s");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { backErrorMsgs } = useSelector((store: any) => store.user);

  return (
    <div
      className={`input ${
        ((!valid && !focused) || backErrorMsgs[name]) && "invalid"
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
          regexGenerator(type, name, setValid, valid, setErrorMsg, value);
        }}
        onBlur={() => {
          !(name === "organizationName") &&
            regexGenerator(type, name, setValid, valid, setErrorMsg, value);
          setFocused(false);
        }}
        // pattern={regexGenerator(type, name, value)}
      />
      <p
        className={
          (!valid && !focused) || (backErrorMsgs[name] && !focused)
            ? "error-msg error-active"
            : "error-msg"
        }
      >
        {backErrorMsgs[name] ? backErrorMsgs[name] : errorMsg}
      </p>
    </div>
  );
};
