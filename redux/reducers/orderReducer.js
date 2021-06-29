import {
    ADD_PRODUCT_ORDER
} from "../actions/orderAction";

const initialState = [];

export default function orderReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT_ORDER:
            return [action.payload, ...state];
        default:
            return state;
    }
}