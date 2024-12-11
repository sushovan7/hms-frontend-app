import React from "react";

const Button = ({
  variant = "primary" || "secondary",
  size = "sm" || "md" || "lg",
  text,
  startIcon,
  endIcon,
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles = "flex rounded-md justify-center  items-center ";

  // Variant styles
  const variantStyles = {
    primary: "bg-purple-600  text-white",
    secondary: "bg-purple-300 text-purple-600 ",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {startIcon && <span className="icon-start">{startIcon}</span>}
      {text}
      {endIcon && <span className="icon-end">{endIcon}</span>}
    </button>
  );
};

export default Button;
