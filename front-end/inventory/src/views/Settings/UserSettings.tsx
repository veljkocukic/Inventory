import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  clearErrors,
  editUser,
  handleErrors,
  IUser,
} from "../../feautures/user/userSlice";
import { AppDispatch } from "../../store";
import { validateInput } from "../../utils/helpers";
import { getUserFromLocalStorage } from "../../utils/localStorage";

export const UserSettings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { email, password, username, _id } = getUserFromLocalStorage();

  const [inputValues, setInputValues] = useState({
    email,
    password,
    username,
    _id,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearErrors());

    setInputValues((prev: any) => {
      const copy = { ...prev };
      return { ...copy, [e.target.name]: e.target.value };
    });
  };
  console.log(inputValues);
  const handleSubmit = (e: any) => {
    e.preventDefault();

    //  check for errors
    const {} = inputValues;

    const checkForErrors = { email, password, username };

    dispatch(handleErrors(checkForErrors));

    if (validateInput(checkForErrors).valid) {
      dispatch(editUser(inputValues));
      return;
    }
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "5rem auto",
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
      }}
    >
      <Input
        type="email"
        name="email"
        labelText="Email"
        value={inputValues.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        labelText="Password"
        value={inputValues.password}
        onChange={handleChange}
      />
      <Input
        type="text"
        name="username"
        labelText="Username"
        value={inputValues.username}
        onChange={handleChange}
      />
      {/* <Input
        type="text"
        name="organizationName"
        labelText="Organization name"
        value={inputValues.organizationName}
        onChange={handleChange}
      /> */}
      <Button
        className="btn btn-border-1"
        onClick={handleSubmit}
        text="Apply"
      />
    </div>
  );
};
