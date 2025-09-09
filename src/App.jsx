//import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Institucional from "./pages/Institucional.jsx";
import Atividades from "./pages/Atividades.jsx";
import Material from "./pages/Material.jsx";
import Videoaulas from "./pages/Videoaulas.jsx";
import Banco from "./pages/Banco.jsx";
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
          <Route path="/banco" element={<Banco />} />
          <Route path="/videoaulas" element={<Videoaulas />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
