import axios from "axios";

export const GET_TOKEN = "GET_TOKEN"

export const getProductos = () => {
    return async function (dispatch){
        const data = await axios.post(`http://localhost:3000/login`);
        const codigo = data.data;
        dispatch({ type: GET_TOKEN, payload: codigo });
    };
};