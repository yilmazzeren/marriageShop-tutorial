
import * as actionsTypes from "../actions/actionsTypes";
import initialState from "./initialState";

export default function addCartReducer (state = initialState.cart , action) {
    switch (action.type) {
        case actionsTypes.ADD_CART_ITEM:
            return action.payload
        default:
            return state;
    }
}