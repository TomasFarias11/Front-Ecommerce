import axios from "axios";
import swal from 'sweetalert';

import {
	ADD_CART,
	DEL_CART,
	DEL_ALL_CART,
	QUANTITY_ITEM,
	SET_CART,
} from "../actions/actionCart.js"

import {
	GET_PRODUCTS
} from "../actions/actionProducts.js"



const initialState={
	cart:[],
	products: [],
	
}

export default function reducer(state=initialState, action){
	switch(action.type){
		// case GET_PRODUCTS:
        //     state.products.length = 0;
		// 	console.log('este loccccc', state.products)
        //     return {
        //         ...state,
        //         products: state.products.concat(action.payload),
        //     }

		case ADD_CART:
            let existe = state.cart.filter(el => el.id === action.payload)
            if(existe.length===1) return state
            let newItem = state.products.find((p) => p.id === action.payload)
            return{
                ...state,
                cart: [...state.cart, {...newItem, quantity: 1}],
            }
		
		case DEL_CART:
			return{
				...state,
				cart: state.cart.filter(p => p.id !== action.payload),
			}

		case DEL_ALL_CART:
			return {
				...state,
				cart: [],
				// localCart: window.localStorage.removeItem('carrito')
			}

		default:
			return state;
	}
 
}