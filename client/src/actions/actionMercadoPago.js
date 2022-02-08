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
            await axios.post('/mercadopago/sendnotification',cliente);
        }
        catch (err) {
            console.log(err)
        }
    }
};