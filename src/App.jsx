import React, { useState, useEffect } from "react";
import "./index.css";
import { SplashScreen } from "./components/SplashScreen";
import { Section } from "./Section";
import { I18nProvider } from "./i18n";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 4000);
    const t2 = setTimeout(() => setShowSplash(false), 5000);
    return () => (clearTimeout(t1), clearTimeout(t2));
  }, []);

  return (
    <I18nProvider>
      <div className="m-0 p-0 box-border w-full bg-zinc-950">
        {showSplash ? <SplashScreen fadeOut={fadeOut} /> : <Section />}
      </div>
    </I18nProvider>
  );
}

export default App;
