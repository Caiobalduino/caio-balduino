import React from "react";
// import "../index.css";

export function SplashScreen({ userName }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1
        className={`
          text-white text-2xl font-bold
          animate-slideUpFade
        `}
      >
        Bem-vindo à minha área de trabalho{userName ? `, ${userName}` : ""}!
      </h1>
    </div>
  );
}
