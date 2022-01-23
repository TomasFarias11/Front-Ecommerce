import {
    GET_PRODUCTS,
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_BY_ID,
    GET_PRODUCT_BY_CATEGORY,
    GET_REVIEWS,
    POST_REVIEW,
    PUT_REVIEW,
    ORDERAZ,
    ORDERZA,
    MIN_PRICE,
    MAX_PRICE,
    minPrice
} from '../actions/actionProducts'


const initialState2={
	products:[],
    allProducts: [],
    productId: [],
    productsByCategory:[],
    reviews: []
}

export default function reducerProducts(state=initialState2, action){
    let productsAux = state.products.map(p => p);
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
            case ORDERAZ: /* A-Z */
            const orderAZ = productsAux.sort((prev, post) => {
                if (prev.name < post.name) return -1;
                else if (prev.name > post.name) return 1;
                else return 0
            });
            return {
                ...state,
                products: orderAZ,
            }
            case ORDERZA: /* A-Z */
            const orderZA = productsAux.sort((prev, post) => {
                if (prev.name < post.name) return 1;
                else if (prev.name > post.name) return -1;
                else return 0
            });
            return {
                ...state,
                products: orderZA,
            }
            case MIN_PRICE: /* A-Z */
            const minPrice = productsAux.sort((prev, post) => {
                if (prev.price < post.price) return -1;
                else if (prev.price > post.price) return 1;
                else return 0
            });
            return {
                ...state,
                products: minPrice,
            }
            case MAX_PRICE: /* A-Z */
            const maxPrice = productsAux.sort((prev, post) => {
                if (prev.price < post.price) return 1;
                else if (prev.price > post.price) return -1;
                else return 0
            });
            return {
                ...state,
                products: maxPrice,
            }

            //  -------      ESTOS SON LAS CASE REVIEW
            case GET_REVIEWS:
                return {
                    ...state,
                    reviews: action.payload 
                }
            case POST_REVIEW:
                return {
                    ...state,
                }
            case PUT_REVIEW:
                return {
                    ...state,
                    
                }

		default:
			return state;
	}
 
}