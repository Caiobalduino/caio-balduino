import React from "react";
import { useI18n } from "../i18n";

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <div
        className="inline-flex items-center gap-2 bg-white/5 border border-white/10
                   rounded-xl p-1 shadow-md"
        role="group"
        aria-label="Language switch"
      >
        <button
          type="button"
          onClick={() => setLang("pt")}
          className={`px-3 py-1 rounded-lg transition text-sm font-medium flex items-center gap-2 ${
            lang === "pt"
              ? "bg-white/15 text-white"
              : "text-gray-300 hover:bg-white/10"
          }`}
        >
          <span className="fi fi-br"></span> PT
        </button>

        <button
          type="button"
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded-lg transition text-sm font-medium flex items-center gap-2 ${
            lang === "en"
              ? "bg-white/15 text-white"
              : "text-gray-300 hover:bg-white/10"
          }`}
        >
          <span className="fi fi-us"></span> EN
        </button>
      </div>
    </div>
  );
}
