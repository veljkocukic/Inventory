import React, { useEffect, useState } from "react";
import "../../sass/layouts/_login.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  IUser,
  loginUser,
  registerUser,
} from "../../feautures/user/userSlice";
import { AppDispatch } from "../../store";
import { LoginCard } from "./LoginCard";
import { RegisterCard } from "./RegisterCard";
import { Button } from "../../components/Button";
import { toast } from "react-toastify";

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isMember, setIsMember] = useState(false);

  const [inputValues, setInputValues] = useState<IUser>({
    username: "",
    email: "",
    password: "",
    organizationName: "",
  });

  const { userToken } = useSelector((store: any) => store.user);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearErrors());
    setInputValues((prev) => {
      const copy = { ...prev };
      return { ...copy, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { email, username, password } = inputValues;

    if (isMember) {
      // if (!email || !username || !password) {
      //   toast.warning("Please, fill out required fields.");
      // }
      // console.log("first");
      dispatch(registerUser(inputValues));

      return;
    }
    // if (!email || !password) {
    //   toast.warning("All fields are required");
    //   return;
    // }
    const loginValues = { email, password };

    dispatch(loginUser(loginValues));
    navigate("/");
  };

  const changeSlide = () => {
    setInputValues({
      username: "",
      email: "",
      password: "",
      organizationName: "",
    });
    dispatch(clearErrors());
    setIsMember(!isMember);
  };

  useEffect(() => {
    if (userToken) return navigate("/");
  }, [userToken]);

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
