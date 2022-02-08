import { GET_ORDER_2, GET_ORDER_USER_2, ORDER_ASC, ORDER_DESC, PUT_ORDER_2} from '../actions/actionOrder';




const initialState2={
    order: [],
    orderId: [],
}

export default function reducerOrders(state=initialState2, action){
    // let productsAux = state.products.map(p => p);
    // let productsAux2 = state.products.map(p => p);
    let ordersRed = state.order.map(el => el)
    console.log(ordersRed, "ordenes en el reducer de jhon")
	switch(action.type){
        case GET_ORDER_2:
            return {
                ...state,
                order: action.payload
            }
        case GET_ORDER_USER_2:
            return {
                ...state,
                orderId: action.payload
            }
        case ORDER_ASC:
            const orderAsc = ordersRed.sort((prev, post) => {
                if (prev.id < post.id) return -1;
                else if (prev.id > post.id) return 1;
                else return 0
            });
            return{
                ...state,
                order: orderAsc
            }
        case ORDER_DESC:
            const orderDesc = ordersRed.sort((prev, post) => {
                if (prev.id < post.id) return 1;
                else if (prev.id > post.id) return -1;
                else return 0
            });
            return{
                ...state,
                order: orderDesc
            }

        case PUT_ORDER_2:
            return {
                ...state,
                order: [action.payload]
            }
		default:
			return state;
	}
 
}