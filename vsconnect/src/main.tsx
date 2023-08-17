import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import Cadastrodev from "./pages/Cadastrodev";
import Listadevs from "./pages/Listadevs";
import Cadastroserv from "./pages/Cadastroserv";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="cadastrodev" element={<Cadastrodev />} />
        <Route path="listadevs" element={<Listadevs />} />
        <Route path="cadastroserv" element={<Cadastroserv />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
