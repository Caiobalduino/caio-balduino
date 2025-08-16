import React from "react";
import { Table } from "./components/Table";
import { SplashScreen } from "./components/SplashScreen";
import { Weather } from "./components/Weather";

export function Section() {
  return (
    <section className="relative h-screen flex justify-center items-center">
      <Weather />
      <Table />
    </section>
  );
}
