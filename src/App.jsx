import React, { useState, useEffect } from "react";
import "./index.css";
import { Table } from "./components/Table";
import { SplashScreen } from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);

    const storedName = localStorage.getItem("name");
    if (storedName) {
      setUserName(storedName);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="m-0 p-0 box-border w-full h-screen bg-zinc-950">
      {showSplash ? <SplashScreen userName={userName} /> : <Table />}
    </div>
  );
}

export default App;
