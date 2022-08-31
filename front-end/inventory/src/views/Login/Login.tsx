import React, { useEffect, useState } from "react";
import "../../sass/layouts/_login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IUser, loginUser, registerUser } from "../../feautures/user/userSlice";
import { AppDispatch } from "../../store";
import { Input } from "../../components/Input";
import { LoginCard } from "./LoginCard";
import { RegisterCard } from "./RegisterCard";
import { Button } from "../../components/Button";

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((store: any) => store.user);
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(false);
  const [inputValues, setInputValues] = useState<IUser>({
    username: "",
    email: "",
    password: "",
    organizationName: "",
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

    if (isMember) {
      if (!email || !username || !password) return;
      dispatch(registerUser(inputValues));
      setInputValues({
        username: "",
        email: "",
        password: "",
        organizationName: "",
      });

      return;
    }
    if (!email || !password) return;
    const loginValues = { email, password };

    dispatch(loginUser(loginValues));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const changeSlide = () => {
    setInputValues({
      username: "",
      email: "",
      password: "",
      organizationName: "",
    });
    setIsMember(!isMember);
  };

  return (
    <div className={"login-wrapper"}>
      <div className="login-container">
        <div
          className={
            isMember ? "absolute-background isMember" : "absolute-background"
          }
        >
          <span>{!isMember ? "Not a member?" : "Already a member?"}</span>{" "}
          <Button
            className="btn btn-border-1"
            onClick={changeSlide}
            text={!isMember ? "Register" : "Login"}
          />
        </div>
        <RegisterCard
          inputValues={inputValues}
          handleChange={handleChange}
          isMember={isMember}
          handleSubmit={handleSubmit}
          setIsMember={setIsMember}
        />
        <LoginCard
          inputValues={inputValues}
          handleChange={handleChange}
          isMember={isMember}
          handleSubmit={handleSubmit}
          setIsMember={setIsMember}
        />
      </div>
    </div>
  );
};
