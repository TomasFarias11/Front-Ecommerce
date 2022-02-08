
import {GET_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY, GET_CATEGORY_ID, ADD_CATEGORY, EDIT_USER_BANE} from "../actions/actionAdmin"
import {GET_USERS} from "../actions/actionAdmin"
import {DELETE_USER} from "../actions/actionAdmin"
import { EDIT_USER } from "../actions/actionAdmin"



const initialState={
	category:[],
	categoryId:[],
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
		case EDIT_USER_BANE:
			return {
				...state,
				users:action.payload
			}
		default:
			return state;
	}
 
}