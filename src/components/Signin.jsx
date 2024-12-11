import React from "react";
import Input from "./Input";
import EmailIcon from "../icons/EmailIcon";
import PasswordIcon from "../icons/PasswordIcon";
import { Link } from "react-router-dom";
import PasswordShowIcon from "../icons/PasswordShowIcon";
function Signin() {
  return (
    <>
      <Input
        type="email"
        startIcon={<EmailIcon />}
        placeholder="email"
        name="email"
        value=""
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value=""
        startIcon={<PasswordIcon />}
        endIcon={<PasswordShowIcon />}
      />
      <div className="flex justify-center gap-4 mb-4">
        <h1 className="text-gray-800">Don't have an account ? </h1>
        <Link
          to={"/signup"}
          className="text-purple-600 underline decoration-solid decoration-purple-500"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}

export default Signin;
