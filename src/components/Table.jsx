import React, { useState } from "react";
import "../index.css";
import { Button } from "./Button.jsx";
import meImg from "../assets/me.png";
import { Modal } from "./Modal.jsx";
import { ProjectCard } from "./ProjectCard";

export function Table() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (type) => setOpenModal(type);
  const handleClose = () => setOpenModal(null);

  const projects = [
    {
      image:
        "https://raw.githubusercontent.com/Caiobalduino/caio-balduino/refs/heads/main/image.png",
      title: "Meu Portfólio",
      techs: ["React", "Tailwind", "Vite"],
      url: "https://meu-portfolio.com",
    },
    {
      image:
        "https://private-user-images.githubusercontent.com/106744822/478703098-6545974f-6210-424a-b4dc-b6ba5a320977.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTUzNjg1MzYsIm5iZiI6MTc1NTM2ODIzNiwicGF0aCI6Ii8xMDY3NDQ4MjIvNDc4NzAzMDk4LTY1NDU5NzRmLTYyMTAtNDI0YS1iNGRjLWI2YmE1YTMyMDk3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxNlQxODE3MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04OGFkMDZhNmE4ODc3NzdkNTAwYTM0ZjZmODRhNTgzMjM1ZGU2YzRiNTI1YzU5YWZhYWVkYjIxOGVmNjUwODA3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2C2OlZItuaTJ5vE32bYgDWOAAzWZ59nglwV4x2lfPeQ",
      title: "5090 - Bootcamp KPMG",
      techs: ["HTML", "CSS"],
      url: "https://github.com/Caiobalduino/HousePrices/blob/main/house.ipynb",
    },
    {
      image:
        "https://raw.githubusercontent.com/Caiobalduino/boot-Taskly/refs/heads/main/imgs/tskly.png",
      title: "Taskly - Bootcamp KPMG",
      techs: ["HTML", "CSS", "JavaScript"],
      url: "https://boot-taskly.vercel.app/",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      title: "HousePrices",
      techs: ["Python", "Jupyter Notebook"],
      url: "https://github.com/Caiobalduino/HousePrices/blob/main/house.ipynb",
    },
  ];

  return (
    <section className="flex justify-center items-center h-screen text-center">
      <div className="flex flex-col items-center gap-3">
        {/* minha foto */}
        <img
          src={meImg}
          alt="Caio"
          className="w-30 h-30 rounded-full object-cover border border-gray-400 shadow-md"
        />

        {/* apresentação breve */}
        <h1 className="text-2xl font-semibold text-white">
          Olá, eu sou{" "}
          <span className="text-blue-400 font-(family-name:--font-source)">
            Caio Balduino
          </span>
        </h1>
        <p className="text-gray-300 max-w-sm">
          Profissional de tecnologia com experiência em desenvolvimento web e
          sólida formação acadêmica, com especialização em Big Data & Analytics.
        </p>

        {/* botões */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button label="Sobre Mim" onClick={() => handleOpen("sobre")} />
          <Button label="Experiências" onClick={() => handleOpen("exp")} />
          <Button label="Projetos" onClick={() => handleOpen("projetos")} />
          <Button label="Contato" onClick={() => handleOpen("contato")} />
        </div>
      </div>

      {/* Modal  */}
      <Modal isOpen={openModal === "sobre"} onClose={handleClose}>
        <h2 className="text-2xl text-blue-300 font-bold mb-4 text-center flex items-center justify-center gap-2">
          Sobre Mim <span>💡</span>
        </h2>
        <p className="text-gray-100 leading-relaxed text-justify">
          Olá! Sou{" "}
          <span className="text-white font-semibold">Caio Balduino</span>,
          atualmente me especializando em
          <span className="text-blue-300 font-medium">
            {" "}
            Big Data & Analytics
          </span>
          . Tenho paixão por transformar dados em{" "}
          <span className="text-blue-200 font-medium">
            insights estratégicos
          </span>{" "}
          e criar soluções práticas que façam a diferença.
        </p>
        <p className="text-gray-200 mt-3 leading-relaxed text-justify">
          Minha abordagem combina curiosidade, análise detalhada e prática
          aplicada, sempre buscando entender problemas complexos e traduzi-los
          em resultados claros. Adoro aprender novas tecnologias e explorar
          métodos inovadores para otimizar processos.
        </p>
        <p className="text-gray-400 mt-3 text-sm text-center">
          Acredito que dados bem interpretados podem contar histórias poderosas
          e inspirar decisões mais inteligentes. ✨
        </p>
      </Modal>

      <Modal isOpen={openModal === "exp"} onClose={handleClose}>
        <h2 className="text-xl text-white font-bold mb-2">Experiências</h2>
        <p className="text-gray-200"></p>
      </Modal>

      <Modal isOpen={openModal === "projetos"} onClose={handleClose}>
        <h2 className="text-xl text-white font-bold mb-4">Projetos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </Modal>

      <Modal isOpen={openModal === "contato"} onClose={handleClose}>
        <h2 className="text-xl text-white font-bold mb-2">Contato</h2>
        <p className="text-gray-200"></p>
      </Modal>
    </section>
  );
}
