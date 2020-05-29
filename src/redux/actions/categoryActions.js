import * as actionsTypes from "./actionsTypes";

export function getCategoriesSuccess(categories) {
  return {
    type: actionsTypes.GET_CATEGORIES_SUCCESS,
    payload: categories
  };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3300/kategori";

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
