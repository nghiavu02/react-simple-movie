import React from "react";

const Button = ({
  className,
  onClick,
  children,
  bgColor = "primary",
  full = false,
}) => {
  let bgClassName = "";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      className={`${bgClassName} px-6 py-3 rounded-lg capitalize ${className} ${
        full ? "w-full" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
