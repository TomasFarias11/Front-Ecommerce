import axios from "axios";

export const PRE_PAGO = 'PRE_PAGO';


export function loadPrePago (producto) {
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
            console.log('url',mp.data.response.init_point)
            console.log('WHAT...?',mp)
            return dispatch({
                type:'' , 
                payload: ''
            })
        } catch (err) {
            console.log(err)
        }
    }
};