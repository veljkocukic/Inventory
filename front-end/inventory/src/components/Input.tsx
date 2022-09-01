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
  const { errorMsgs } = useSelector((store: any) => store.user);
  console.log(errorMsgs[name]);

  return (
    <div className={`input ${!valid && !focused && "invalid"}`}>
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
      <p className={!valid || errorMsgs[name] ? "error-msg err" : "error-msg"}>
        {errorMsgs[name] ? errorMsgs[name] : errorMsg}
      </p>
    </div>
  );
};
