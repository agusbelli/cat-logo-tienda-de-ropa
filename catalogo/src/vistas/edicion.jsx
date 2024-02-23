import '../CatalogoDigital.css';
import { useDispatch, useSelector } from "react-redux";
import ProductoEditable from '../componentes/productoEditable';
import { useEffect } from 'react';
import { getProductos } from '../redux/actions/actionsProductos';


const Edicion = ()=>{

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductos())
  },[dispatch])
  const toкen = useSelector((state)=>state.toкen)
  const productos = useSelector((state)=>state.productos)

return(
  <div>    
    {toкen
    ?(
      <div className="productos-container">    
      <h1 className='titulo'>Panel de productos</h1>
        
        {productos?.map(producto => (
          <ProductoEditable  key={producto.id} producto={producto} />
          ))}
      </div>
    )
    :(<p>No tienes autorización para ver esta página.</p>)
    }
      
  </div>
)
}

export default Edicion;