import { PRE_PAGO } from "../actions/actionMercadoPago";


const initialState={
	compra:[],
	
}

export default function reducerMercadoPago(state=initialState, action){
	switch(action.type){
		case PRE_PAGO:
		return{
			...state,
			compra:action.payload,
			}		
		default:
			return state;
	}
 
}