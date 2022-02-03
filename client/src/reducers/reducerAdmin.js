import {GET_CATEGORY} from "../actions/actionAdmin"
import {GET_USERS} from "../actions/actionAdmin"
import {DELETE_USER} from "../actions/actionAdmin"
import { EDIT_USER } from "../actions/actionAdmin"


const initialState={
	category:[],
	users:[],
	allUsers:[]
	
}

export default function reducerAdmin(state=initialState, action){
	switch(action.type){
		case GET_CATEGORY:
		return{
			...state,
			category:action.payload,
			}

		case GET_USERS:
			state.users.length = 0;
            state.allUsers.length = 0;
			return {
				...state,
				users: state.users.concat(action.payload),
                allUsers: state.allUsers.concat(action.payload)
			}
			
		case DELETE_USER:
			 return {
				...state,
				users:action.payload,				
			}
		case EDIT_USER:
			return {
				...state,
				users:action.payload
			}
		default:
			return state;
	}
 
}