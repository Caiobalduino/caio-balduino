import React, { useState, useEffect } from "react";
import "./index.css";
import { Table } from "./components/Table";
import { SplashScreen } from "./components/SplashScreen";
import { Weather } from "./components/Weather";
import { Section } from "./Section";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 4000);

    const timer2 = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="m-0 p-0 box-border w-full bg-zinc-950">
      {showSplash ? <SplashScreen fadeOut={fadeOut} /> : <Section />}
    </div>
  );
}

export default App;
