const Url = "http://localhost:3000/movies";
import { createProductsMarkUp } from "./create/createCardMovies";
import axios from 'axios';
const listCard = document.querySelector(".card_movies-list");

export const fetchMovies = async () => {
    try {
      const resp = await axios.get(Url);
      createProductsMarkUp(resp.data, listCard);
    } catch (err) {
      console.log(err);
    }
  };