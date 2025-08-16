import React from "react";

export function Button({ label }) {
  return (
    <button
      className="px-14 py-2 cursor-pointer text-lg font-medium text-white border border-gray-400 rounded-lg bg-transparent hover:bg-gray-700 hover:text-white transition-colors"
    >
      {label}
    </button>
  );
}