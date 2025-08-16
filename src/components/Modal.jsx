import React from "react";

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="relative w-[90%] max-w-4xl max-h-[90vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl p-6 overflow-y-auto transform transition-all duration-500 ease-out 
                  opacity-0 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-blue-400 transition"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
