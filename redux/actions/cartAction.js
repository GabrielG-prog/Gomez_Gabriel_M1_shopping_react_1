export const ADD_PRODUCT_CART = "ADD_PRODUCT_CART";
export const DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART";
export const DELETE_CART = "DELETE_CART";

export const addProductCart = (product) => {
    return {
        type: ADD_PRODUCT_CART,
        payload: product
    }
};

export const deleteProductCart = (idProduct) => {
    return {
        type: DELETE_PRODUCT_CART,
        payload: idProduct
    };
};

export const deleteCart = () => {
    return {
          type: DELETE_CART,
    };
}