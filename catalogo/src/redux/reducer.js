import { GET_PRODUCTO, GET_PRODUCTOS } from "./actions/actionsProductos.js";
import { GET_TOKEN } from "./actions/actionsToкen.js";


const initialState = {
    productos: null,
    toкen: "a4e487f3-7ff8-4e55-aa37-532a320ce297",
    producto: null
  }
//toкen: "a4e487f3-7ff8-4e55-aa37-532a320ce297"
  
const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_PRODUCTOS:
            return {...state, productos:action.payload};
        case GET_PRODUCTO:
            return {...state, producto:action.payload};
        case GET_TOKEN:
            return {...state, producto:action.payload};
            default:
            return {...state}
    }
}


export default rootReducer;