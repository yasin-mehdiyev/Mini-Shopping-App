import * as actionTypes from './actionTypes';

export function getProductSuccess(products) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    };
}

export function createProductSuccess(product) {
    return {
        type: actionTypes.CREATE_PRODUCTS_SUCCESS,
        payload: product
    };
}

export function updateProductSuccess(product) {
    return {
        type: actionTypes.UPDATE_PRODUCTS_SUCCESS,
        payload: product
    };
}

export function getProducts(categoryId) {
    return function(dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url = url + "?categoryId=" + categoryId;
        }
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getProductSuccess(result)));
    }
}

export function saveProductApi(product) {
    let url = "http://localhost:3000/products/";
    return fetch(url + (product.id || ""), {
        method: product.id ? "PUT" : "POST",
        body: JSON.stringify(product)
    }).then(handleResponse).catch(handleError);
}

export function saveProduct(product) {
    return function(dispatch) {
        return saveProductApi(product)
            .then(savedProducts => {
                product.id ?
                    dispatch(updateProductSuccess(savedProducts)) :
                    dispatch(createProductSuccess(savedProducts))
            })
            .catch(error => {
                throw error;
            })
    }
}

export async function handleResponse(reposne) {
    if (response.ok) {
        response.json();
    }

    const error = await response.text();
    throw new Error(error);
}

export function handleError(error) {
    console.log("It happened any unknown error");
    throw error;
}