import * as actionsTypes from "./actionsTypes";

export function addCart(item) {
    return {
        type:actionsTypes.ADD_CART_ITEM,
        payload : item
    }
}