import Producto from "../componentes/producto";
import remera1 from "../../public/remeras/remera1.jpeg"
import remera2 from "../../public/remeras/remera2.jpeg"
import remera3 from "../../public/remeras/remera3.jpeg"
import remera4 from "../../public/remeras/remera4.jpeg"
import remera5 from "../../public/remeras/remera5.jpeg"
import remera6 from "../../public/remeras/remera6.jpeg"
import remera7 from "../../public/remeras/remera7.jpeg"
import remera8 from "../../public/remeras/remera8.jpeg"
import remera9 from "../../public/remeras/remera9.jpeg"
import '../CatalogoDigital.css';

const Catalogo = ()=>{
    // Arreglo de objetos de ejemplo para probar los componentes
    const productos = [
      {
        id: 1,
        nombre: 'Remera blanca',
        foto: remera1,
        fotoDorso: remera1,
        disponible: true
      },
      {
        id: 2,
        nombre: 'Remera negra',
        foto: remera2,
        fotoDorso: remera2,
        disponible: true
      },
      {
        id: 3,
        nombre: 'Remera azul',
        foto: remera3,
        fotoDorso: remera3,
        disponible: false
      },
      {
        id: 4,
        nombre: 'Remera blanca',
        foto: remera4,
        fotoDorso: remera4,
        disponible: true
      },
      {
        id: 5,
        nombre: 'Remera negra',
        foto: remera5,
        fotoDorso: remera5,
        disponible: true
      },
      {
        id: 6,
        nombre: 'Remera azul',
        foto: remera6,
        fotoDorso: remera6,
        disponible: false
      },
      {
        id: 7,
        nombre: 'Remera blanca',
        foto: remera7,
        fotoDorso: remera7,
        disponible: true
      },
      {
        id: 8,
        nombre: 'Remera negra',
        foto: remera8,
        fotoDorso: remera8,
        disponible: true
      },
      {
        id: 9,
        nombre: 'Remera azul',
        foto: remera9,
        fotoDorso: remera9,
        disponible: false
      }
      // Agrega más objetos de producto según sea necesario
    ];
return(
    <div className="productos-container">
    <h2 className='titulo'>NUESTRO CATALOGO</h2>
    {productos.map(producto => (
      <Producto key={producto.id} producto={producto} />
    ))}
  </div>
)
}

export default Catalogo;