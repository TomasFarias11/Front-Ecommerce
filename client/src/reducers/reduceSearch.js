import {
    GET_PRODUCT_BY_NAME,
    ORDERAZ,
    ORDERZA,
    MIN_PRICE,
    MAX_PRICE
} from '../actions/actionProducts'


const initialState2={
	products2:[],
}

export default function reducerProducts(state=initialState2, action){
    let productsAux = state.products2.map(p => p);
	switch(action.type){
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                products2: action.payload
            }

        case ORDERAZ: /* A-Z */
            const orderAZ = productsAux.sort((prev, post) => {
                if (prev.name < post.name) return -1;
                else if (prev.name > post.name) return 1;
                else return 0
            });
            return {
                ...state,
                products2: orderAZ,
            }
        case ORDERZA: /* A-Z */
            const orderZA = productsAux.sort((prev, post) => {
                if (prev.name < post.name) return 1;
                else if (prev.name > post.name) return -1;
                else return 0
            });
            return {
                ...state,
                products2: orderZA,
            }
        case MIN_PRICE: /* A-Z */
            const minPrice = productsAux.sort((prev, post) => {
                if (prev.price < post.price) return -1;
                else if (prev.price > post.price) return 1;
                else return 0
            });
            return {
                ...state,
                products2: minPrice,
            }
        case MAX_PRICE: /* A-Z */
            const maxPrice = productsAux.sort((prev, post) => {
                if (prev.price < post.price) return 1;
                else if (prev.price > post.price) return -1;
                else return 0
            });
            return {
                ...state,
                products2: maxPrice,
            }
		default:
			return state;
	} 
}