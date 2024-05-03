export const createProductsMarkUp = (productsArr, list) => {
  productsArr.forEach((product) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="product__item">
        <img src="${product.img}" alt="poster-movies">
          <p class="product__text title-text">title: ${product.title}</p>
          <p class="product__text">year: ${product.year}</p>
          </li>`
    );
  });
};