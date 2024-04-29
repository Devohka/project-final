import '../delete/deleteModalMovies';
const deleteModal = document.querySelector(".modal-delete");
const deletBtn = document.querySelector(".btn-modal-delete");
const backdropDelete = document.querySelector(".backdrop-delete");

deletBtn.addEventListener("click", () => {
console.log(1);
backdropDelete.style.display = "block";
});

