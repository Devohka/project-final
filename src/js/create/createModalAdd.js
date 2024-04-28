export const makeMarkUpAddModal = () => {
    const formElement = `<form class="add-movies__form">
      <input
        type="text"
        placeholder="title"
        class="add-movies__input movies-name"
        name="name"
      />
      <input
        type="text"
        placeholder="genre"
        class="add-movies__input movies-genre"
        name="genre"
      />
      <input
        type="text"
        placeholder="director"
        class="add-movies__input movies-director"
        name="director"
      />
      <input
      type="text"
      placeholder="year"
      class="add-movies__input movies-year"
      name="year"
    />
      <button type="submit" class="sumbitModalBtn item_action-btn">Add</button>
    </form>`;
    return formElement;
};