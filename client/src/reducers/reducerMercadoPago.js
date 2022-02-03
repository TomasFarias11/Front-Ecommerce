import { PRE_PAGO, PAGAR } from "../actions/actionMercadoPago";


const initialState={
	compra:[],
	url:[]
	
}

export default function reducerMercadoPago(state=initialState, action){
	switch(action.type){
		case PRE_PAGO:
			return{
				...state,
				compra:action.payload,
			}
		case PAGAR:
			// console.log('action',action.payload)
			return{
				...state,
				url:action.payload,
			}	
		default:
			return state;
	} 
}