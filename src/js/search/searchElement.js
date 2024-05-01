

const input = document.querySelector(".searchs-input");
// const boxSearchs = document.querySelector(".box-searchs");
const buttonsListEl = document.querySelector(".buttons__list");
import { Url } from "../moviesFechAPI";
  

function searchElement(input) {
    fetch(Url)
    .then(res => res.json())
    .then(data => {
        function getOptions(word, data) {
            return data.filter(m => {
                 
                // Співпадає значення слова з значенням масиву
                const regex = new RegExp(word, 'gi');
                return m.title.match(regex)
            }); 
             
        };
        console.log(getOptions(input, data));
    });
};

input.addEventListener("input", (e) => {
    searchElement(e.currentTarget.value);
});




