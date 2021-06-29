import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
} from "../actions/productAction";

import productData from "../../data"

const initialState = productData;

export default function productReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_PRODUCT:
            return [action.payload, ...state];
        case EDIT_PRODUCT:
            return state.map((p) => {
                if (p.id === action.payload.id) {
                    return {
                        ...p,
                        category: action.payload.category,
                        title: action.payload.title,
                        description: action.payload.description,
                        price: action.payload.price,
                    };
                } else return p;
            });
        case DELETE_PRODUCT:
            return state.filter((p) => p.id != action.payload);
        default:
            return state;
    }
}