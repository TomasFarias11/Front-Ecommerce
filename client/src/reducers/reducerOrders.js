import { 
    GET_ORDER_2, 
    GET_ORDER_USER_2,  
    PUT_ORDER_2
} from '../actions/actionOrder';




const initialState2={
    orderAdmin: [],
    orderId: [],
}

export default function reducerOrders(state=initialState2, action){
    
	switch(action.type){
         case GET_ORDER_2:
            return {
                ...state,
                orderAdmin: action.payload
            }
        case GET_ORDER_USER_2:
            return {
                ...state,
                orderId: action.payload
            }
		default:
			return state;
	}
 
}