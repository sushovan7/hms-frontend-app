import Input from "./Input";
import UserNameIcon from "../icons/UserNameIcon";
import EmailIcon from "../icons/EmailIcon";
import FirstnameIcon from "../icons/FirstnameIcon";
import PasswordIcon from "../icons/PasswordIcon";
import PasswordShowIcon from "../icons/PasswordShowIcon";
import { Link } from "react-router-dom";
import { useState } from "react";
function Signup() {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <>
      <Input
        type="text"
        placeholder="Username"
        name="username"
        value=""
        startIcon={<UserNameIcon />}
      />
      <Input
        type="text"
        placeholder="Firstname"
        name="Firstname"
        value=""
        startIcon={<FirstnameIcon />}
      />
      <Input
        type="text"
        placeholder="Lastname"
        name="lastname"
        value=""
        startIcon={<FirstnameIcon />}
      />
      <Input
        type="email"
        startIcon={<EmailIcon />}
        placeholder="email"
        name="email"
        value=""
      />
      <Input
        type={passwordVisibility ? "password" : "text"}
        placeholder="Password"
        name="password"
        value=""
        setPasswordVisibility={setPasswordVisibility}
        passwordVisibility={passwordVisibility}
        startIcon={<PasswordIcon />}
        endIcon={<PasswordShowIcon />}
      />
      <div className="flex justify-center gap-4 mb-4">
        <h1 className="text-gray-800">Already have an account ? </h1>
        <Link
          to={"/signin"}
          className="text-purple-600 underline decoration-solid decoration-purple-500"
        >
          Sign In
        </Link>
      </div>
    </>
  );
}

export default Signup;
