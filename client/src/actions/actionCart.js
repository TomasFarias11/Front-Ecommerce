import axios from "axios";


export const ADD_CART = "ADD_CART"
export const DEL_CART = 'DEL_CART'
export const DEL_ALL_CART = 'DEL_ALL_CART'
export const MOD_CART = 'MOD_CART'
export const QUANTITY_ITEM = 'QUANTITY_ITEM'
export const SET_CART = 'SET_CART'
export const GET_PRODUCTS = 'GET_PRODUCTS'


// export function getProducts1 () {
//     return async function (dispatch) {
//         try {
//             let products = await axios.get("http://localhost:3001/products");
//             // console.log('la accion', products.data);
//             return dispatch({
//                 type: "GET_PRODUCTS",
//                 payload: products.data
//             })
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }

export function addToCart (id) {
    return async function (dispatch) {
        try {
            dispatch({
                type: ADD_CART,
                payload: id
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function delCart(id){
    return async function (dispatch){
        try {
            return dispatch({
                type: DEL_CART,
                payload: id
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export function delAllCart () {
    return async function (dispatch) {
        try {
            return dispatch({
                type: DEL_ALL_CART
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}

export const quantity_item = (payload) => dispatch => {
    try {
        return dispatch({type:QUANTITY_ITEM, payload})
    } catch (err){
        console.log(err)
    }
}

export function setCart (payload) {
    return async function (dispatch) {
        try {
            return dispatch({type: SET_CART, payload})
        }
        catch (err) {
            console.log(err)
        }
    }
} 