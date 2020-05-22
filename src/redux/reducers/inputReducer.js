import * as actionsTypes from "../actions/actionsTypes";
import initialState from "./initialState";

export default function inputReducer (state = initialState.text , action) {
    switch (action.type) {
        case actionsTypes.INPUT_SEARCH:
            return action.payload
        default:
            return state;
    }
}