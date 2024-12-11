import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

import Signup from "../components/Signup";
import Signin from "../components/Signin";

function UserAuthForm({ type }) {
  return (
    <section className="h-[calc(100vh-8vh)] bg-gray-300 flex items-center justify-center">
      <form className="w-[80%]  max-w-[400px]">
        <h1 className="text-gray-800 text-4xl mb-8 capitalize text-center font-mono">
          {type === "signin" ? "Welcome Back :" : "Join Us Today :"}
        </h1>
        {type == "signup" ? (
          <div>
            <Signup />
            <div className="text-gray-200  font-bold  flex items-center justify-center">
              <Button
                text={"Sign Up"}
                variant={"primary"}
                size={"lg"}
                className="px-20 "
              />
            </div>
          </div>
        ) : (
          <div>
            <Signin />
            <div className="text-gray-200  font-bold  flex items-center justify-center">
              <Button
                text={"Log In"}
                variant={"primary"}
                size={"lg"}
                className="px-20 "
              />
            </div>
          </div>
        )}
      </form>
    </section>
  );
}

export default UserAuthForm;
