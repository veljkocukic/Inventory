import React from "react";
import { Input } from "../../components/Input";

export const LoginCard = ({ inputValues, handleChange, handleSubmit }: any) => {
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
      <button className="btn btn-border-1" onClick={handleSubmit}>
        Sign In
      </button>
    </section>
  );
};
