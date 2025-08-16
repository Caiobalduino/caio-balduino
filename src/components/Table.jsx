import React from "react";
import "../index.css";
import { Button } from "./Button.jsx";
import meImg from "../assets/me.png"

export function Table() {
  return (
    <section className="flex justify-center items-center h-screen text-center">
      <div className="flex flex-col items-center gap-3">
        {/* minha foto */}
        <img
          src={meImg}
          alt="Caio"
          className="w-32 h-32 rounded-full object-cover border border-gray-400 shadow-md"
        />

        {/* apresentação breve */}
        <h1 className="text-2xl font-semibold text-white">
          Olá, eu sou <span className="text-blue-400 font-(family-name:--font-source)">Caio Balduino</span>
        </h1>
        <p className="text-gray-300 max-w-sm">
          Profissional de tecnologia com experiência em desenvolvimento web e
          sólida formação acadêmica, com especialização em Big Data & Analytics.
        </p>

        {/* botões */}
        <div className="flex flex-col gap-4 w-full max-w-xs font-(family-name:--font-source)">
          <Button label="Sobre Mim" />
          <Button label="Experiências" />
          <Button label="Projetos" />
          <Button label="Contato" />
        </div>
      </div>
    </section>
  );
}
