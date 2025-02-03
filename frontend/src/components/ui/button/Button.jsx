import React from "react";

export function Button({ children, onClick, className, variant = "default" }) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all";
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600 text-white",
    outline: "border border-gray-500 text-gray-300 hover:border-white hover:text-white",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
