import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../components/Input";
import { IUser, registerUser } from "../feautures/user/userSlice";
import "../sass/layouts/_login.scss";
import { AppDispatch } from "../store";

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValues, setInputValues] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prev) => {
      const copy = { ...prev };
      return { ...copy, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    if (!inputValues) return;
    console.log(inputValues);
    dispatch(registerUser(inputValues));
  };

  return (
    <div className="login-wrapper">
      <section className="login-card">
        <h2>Welcome to My Storage!</h2>
        <Input
          type="text"
          name="username"
          labelText="Username"
          placeholder="Enter username"
          value={inputValues.username}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          labelText="Email"
          placeholder="Enter email"
          value={inputValues.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          labelText="Password"
          placeholder="Enter password"
          value={inputValues.password}
          onChange={handleChange}
        />
        <div className="btn-container">
          <button onClick={handleSubmit}>Login</button>
        </div>
      </section>
    </div>
  );
};
