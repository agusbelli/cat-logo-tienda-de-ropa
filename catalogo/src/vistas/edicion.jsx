import '../CatalogoDigital.css';
import { useDispatch, useSelector } from "react-redux";
import ProductoEditable from '../componentes/productoEditable';
import { useEffect } from 'react';
import { getProductos } from '../redux/actions/actionsProductos';
import Login from '../componentes/login/login';


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
      <h1 className='titulo'>Panel de Edicion</h1>
        
        {productos?.map(producto => (
          <ProductoEditable  key={producto.id} producto={producto} />
          ))}
      </div>
    )
    :(<div className="productos-container">
      <Login />
      </div>)
    }
      
  </div>
)
}

export default Edicion;