import axios from 'axios';
const deleteId = document.querySelector(".delete-input-id");
const deleteBtn = document.querySelector(".delete-btn");
 deleteBtn.addEventListener("click", async (e) => {

 
  console.log(deleteId.value);
  //? then()
  // fetch(`http://localhost:3000/movies/${deleteId.value}`,{ method: "DELETE"} );
  //? async/await
  // await fetch(`http://localhost:3000/movies/${deleteId.value}`, {
  //   method: "DELETE",
  // });
  await axios.delete(`http://localhost:3000/movies/${deleteId.value}`);
});