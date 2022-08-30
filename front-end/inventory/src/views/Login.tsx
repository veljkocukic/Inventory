import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { IUser, loginUser, registerUser } from "../feautures/user/userSlice";
import "../sass/layouts/_login.scss";
import { AppDispatch } from "../store";

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((store: any) => store.user);
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(true);
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
  console.log(isMember);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { email, username, password } = inputValues;

    if (!isMember) {
      if (!email || !username || !password) return;
      dispatch(registerUser(inputValues));

      return;
    }
    if (!email || !password) return;

    dispatch(loginUser(inputValues));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className={isMember ? "login-wrapper isMember" : "login-wrapper"}>
      <section className="login-card">
        <h2>Welcome to My Storage!</h2>

        <Input
          className={isMember ? "no-opacity" : "opacity"}
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
        <button className="btn btn-border-1" onClick={handleSubmit}>
          {isMember ? "Sign in" : "Sign Up"}
        </button>
        <div className="not-memeber">
          <span>{isMember ? "Not a member?" : "Already a member?"}</span>{" "}
          <button onClick={() => setIsMember(!isMember)}>
            {isMember ? "Register" : "Login"}
          </button>
        </div>
      </section>
    </div>
  );
};
