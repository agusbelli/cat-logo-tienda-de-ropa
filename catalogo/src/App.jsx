import './CatalogoDigital.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import logo from "../public/logo.png"
import Catalogo from './vistas/catalogo';
import Edicion from './vistas/edicion';


const App = () => {
  return (
    <BrowserRouter>
    <div className="catalogo-container">
      <header className="header">
        {/* Icono de la marca */}
        <img className="brand-icon" src={logo} alt="Icono de la marca" />
      </header>
      <Route path="/" element={<Catalogo />} />
      <Route path="/carcass-edicion" element={<Edicion />} />
      <footer className="footer">
        {/* Pie de página con tu nombre */}
        <p>desarrollado por aaaaaa</p>
      </footer>
    </div>
    </ BrowserRouter>

  );
};

export default App;
