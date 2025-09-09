//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Institucional from "./pages/Institucional.jsx";
import Atividades from "./pages/Atividades.jsx";
import Material from "./pages/Material.jsx";
import Contato from "./pages/Contato.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/material" element={<Material />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
