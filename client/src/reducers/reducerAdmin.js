import {GET_CATEGORY} from "../actions/actionAdmin"


const initialState={
	admin:[],
	category:[],
	
}

export default function reducerAdmin(state=initialState, action){
	switch(action.type){
		case GET_CATEGORY:
		return{
			...state,
			category:action.payload,
			}
		default:
			return state;
	}
 
}