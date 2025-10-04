import React, { useState } from "react";
import "../index.css";
import { Button } from "./Button.jsx";
import meImg from "../assets/me.png";
import { Modal } from "./Modal.jsx";
import { ProjectCard } from "./ProjectCard";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { useI18n } from "../i18n";
import bootcamp5090 from "../assets/5090.png";

export function Table() {
  const { t } = useI18n();
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (type) => setOpenModal(type);
  const handleClose = () => setOpenModal(null);

  const projects = [
    {
      image:
        "https://raw.githubusercontent.com/Caiobalduino/caio-balduino/refs/heads/main/image.png",
      title: "Meu Portfólio",
      techs: ["React", "Tailwind", "Vite"],
      url: "https://caio-balduino.vercel.app/",
    },
    {
      image: bootcamp5090,
      title: "5090 - Bootcamp KPMG",
      techs: ["HTML", "CSS"],
      url: "https://5090-feel-the-power.vercel.app/",
    },
    {
      image:
        "https://raw.githubusercontent.com/Caiobalduino/boot-Taskly/refs/heads/main/imgs/tskly.png",
      title: "Taskly - Bootcamp KPMG",
      techs: ["HTML", "CSS", "JavaScript"],
      url: "https://github.com/Caiobalduino/boot-Taskly",
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
      alert(t("modals.emailCopied"));
    } catch {
      alert("Não foi possível copiar agora.");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen text-center relative">
      <div className="flex flex-col items-center gap-3">
        {/* foto */}
        <img
          src={meImg}
          alt="Caio"
          className="w-30 h-30 rounded-full object-cover border border-gray-400 shadow-md"
        />

        {/* apresentação breve */}
        <h1 className="text-2xl font-semibold text-white">
          {t("hero.hello")}{" "}
          <span className="text-blue-400 font-(family-name:--font-source)">
            Caio Balduino
          </span>
        </h1>
        <p className="text-gray-300 max-w-sm">{t("hero.role")}</p>

        {/* botões */}
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button
            label={t("buttons.about")}
            onClick={() => handleOpen("sobre")}
          />
          <Button label={t("buttons.exp")} onClick={() => handleOpen("exp")} />
          <Button
            label={t("buttons.projects")}
            onClick={() => handleOpen("projetos")}
          />
          <Button
            label={t("buttons.contact")}
            onClick={() => handleOpen("contato")}
          />
        </div>
      </div>

      {/* switcher*/}
      <LanguageSwitcher />

      {/* Modal: Sobre */}
      <Modal isOpen={openModal === "sobre"} onClose={handleClose}>
        <h2 className="text-2xl text-blue-300 font-bold mb-4 text-center flex items-center justify-center gap-2 font-(family-name:--font-source)">
          {t("modals.about")} <span>💡</span>
        </h2>
        <p className="text-gray-100 leading-relaxed text-justify">
          {t("about.p1")}
        </p>
        <p className="text-gray-200 mt-3 leading-relaxed text-justify">
          {t("about.p2")}
        </p>
        <p className="text-gray-400 mt-3 text-sm text-center">
          {t("about.foot")}
        </p>
      </Modal>

      {/* Modal: Experiências */}
      <Modal isOpen={openModal === "exp"} onClose={handleClose}>
        <h2 className="text-2xl text-blue-300 font-bold mb-6 text-center">
          {t("modals.exp")} 💼
        </h2>

        <div className="flex flex-col gap-6">
          {/* Prefeitura */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-white">
              {t("exp.job1.title")}
            </h3>
            <p className="text-sm text-gray-400">{t("exp.job1.meta")}</p>
            <p className="text-gray-200 mt-2 text-justify">
              {t("exp.job1.body")}
            </p>
          </div>

          {/* Bootcamp */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-white">
              {t("exp.bootcamp.title")}
            </h3>
            <p className="text-sm text-gray-400">{t("exp.bootcamp.meta")}</p>
            <p className="text-gray-200 mt-2 text-justify">
              {t("exp.bootcamp.body")}
            </p>
          </div>

          {/* Projeto Taskly */}
          <div className="bg-gradient-to-r from-blue-900/40 to-blue-600/20 border border-blue-400/30 rounded-xl p-5 shadow-lg">
            <h3 className="text-lg font-semibold text-blue-300">
              {t("exp.taskly.title")}
            </h3>
            <p className="text-sm text-gray-400">{t("exp.taskly.meta")}</p>
            <p className="text-gray-200 mt-2 text-justify">
              {t("exp.taskly.intro")}
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-2 text-sm">
              <li>{t("exp.taskly.bullets.sap")}</li>
              <li>{t("exp.taskly.bullets.web")}</li>
              <li>{t("exp.taskly.bullets.powerapps")}</li>
            </ul>
            <p className="text-gray-400 mt-3 text-sm italic">
              {t("exp.taskly.closing")}
            </p>
          </div>

          {/* Recomendações */}
          <div className="bg-white/5 border border-white/20 rounded-xl p-4 shadow-md">
            <h3 className="text-lg font-semibold text-white mb-3">
              {t("exp.recos.title")}
            </h3>
            <blockquote className="border-l-4 border-blue-400 pl-3 mb-3">
              <p className="text-gray-200 text-sm italic">
                {t("exp.recos.q1")}
              </p>
              <p className="text-gray-400 text-xs mt-1">
                {t("exp.recos.a1")}
              </p>
            </blockquote>

            <blockquote className="border-l-4 border-blue-400 pl-3">
              <p className="text-gray-200 text-sm italic">
               {t("exp.recos.q2")}
              </p>
              <p className="text-gray-400 text-xs mt-1">{t("exp.recos.a2")}</p>
            </blockquote>
          </div>
        </div>
      </Modal>

      {/* Modal: Projetos */}
      <Modal isOpen={openModal === "projetos"} onClose={handleClose}>
        <h2 className="text-xl text-white font-bold mb-4 font-(family-name:--font-source)">
          {t("modals.projects")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </Modal>

      {/* Modal: Contato */}
      <Modal isOpen={openModal === "contato"} onClose={handleClose}>
        <h2 className="text-2xl text-blue-300 font-bold mb-2 text-center">
          {t("modals.contact")}
        </h2>
        <p className="text-gray-300 text-center mb-6">
          {t("modals.contactCta")}
        </p>

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
            {t.locale === "pt-BR"
              ? "Ou envie direto por e-mail:"
              : "Or email me directly:"}{" "}
            <button
              type="button"
              onClick={() => copy(EMAIL)}
              className="text-blue-300 hover:underline cursor-pointer"
              title={t("modals.copyEmail")}
            >
              {EMAIL}
            </button>
          </p>
        </div>
      </Modal>
    </section>
  );
}
