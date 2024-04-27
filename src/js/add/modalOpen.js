import { makeMarkUpAddModal } from "../create/createModalAdd";
import { addMovies } from "../moviesFechAPI";
const modalBackdrop = document.querySelector(".modal-add");

export const modalAddOpen = async (evt) => {
    console.log(1)
  const backdrop = document.querySelector(".backdrop");
  backdrop.classList.remove("is-hidden");
  modalBackdrop.innerHTML = makeMarkUpAddModal();
  let length = 1;
  globalThis.addMoviesFormRef = document.querySelector(".add-movies__form");

  //? then()

  // fetch("http://localhost:3000/Moviess").then(res => res.json()).then(res => {
  //     length = res.length;
  // });

  //? async/await

  try {
    const resp = await fetch("http://localhost:3000/movies");
    const data = await resp.json();
    length = data.length;
  } catch (err) {
    console.log(err);
  }

  globalThis.addMoviesFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newMovies = {
      id: String(length + 1),
      title: evt.currentTarget.elements.name.value,
      genre: evt.currentTarget.elements.genre.value,
      director: evt.currentTarget.elements.director.value,
      year: evt.currentTarget.elements.year.value,
    };
    console.log(newMovies);
    addMovies(newMovies);
    evt.currentTarget.reset();
  });
};