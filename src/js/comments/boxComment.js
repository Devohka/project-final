const listComment = document.querySelector(".list-comment");
import { UrlComment } from './postComment';


export function fetchUrl(UrlComment) {
    const data = fetch(UrlComment);
    return data;
};

export function createComment(data) {
    data.forEach((comments) => {
        listComment.insertAdjacentHTML(
            "beforeend",
            `<li class="item-comments">
              <p class="text-comments">${comments.text}</p>
            </li>`
        );
    });
};

export const addComment = (newComment) => {

    return fetch(UrlComment, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    }).then(res =>
        res.json()
    ).then(post =>
        console.log(post)
    ).catch(error =>
        console.log(error)
    );
};
