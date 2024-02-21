import { useEffect, useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Producto from './componentes/producto';
import './CatalogoDigital.css';
import logo from "../public/logo.png"

import credentials from './credentials/client_secret_651032404759-rjjjqnfhfsmufvptaembju559673rgc2.apps.googleusercontent.com.json'; // Ruta al archivo JSON de credenciales

const SPREADSHEET_ID = '1xbD2v9B6xq52aZyS-vO5w8L0K23fzDX1qevKu5hRRe8';

const App = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
      await doc.useServiceAccountAuth(credentials);
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows();
      const data = rows.map(row => ({
        id: row.id,
        nombre: row.nombre,
        foto: row.foto,
        fotoDorso: row.fotoDorso,
        disponible: row.disponible === 'true',
      }));
      setProductos(data);
    }
    getProducts();
  }, []);

  return (
    <div className="catalogo-container">
      <header className="header">
        {/* Icono de la marca */}
        <img className="brand-icon" src={logo} alt="Icono de la marca" />
      </header>
      <div className="productos-container">
        <h2 className='titulo'>NUESTRO CATALOGO</h2>
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      <footer className="footer">
        {/* Pie de página con tu nombre */}
        <p>desarrollado por aaaaaa</p>
      </footer>
    </div>
  );
};

export default App;