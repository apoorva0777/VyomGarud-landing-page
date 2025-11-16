import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="container-xl mx-auto w-full">
        <About />
        <Capabilities />
        <Highlights />
      </main>
      <ContactFooter />
    </div>
  );
}
