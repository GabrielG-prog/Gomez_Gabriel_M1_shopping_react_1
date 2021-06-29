export const ADD_PRODUCT_ORDER = "ADD_PRODUCT_ORDER";

export const addProductOrder = (product) => {
    return {
        type: ADD_PRODUCT_ORDER,
        payload: product
    }
};
