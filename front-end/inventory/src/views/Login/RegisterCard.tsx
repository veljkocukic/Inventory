import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const RegisterCard = ({
  inputValues,
  handleChange,
  isMember,
  handleSubmit,
  setIsMember,
}: any) => {
  return (
    <section className="register-card">
      <h2>Welcome to My Storage!</h2>

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
      <Input
        type="text"
        name="organizationName"
        labelText="Organization name"
        value={inputValues.organizationName}
        onChange={handleChange}
      />
      <Button
        className="btn btn-border-1"
        onClick={handleSubmit}
        text="Sign Up"
      />
    </section>
  );
};
