import * as actionsTypes from "./actionsTypes";

export function getProductsSuccess(products) {
  return {
    type: actionsTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getProducts() {
  return function (dispatch) {
    let url = "http://localhost:3300";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
