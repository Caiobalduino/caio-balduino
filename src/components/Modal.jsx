import React from "react";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-11/12 max-w-lg p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-blue-400 transition-colors text-xl font-bold"
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}
