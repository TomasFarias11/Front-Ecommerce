import {GET_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY} from "../actions/actionAdmin"


const initialState={
	category:[],
	
}

export default function reducerAdmin(state=initialState, action){
	switch(action.type){
		case GET_CATEGORY:
		return{
			...state,
			category:action.payload,
			}
		case EDIT_CATEGORY:
			return{
				...state,
				category:action.payload
			}
		case DELETE_CATEGORY:
			return{
				...state,
				category:action.payload
			}
		default:
			return state;
	}
 
}