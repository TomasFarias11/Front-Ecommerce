import { PRE_PAGO, PAGAR, PUT_ORDER } from "../actions/actionMercadoPago";


const initialState={
	compra:[],
	url:[],
	a:[]
	
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
		case PUT_ORDER:
			// console.log('action',action.payload)
			return{
				...state,
				a:action.payload,
			}
		default:
			return state;
	} 
}