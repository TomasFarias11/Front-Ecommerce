import axios from "axios";
export const GET_ORDER_2 = "GET_ORDER_2"
export const GET_ORDER_USER_2 = "GET_ORDER_USER_2"
export const PUT_ORDER_2 = "PUT_ORDER_2"



export function getOrder2 () {
    return async function (dispatch) {
        try {
            const order = await axios.get(`/order`)
            return dispatch({
                type: GET_ORDER_2, 
                payload: order.data
            })     
        } catch (err) {
            console.log(err);
        }
    }
}

export function getOrderUserId2 (idUser) {
    return async function (dispatch) {
        try {
            const order = await axios.get(`/order/${idUser}`);
            return dispatch({
                type: GET_ORDER_USER_2, 
                payload: order.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function editOrder2 (idUser, payload) {
    return async function (dispatch) {
        try {
            await axios.put(`/order/${idUser}`, payload)
            const {data} = await axios.get(`/order/${idUser}`)
            return dispatch({
                type: PUT_ORDER_2, 
                payload:data[0]
            })
        } catch (err) {
            console.log(err)
        }
    }
}


