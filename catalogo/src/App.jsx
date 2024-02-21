import { useEffect, useState } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Producto from './componentes/producto';

const SPREADSHEET_ID = 'TU_ID_DE_HOJA_DE_CALCULO';
const CLIENT_EMAIL = 'TU_EMAIL_DE_SERVICIO';
const PRIVATE_KEY = 'TU_CLAVE_PRIVADA';

const App = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
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
      {/* Resto del código */}
      <div className="productos-container">
        <h2 className='titulo'>NUESTRO CATALOGO</h2>
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
      {/* Resto del código */}
    </div>
  );
};

export default App;

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
