import * as actionsTypes from "./actionsTypes";

export function changeInput (text) {
    return {
        type : actionsTypes.INPUT_SEARCH,
        payload : text
    }
}