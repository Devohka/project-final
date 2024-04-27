import { addMovies } from "../moviesFechAPI";
export const  modalAddSent = (evt) => {
    evt.preventDefault();
    console.log(evt.currentTarget.elements.name.value)
    const newMovies = {
        title: evt.currentTarget.elements.name.value,
        genre: evt.currentTarget.elements.genre.value,
        director: evt.currentTarget.elements.director.value,
        year: evt.currentTarget.elements.year.value,
    };
    console.log(newMovies)
    addMovies(newMovies);
    
    evt.currentTarget.reset();
    return newMovies;
}