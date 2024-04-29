export const UrlComment = `http://localhost:3000/comments`;

const boxComment = document.querySelector(".box-comment");
const formComment = document.querySelector(".form-comment");

const openBtnComment = document.querySelector(".btn-comment");

import { fetchUrl } from './boxComment';
import { createComment } from './boxComment';
import { addComment } from './boxComment';


fetchUrl(UrlComment)
    .then(data =>
        data.json()
    ).then(data =>
        // console.log(data)
        createComment(data)
    );


formComment.addEventListener("submit", (e) => {
    e.preventDefault();
    const newComment = {
        text: e.currentTarget.elements.comment.value,
    };

    e.currentTarget.reset();
    return addComment(newComment);

});

openBtnComment.addEventListener("click", () => {
    boxComment.style.display = "block";
});
