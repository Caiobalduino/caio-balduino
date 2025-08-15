import React from "react";

export function SplashScreen({ fadeOut }) {
  return (
    <div
      className={`flex items-center justify-center h-screen transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <h1 className="text-white text-2xl font-bold animate-slideUpFade">
        Bem-vindo à minha área de trabalho!
      </h1>
    </div>
  );
}
