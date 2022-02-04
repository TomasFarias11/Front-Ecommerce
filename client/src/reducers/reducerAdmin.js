import {GET_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, GET_CATEGORY_ID, ADD_CATEGORY} from "../actions/actionAdmin"


const initialState={
	category:[],
	categoryId:[],
	
}

export default function reducerAdmin(state=initialState, action){
	switch(action.type){
		case GET_CATEGORY:
		return{
			...state,
			category:action.payload,
			}
		case ADD_CATEGORY:
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
		case GET_CATEGORY_ID:
			return{
				...state,
				categoryId:action.payload
			}
		default:
			return state;
	}
 
}