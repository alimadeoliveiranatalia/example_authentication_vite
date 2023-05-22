import axios from 'axios';

//config();

const apiUrl = import.meta.env.VITE_API_AUTENTICACAO_DEV

export const api =  axios.create({
    //baseURL: "http://localhost:3400"
    baseURL: apiUrl
    //baseURL: import.meta.env.API_AUTENTICACAO_PROD
});
