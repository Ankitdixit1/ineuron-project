import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// //tokem autorization code to fetch the data
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};
//fetching data from api and passing headers which have token 
//this token is required for fetching data from TMDB in params we pass some information 
export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};