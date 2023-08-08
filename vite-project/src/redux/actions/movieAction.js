import axios from "axios";
import { Actiontypes } from "../actionTypes";


export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2RlMGU2ZWY5NWMzM2ExY2I5YjMyOWY3MzIyMmEwMSIsInN1YiI6IjY0ZDA5NmY4ZDlmNGE2MDNiNTRhNDU5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3ozp_yXbmiDnJkmB5eKK12qX_HjjYxHyJv4zWJhulsc'
    }
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";


export const getFilms = () => (dispatch) => {

    axios
        .get("/movie/popular", options)
        .then((res) =>
            dispatch({
                type: Actiontypes.GET_FILMS,
                payload: res.data.results,
            })
        );
};

export const getGenres = () => (dispatch) => {
    axios
        .get("/genre/movie/list", options)
        .then((res) => dispatch({
            type: Actiontypes.GET_GENRES,
            payload: res.data.genres
        })
        );
};