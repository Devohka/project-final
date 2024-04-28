import '../delete/deleteModalMovies';
import {createProductDelete} from '../create/createModalDelete';
const deleteModal = document.querySelector(".modal-delete");
const deletBtn = document.querySelector(".btn-modal-delete");
const backdropDelete = document.querySelector(".backdrop-delete");

deletBtn.addEventListener("click", () => {
console.log(1)

deleteModal.innerHTML = createProductDelete();
});

