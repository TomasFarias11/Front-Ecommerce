import axios from "axios";
import swal from 'sweetalert';

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT_BY_NAME = "GET_PRODUCT_BY_NAME"
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_IPHONE = "GET_IPHONE"
export const GET_PRODUCT_BY_CATEGORY = "GET_PRODUCT_BY_CATEGORY" 
export const SET_PRODUCTS = "SET_PRODUCTS"
export const CREATE_USERS = 'CREATE_USERS'
export const LIST_USERS = 'LIST_USERS'

//  ------  ACA ESTA LOS CASE DE LAS REVIEW
export const GET_REVIEWS = "GET_REVIEWS"
export const POST_REVIEW = "POST_REVIEW"
export const PUT_REVIEW = "PUT_REVIEW"

export const ORDERAZ = "ORDER_AZ";
export const ORDERZA = "ORDER_ZA";
export const MIN_PRICE = "MIN_PRICE";
export const MAX_PRICE = "MAX_PRICE";

// ------ CARRITO


export const ADD_CART = "ADD_CART"
export const DEL_CART = 'DEL_CART'
export const DEL_ALL_CART = 'DEL_ALL_CART'
export const MOD_CART = 'MOD_CART'
export const QUANTITY_ITEM = 'QUANTITY_ITEM'
export const SET_CART = 'SET_CART'
export const SET_CARTNAV_ON = 'SET_CARTNAV_ON'
export const SET_CARTNAV_OFF = 'SET_CARTNAV_OFF'
// ------ CASE OF USERS

export const USER_CREATE = "USER_CREATE";


// ------- ORDERS

export const GET_ORDER = "GET_ORDER"
export const POST_ORDER = "POST_ORDER"
export const GET_ORDER_OPEN = "GET_ORDER_OPEN"
export const GET_ORDER_USER = "GET_ORDER_USER"
export const SET_CART_USER = "SET_CART_USER"
export const PUT_ORDER = "PUT_ORDER"

export function getProducts () {
    return async function (dispatch) {
        try {
            let products = await axios.get("/products");
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
        try {
            let product = await axios.get(`/products?name=${name}`)
            return dispatch({
                type: "GET_PRODUCT_BY_NAME",
                payload: product.data
            })
        } catch (err) {
            swal("No se encontraron productos con el nombre ingresado", {
                buttons: false,
                icon: 'error',
                timer: 1500,
              })
        }

    }
}

export function getProductById (id) {
    return async function (dispatch) {
        try {

            let product = await axios.get(`/products/detail/${id}`)
            return dispatch({
                type: "GET_PRODUCT_BY_ID",
                payload: product.data
            })
        } catch (err) {
                swal("No se encontraron los detalles del producto", {
                    buttons: false,
                    icon: 'error',
                    timer: 1500,
                  })
        }
    }
}

export function getProductByCategory (category) {
    return async function (dispatch) {
        let products = await axios.get(`/products/category/${category}`)
        return dispatch({
            type: "GET_PRODUCT_BY_CATEGORY",
            payload: products.data
        })
    }
}

/* Order (A-Z) */
export const orderAZ = () => { return { type: ORDERAZ } }

/* Order (Z-A) */
export const orderZA = () => { return { type: ORDERZA } }

export const minPrice = () => { return { type: MIN_PRICE } }

export const maxPrice = () => { return { type: MAX_PRICE } }

export function postReview (idProduct, idUser, payload) {
    return async function (dispatch) {
        try {
            await axios.post(`/review/products/${idProduct}/user/${idUser}`, payload )
            let {data} = await axios.get(`/review/products/${idProduct}`)
            return dispatch({type: POST_REVIEW, payload: data})
        } catch (err) {
            console.log(err);
        }
    }
}

export function putReview (idProduct, idUser, payload) {
    return async function (dispatch) {
        try {
            await axios.put(`/review/products/${idProduct}/user/${idUser}`, payload )
            let {data} = await axios.get(`/review/products/${idProduct}`)
            return dispatch({type: PUT_REVIEW, payload: data})
        } catch (err) {
            console.log(err);
        }
    }
}

export function getReviews (id) {
    return async function (dispatch) {
        try {
            let {data} = await axios.get(`/review/products/${id}`)
            return dispatch({
                type: GET_REVIEWS,
                payload: data
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}

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

export function setProducts (payload) {
    return async function (dispatch) {
        try {
            return dispatch({type: SET_PRODUCTS, payload})
        }
        catch (err) {
            console.log(err)
        }
    }
}
// SE CREA LA ACCIÓN PARA LA CREACIÓN DEL USUARIO

export function postUserCreate (input){
    return async function(dispatch){
        try {
            let response = await axios.post("user", input)
            console.log(input, "input de las acciones")
            return response
            // return dispatch({type: USER_CREATE, input})
            
        } catch (error) {
            console.log(error)
        }
    }
}

export function setCartOn () {
    return async function (dispatch) {
        try {
            return dispatch({type: SET_CARTNAV_ON})
        } catch (err) {
            console.log(err)
        }
    }
}

export function setCartOff () {
    return async function (dispatch) {
        try {
            return dispatch({type: SET_CARTNAV_OFF})
        } catch (err) {
            console.log(err)
        }
    }

}

export function createOrder (idUser, payload) {
    return async function (dispatch) {
        try {
            await axios.post(`/order/${idUser}`, payload)
            const order = await axios.get(`/order/${idUser}`)
            return dispatch({type: POST_ORDER, payload: order.data})
        } catch (err) {
            console.log(err);
        }
    }
}

export function getOrderUser (idUser) {
    return async function (dispatch) {
        try {
            const order = await axios.get(`/order/${idUser}`);
            console.log('orden de la action', order)
            return dispatch({type: GET_ORDER_USER, payload: order.data})
        } catch (err) {
            console.log(err)
        }
    }
}

export function getOpenOrderUser (idUser) {
    return async function (dispatch) {
        try {
            const order = await axios.get(`/order/user/${idUser}`)
            return dispatch({type: GET_ORDER_OPEN, payload: order.data})
        } catch (err) {
            console.log(err);
        }
    }
}

export function setCartUser (payload) {
    return async function (dispatch) {
        try {
            return dispatch({type: SET_CART_USER, payload})
        } catch (err) {
            console.log(err)
        }
    }
}
export function listarUsers(){
    return function(dispatch){
        axios.get("/users")
        .then(res => res.data)
        .then(data => {
            dispatch({type: LIST_USERS, payload: data})
        })
        .catch(error => alert(error, "algo salio mal"))
    }
}

export function editOrder (idUser, payload) {
    return async function (dispatch) {
        try {
            await axios.put(`/order/${idUser}`, payload)
            const {data} = await axios.get(`/order/${idUser}`)
            console.log('la data de la orden', data[0])
            return dispatch({type: PUT_ORDER, payload:data[0]})
        } catch (err) {
            console.log(err)
        }
    }
}