import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
