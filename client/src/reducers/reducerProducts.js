import {
    GET_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_CATEGORY
} from '../actions/actionProducts'


const initialState2={
	products:[],
    allProducts: [],
    productId: [],
    
}

export default function reducerProducts(state=initialState2, action){
	switch(action.type){
        case GET_PRODUCTS:
            state.products.length = 0;
            state.allProducts.length = 0;

            return {
                ...state,
                products: state.products.concat(action.payload),
                allProducts: state.allProducts.concat(action.payload)
            }

        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                products: action.payload
            }

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                productId: action.payload
            }

        case GET_PRODUCT_BY_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
		default:
			return state;
	}
 
}