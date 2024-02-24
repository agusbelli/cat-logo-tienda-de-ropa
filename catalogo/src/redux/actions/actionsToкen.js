import axios from "axios";

export const GET_TOKEN = "GET_TOKEN"

export const getToken = (userData) => {
    return async function (dispatch){
        const datos = userData;
        const data = await axios.post(`http://localhost:3000/server/login`, datos );
        const codigo = data.data;
        dispatch({ type: GET_TOKEN, payload: codigo });
    };
};