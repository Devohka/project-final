
import { createModalInfo } from "../create/crateModalInfo";
import data from "../../movies.json";

const listCard = document.querySelector(".card_movies-list");
const backdropRef = document.querySelector(".modal-info-backdrop");
// const closeModalBtnRef = document.querySelector(".close-modal__btn");

listCard.addEventListener("click", (evt) => {
    console.log(1);
    if (evt.target.nodeName === "LI") {
        const moviesIndex = Array.from(listCard.children).indexOf(evt.target);
        backdropRef.innerHTML = createModalInfo(data.movies[moviesIndex]);
        const closeBtn = document.querySelector(".close-modal__btn");
        closeBtn.addEventListener("click", () => {
            backdropRef.innerHTML = "";
            backdropRef.classList.add("is-hidden");
        });
        backdropRef.classList.toggle("is-hidden");
        backdropRef.style.display = "block";
    }
});