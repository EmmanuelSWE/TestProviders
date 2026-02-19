import axios from "axios";

export const getAxiosInstance = () => {

    const baseURL =  `${import.meta.env.VITE_API_URL}`;

    console.log(` the base url is ${baseURL}`);

    return axios.create({
        baseURL,
        headers:{
            'Content-Type': 'application/json',
            'x-api-key': `${import.meta.env.VITE_API_KEY}`
        }
    });
}