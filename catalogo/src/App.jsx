import { Routes, Route } from "react-router-dom";
import './CatalogoDigital.css';
import logo from "../public/logo.png"
import Catalogo from './vistas/catalogo';
import Edicion from './vistas/edicion';


const App = () => {
  return (
    <>
    <div className="catalogo-container">
      <header className="header">
        {/* Icono de la marca */}
        <img className="brand-icon" src={logo} alt="Icono de la marca" />
      </header>
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/carcassedicion" element={<Edicion />} />
          </Routes>
      <footer className="footer">
        {/* Pie de página con tu nombre */}
        <p>desarrollado por ssssaaa</p>
      </footer>
    </div>
    </>

  );
};

export default App;
