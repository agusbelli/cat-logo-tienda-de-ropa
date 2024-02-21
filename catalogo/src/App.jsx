
import Producto from './componentes/producto';
import remera1 from "../public/remeras/remera1.jpeg"


const App = () => {
  const productos = [
    {id:1, nombre: "remera1", foto:remera1, fotoDorso: remera1 }
  ]

  return (
    <div className="catalogo-container">
      {/* Resto del código */}
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
