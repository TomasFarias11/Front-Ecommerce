import{ 
	LOGIN_GOOGLE,
	LOCAL_LOGIN_USER,
	GET_USER_ID,
	EDIT_USER,
 } from'../actions/actionUser'
 
const initialState={
	userData:[],
	userId: {}
}

export default function reducer(state=initialState, action){
	switch(action.type){
		case LOGIN_GOOGLE:
			return {
				...state,
                userData: action.payload
			}
	    case LOCAL_LOGIN_USER:
			return {
				...state,
                userData: action.payload
			}
		case GET_USER_ID:
			return {
				...state,
				userId: action.payload
			}
		case EDIT_USER:
			return {
				...state,
				userId: action.payload
			}
		default:
			return state;
	}
 
}