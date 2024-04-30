
const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".searchs-input");
const boxSearchs = document.querySelector(".box-searchs");
const buttonsListEl = document.querySelector(".buttons__list");
import { Url } from "../moviesFechAPI";

searchBtn.addEventListener("click", () => {
    boxSearchs.style.display = "block";
});

input.addEventListener("input", (e) => {
    fetch(Url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        if (e.currentTarget >= 2 && e.currentTarget <= 10) {
            buttonsListEl.style.display = "block";
            data.forEach((movies) => {
                buttonsListEl.insertAdjacentHTML(
                    "beforeend",
                    `<li class="movies__item">
                       <button class="movies__button">${movies.title}</button>
                    </li>`
                );
            });
        };
        buttonsListEl.addEventListener("click", (e) => {
            if (e.target.nodeName === "LI" || e.target.nodeName === "UL") {
                return;
              }
            buttonsListEl.style.display = "none";
           
          });
        
    });

}, 500);
