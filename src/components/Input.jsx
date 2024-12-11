import React, { useState } from "react";
import UserNameIcon from "../icons/UserNameIcon";
import PasswordShowIcon from "../icons/PasswordShowIcon";
import PasswordHideIcon from "../icons/PasswordHideIcon";

function Input({
  type,
  name,
  startIcon,
  value,
  placeholder,
  id,
  onChange,
  accept,
  endIcon,
  setPasswordVisibility,
  passwordVisibility,
}) {
  return (
    <div className="relative flex items-center gap-2 border w-full border-gray-400 bg-gray-200  mb-4 px-3">
      {type === "password" && startIcon && endIcon && (
        <>
          <div>{startIcon}</div>
          <input
            type={type}
            name={name}
            defaultValue={value}
            placeholder={placeholder}
            id={id}
            accept={accept}
            onChange={onChange}
            className="w-full rounded-sm bg-gray-200 placeholder:text-gray-800 placeholder:opacity-60 outline-none  py-2 "
          />{" "}
          <div
            className="cursor-pointer"
            onClick={() => setPasswordVisibility((prev) => !prev)}
          >
            {passwordVisibility ? <PasswordShowIcon /> : <PasswordHideIcon />}
          </div>
        </>
      )}
      {type != "password" && startIcon && (
        <>
          <div>{startIcon}</div>
          <input
            type={type}
            name={name}
            defaultValue={value}
            placeholder={placeholder}
            id={id}
            accept={accept}
            onChange={onChange}
            className="w-full rounded-sm bg-gray-200 placeholder:text-gray-800 placeholder:opacity-60 outline-none  py-2 "
          />
        </>
      )}
    </div>
  );
}

export default Input;
