import {
    ADD_PRODUCT_CART,
    DELETE_PRODUCT_CART,
    DELETE_CART
} from "../actions/cartAction";

const initialState = [];

export default function cartReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT_CART:
            return [action.payload, ...state];
        case DELETE_PRODUCT_CART:
            return state.filter((p) => p.id != action.payload);
        case DELETE_CART: 
            return state.splice(0, state.length);
        default:
            return state;
    }
}