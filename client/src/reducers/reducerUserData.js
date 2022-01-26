import{ 
	LOGIN_GOOGLE,
	LOCAL_LOGIN_USER,
 } from'../actions/actionUser'
 
const initialState={
	userData:[],
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
		default:
			return state;
	}
 
}