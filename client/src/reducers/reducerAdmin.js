import {GET_CATEGORY} from "../actions/actionAdmin"
import {GET_USERS} from "../actions/actionAdmin"
import {DELETE_USER} from "../actions/actionAdmin"


const initialState={
	admin:[],
	category:[],
	users:[],
	
}

export default function reducerAdmin(state=initialState, action){
	switch(action.type){
		case GET_CATEGORY:
		return{
			...state,
			category:action.payload,
			}

		case GET_USERS:
			return {
				...state,
				users:action.payload,
			}
			
		case DELETE_USER:
			state.users = state.users.filter(user => user.id !== action.payload)
			 return {
				...state,
				users:action.payload,
			}
		default:
			return state;
	}
 
}