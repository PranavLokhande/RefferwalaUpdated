import React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-2xl shadow-lg border border-gray-700 bg-gray-800 p-6 ${className}`}>
      {children}
    </div>
  );
}
