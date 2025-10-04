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
        "https://private-user-images.githubusercontent.com/106744822/478703098-6545974f-6210-424a-b4dc-b6ba5a320977.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTUzNzI1MjcsIm5iZiI6MTc1NTM3MjIyNywicGF0aCI6Ii8xMDY3NDQ4MjIvNDc4NzAzMDk4LTY1NDU5NzRmLTYyMTAtNDI0YS1iNGRjLWI2YmE1YTMyMDk3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwODE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDgxNlQxOTIzNDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMmQzZWQ0MGYwYjhhYzg5ZjBlZjE2NTE3Mjg4OWI5MGZhMzY0NzFjOGEzY2Q1OTFlZjA5ZjA5YTBmODQzMDk4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OTAQSuCCVc4USmqd_yFSuNcpdP4G_cmzkVo-zVoKVuc",
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

  const EMAIL = "caiobalduinodev@hotmail.com";

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("E-mail copiado! 📋");
    } catch {
      alert("Não foi possível copiar agora.");
    }
  };

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
        <h2 className="text-2xl text-blue-300 font-bold mb-4 text-center flex items-center justify-center gap-2 font-(family-name:--font-source)">
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
        <h2 className="text-2xl text-blue-300 font-bold mb-6 text-center">
          Experiências 💼
        </h2>

        <div className="flex flex-col gap-6">
          {/* Prefeitura */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-white">
              Auxiliar Administrativo
            </h3>
            <p className="text-sm text-gray-400">
              Prefeitura Municipal de Igarapava · Maio 2025 – Atual
            </p>
            <p className="text-gray-200 mt-2 text-justify">
              Atuação no controle de estoque farmacêutico no sistema público de
              saúde, organizando e registrando o inventário de medicamentos,
              além de monitorar a distribuição de remédios gratuitos à
              população.
            </p>
          </div>

          {/* bootcamp */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-white">
              Academy ERP & LowCode Solutions
            </h3>
            <p className="text-sm text-gray-400">
              SoulCode Academy & KPMG · Jan 2025 – Abr 2025
            </p>
            <p className="text-gray-200 mt-2 text-justify">
              Bootcamp focado em soluções ERP e LowCode, com experiências
              práticas em SAP ABAP/BTP, Microsoft Power Platform (Power BI,
              Power Apps, Power Automate), SQL Server e Node.js, aplicando
              conceitos de automação, desenvolvimento de aplicações e integração
              de sistemas.
            </p>
          </div>

          {/* projeto que desenvolvi: Taskly */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-600/20 border border-blue-400/30 rounded-xl p-5 shadow-lg">
            <h3 className="text-lg font-semibold text-blue-300">
              Projeto Taskly - Gerenciamento de Tarefas
            </h3>
            <p className="text-sm text-gray-400">Mar 2025 – Abr 2025</p>
            <p className="text-gray-200 mt-2 text-justify">
              Sistema desenvolvido no projeto final do Bootcamp SoulCode & KPMG,
              unindo tecnologias modernas para organizar tarefas, acompanhar
              projetos e otimizar fluxos de trabalho.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 text-sm">
              <li>
                <span className="text-blue-300 font-medium">SAP ABAP:</span>{" "}
                criação e monitoramento de tarefas/projetos com tratamento de
                exceções.
              </li>
              <li>
                <span className="text-blue-300 font-medium">
                  HTML, CSS, JS:
                </span>{" "}
                página web com identidade visual, usabilidade e formulário de
                contato.
              </li>
              <li>
                <span className="text-blue-300 font-medium">PowerApps:</span>{" "}
                app integrado ao SAP para gerenciar e visualizar tarefas.
              </li>
            </ul>
            <p className="text-gray-400 mt-3 text-sm italic">
              Além do desenvolvimento técnico, foram trabalhadas competências
              como resolução de problemas, trabalho em equipe, modelagem de
              sistemas e integração entre plataformas.
            </p>
          </div>

          {/* recomendações */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-3">
              Recomendações ✨
            </h3>
            <blockquote className="border-l-4 border-blue-400 pl-3 mb-3">
              <p className="text-gray-200 text-sm italic">
                "Caio é um profissional dedicado, proativo e criativo. Sua
                resiliência e colaboração foram essenciais para o sucesso do
                projeto."
              </p>
              <p className="text-gray-400 text-xs mt-1">
                — Leonardo R. Vergani
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-blue-400 pl-3">
              <p className="text-gray-200 text-sm italic">
                "Demonstra domínio técnico e mentalidade colaborativa. Sempre
                atento aos detalhes, disposto a compartilhar conhecimento e
                ajudar a equipe a evoluir."
              </p>
              <p className="text-gray-400 text-xs mt-1">— Carla Franco</p>
            </blockquote>
          </div>
        </div>
      </Modal>

      <Modal isOpen={openModal === "projetos"} onClose={handleClose}>
        <h2 className="text-xl text-white font-bold mb-4 font-(family-name:--font-source)">
          Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </Modal>

      <Modal isOpen={openModal === "contato"} onClose={handleClose}>
        <h2 className="text-2xl text-blue-300 font-bold mb-2 text-center">
          Contato
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Vamos conversar? Respondo rápido. 💬
        </p>

        {/* perfis profissionais */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Caiobalduino"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                   text-gray-200 hover:bg-white/10 transition text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/caiobalduino/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                   text-gray-200 hover:bg-white/10 transition text-sm"
            >
              LinkedIn
            </a>
          </div>

          <p className="text-sm text-gray-400 text-center">
            Ou envie direto por e-mail:{" "}
            <button
              type="button"
              onClick={() => copy("caiobalduinodev@hotmail.com")}
              className="text-blue-300 hover:underline cursor-pointer"
              title="Clique para copiar"
            >
              caiobalduinodev@hotmail.com
            </button>
          </p>
        </div>
      </Modal>
    </section>
  );
}
