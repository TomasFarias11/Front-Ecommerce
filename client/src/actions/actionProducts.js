import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME"
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_IPHONE = "GET_IPHONE"
export const GET_PRODUCT_BY_CATEGORY = "GET_PRODUCT_BY_CATEGORY"

export function getProducts () {
    return async function (dispatch) {
        try {
            let products = await axios.get("http://localhost:3001/products");
            // console.log('la accion', products.data);
            return dispatch({
                type: "GET_PRODUCTS",
                payload: products.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getProductByName (name) {
    return async function (dispatch) {
        let product = await axios.get(`http://localhost:3001/products?name=${name}`)
        return dispatch({
            type: "GET_PRODUCT_BY_NAME",
            payload: product.data
        })
    }
}

export function getProductById (id) {
    return async function (dispatch) {
        let product = await axios.get(`http://localhost:3001/products/details/${id}`)
        return dispatch({
            type: "GET_PRODUCT_BY_ID",
            payload: product.data
        })
    }
}

export function getProductByCategory (category) {
    return async function (dispatch) {
        let products = await axios.get(`http://localhost:3001/products/category/${category}`)
        console.log('estos son los productos filtrados', products)
        return dispatch({
            type: "GET_PRODUCT_BY_CATEGORY",
            payload: products.data
        })
    }
}