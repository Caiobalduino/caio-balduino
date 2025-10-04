import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const I18nContext = createContext();

const DICT = {
  pt: {
    weekdayLocale: "pt-BR",
    hero: {
      hello: "Olá, eu sou",
      role:
        "Profissional de tecnologia com experiência em desenvolvimento web e sólida formação acadêmica, com especialização em Big Data & Analytics.",
    },
    buttons: { about: "Sobre Mim", exp: "Experiências", projects: "Projetos", contact: "Contato" },
    modals: {
      about: "Sobre Mim",
      exp: "Experiências",
      projects: "Projetos",
      contact: "Contato",
      contactCta: "Vamos conversar? Respondo rápido. 💬",
      profiles: "Perfis profissionais",
      copyEmail: "Clique para copiar",
      emailCopied: "E-mail copiado! 📋",
    },
    about: {
      p1: `Olá! Sou Caio Balduino, atualmente me especializando em Big Data & Analytics. Tenho paixão por transformar dados em insights estratégicos e criar soluções práticas que façam a diferença.`,
      p2: `Minha abordagem combina curiosidade, análise detalhada e prática aplicada, sempre buscando entender problemas complexos e traduzi-los em resultados claros. Adoro aprender novas tecnologias e explorar métodos inovadores para otimizar processos.`,
      foot: `Acredito que dados bem interpretados podem contar histórias poderosas e inspirar decisões mais inteligentes. ✨`,
    },
    exp: {
      job1: {
        title: "Auxiliar Administrativo",
        meta: "Prefeitura Municipal de Igarapava · Maio 2025 – Atual",
        body:
          "Atuação no controle de estoque farmacêutico no sistema público de saúde, organizando e registrando o inventário de medicamentos, além de monitorar a distribuição de remédios gratuitos à população.",
      },
      bootcamp: {
        title: "Academy ERP & LowCode Solutions",
        meta: "SoulCode Academy & KPMG · Jan 2025 – Abr 2025",
        body:
          "Bootcamp focado em soluções ERP e LowCode, com experiências práticas em SAP ABAP/BTP, Microsoft Power Platform (Power BI, Power Apps, Power Automate), SQL Server e Node.js, aplicando conceitos de automação, desenvolvimento de aplicações e integração de sistemas.",
      },
      taskly: {
        title: "Projeto Taskly - Gerenciamento de Tarefas",
        meta: "Mar 2025 – Abr 2025",
        intro:
          "Sistema desenvolvido no projeto final do Bootcamp SoulCode & KPMG, unindo tecnologias modernas para organizar tarefas, acompanhar projetos e otimizar fluxos de trabalho.",
        bullets: {
          sap: "SAP ABAP: criação e monitoramento de tarefas/projetos com tratamento de exceções.",
          web: "HTML, CSS, JS: página web com identidade visual, usabilidade e formulário de contato.",
          powerapps: "PowerApps: app integrado ao SAP para gerenciar e visualizar tarefas.",
        },
        closing:
          "Além do desenvolvimento técnico, foram trabalhadas competências como resolução de problemas, trabalho em equipe, modelagem de sistemas e integração entre plataformas.",
      },
      recos: {
        title: "Recomendações ✨",
        q1: `“Caio é um profissional dedicado, proativo e criativo. Sua resiliência e colaboração foram essenciais para o sucesso do projeto.”`,
        a1: "— Leonardo R. Vergani",
        q2: `“Demonstra domínio técnico e mentalidade colaborativa. Sempre atento aos detalhes, disposto a compartilhar conhecimento e ajudar a equipe a evoluir.”`,
        a2: "— Carla Franco",
      },
    },
  },

  en: {
    weekdayLocale: "en-US",
    hero: {
      hello: "Hi, I’m",
      role:
        "Technology professional with experience in web development and a solid academic background, specializing in Big Data & Analytics.",
    },
    buttons: { about: "About Me", exp: "Experience", projects: "Projects", contact: "Contact" },
    modals: {
      about: "About Me",
      exp: "Experience",
      projects: "Projects",
      contact: "Contact",
      contactCta: "Let’s talk? I reply quickly. 💬",
      profiles: "Professional profiles",
      copyEmail: "Click to copy",
      emailCopied: "Email copied! 📋",
    },
    about: {
      p1: `Hi! I’m Caio Balduino, currently specializing in Big Data & Analytics. I’m passionate about turning data into strategic insights and building practical solutions that make a real impact.`,
      p2: `My approach blends curiosity, deep analysis, and hands-on practice — always aiming to understand complex problems and translate them into clear results. I love learning new technologies and exploring innovative methods to optimize processes.`,
      foot: `I believe well-interpreted data can tell powerful stories and inspire smarter decisions. ✨`,
    },
    exp: {
      job1: {
        title: "Administrative Assistant",
        meta: "Municipality of Igarapava · May 2025 – Present",
        body:
          "Responsible for supporting pharmaceutical stock control in the public healthcare system: organizing and recording medication inventory and monitoring the distribution of free medicines to the population.",
      },
      bootcamp: {
        title: "Academy ERP & LowCode Solutions",
        meta: "SoulCode Academy & KPMG · Jan 2025 – Apr 2025",
        body:
          "Bootcamp focused on ERP and Low-Code solutions with hands-on practice in SAP ABAP/BTP, Microsoft Power Platform (Power BI, Power Apps, Power Automate), SQL Server, and Node.js — applying automation, app development, and system integration concepts.",
      },
      taskly: {
        title: "Taskly Project — Task Management",
        meta: "Mar 2025 – Apr 2025",
        intro:
          "Capstone project developed at SoulCode & KPMG, bringing modern technologies together to organize tasks, track project progress, and streamline workflows.",
        bullets: {
          sap: "SAP ABAP: creation and monitoring of tasks/projects with exception handling.",
          web: "HTML, CSS, JS: marketing website with visual identity, usability and contact form.",
          powerapps: "PowerApps: app integrated with SAP to manage and view tasks.",
        },
        closing:
          "Beyond the technical work, we strengthened skills such as problem-solving, teamwork, system modeling and cross-platform integration.",
      },
      recos: {
        title: "Recommendations ✨",
        q1: `"Caio is a dedicated, proactive and creative professional. His resilience and collaboration were essential to the project’s success."`,
        a1: "— Leonardo R. Vergani",
        q2: `"He shows strong technical skills and a collaborative mindset. Always attentive to detail and willing to share knowledge and help the team grow."`,
        a2: "— Carla Franco",
      },
    },
  },
};

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    return navigator.language?.startsWith("pt") ? "pt" : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en-US";
  }, [lang]);

  const t = useMemo(() => {
    const table = DICT[lang] || DICT.pt;
    const fn = (path) => path.split(".").reduce((acc, k) => acc?.[k], table) ?? path;
    fn.locale = table.weekdayLocale;
    return fn;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
