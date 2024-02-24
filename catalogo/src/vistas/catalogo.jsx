import Producto from "../componentes/producto";
import '../CatalogoDigital.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductos } from "../redux/actions/actionsProductos";
import LoadingComponent from "../componentes/loading/loading";

const Catalogo = ()=>{
    // Arreglo de objetos de ejemplo para probar los componentes
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductos())
    },[dispatch])

    const productos = useSelector((state)=>state.productos)
      // Agrega más objetos de producto según sea necesario
    
return(
    <div className="productos-container">
    <h2 className='titulo'>NUESTRO CATALOGO</h2>
    {productos
      ?productos.map(producto => (
      <Producto key={producto.id} producto={producto} />
    ))
    :(<LoadingComponent />)
    }
  </div>
)
}

export default Catalogo;