import axios from "axios";

export const PRE_PAGO = 'PRE_PAGO';
export const PAGAR = 'PAGAR';
export const PUT_ORDER = "PUT_ORDER"


export function loadPrePago (producto) {
    window.localStorage.setItem('todojunto', JSON.stringify(producto))
    return (dispatch)=>{
        return dispatch(
            {
                type: PRE_PAGO,
                payload:producto
            }
        )
    }
};

export function pagar(preference) {
    return async(dispatch)=>{
        try {
            const mp = await axios.post(`/mercadopago/sale/`, preference)
            // console.log('url',mp.data.response.init_point)
            // console.log('WHAT...?',mp)
            return dispatch({
                type: PAGAR, 
                payload: mp.data.response.init_point
            })
        } catch (err) {
            console.log(err)
        }
    }
};

export function sendMail(cliente) {
    return async (dispatch)=>{
        try {
            await axios.post('/mercadopago/callreception',cliente);
        }
        catch (err) {
            console.log(err)
        }
    }
};

export function updateOrder (idUser, payload) {
    console.log('?????',payload)
    return async function (dispatch) {
        try {
            await axios.put(`/order/update/${idUser}`, payload)
            /* const {data} = await axios.get(`/order/${idUser}`)
            console.log('la data de la orden', data[0]) */
            return dispatch(
                {
                    type: PUT_ORDER, payload
                }
            )
        } catch (err) {
            console.log(err)
        }
    }
}