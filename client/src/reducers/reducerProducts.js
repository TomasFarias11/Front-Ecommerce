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
    minPrice,
    ADD_CART,
	  DEL_CART,
	  DEL_ALL_CART,
    SET_CART,
    SET_CARTNAV_ON,
    SET_CARTNAV_OFF,
    QUANTITY_ITEM,
    SET_PRODUCTS

} from '../actions/actionProducts'

import {DELETE_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT} from "../actions/actionAdmin"


const initialState2={
	products:[],
    allProducts: [],
    productId: [],
    productsByCategory:[],
    reviews: [],
    cart: [],
    cartNav: false
}

export default function reducerProducts(state=initialState2, action){
    let productsAux = state.products.map(p => p);
    let productsAux2 = state.productsByCategory.map(p => p);
	switch(action.type){
        case GET_PRODUCTS:
            state.products.length = 0;
            state.allProducts.length = 0;

            return {
                ...state,
                products: state.products.concat(action.payload),
                allProducts: state.allProducts.concat(action.payload)
            }

        /* case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                products: action.payload
            } */

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                productId: action.payload
            }

        case GET_PRODUCT_BY_CATEGORY:
            return {
                ...state,
                productsByCategory: action.payload
            }
            case ORDERAZ: /* A-Z */
            const orderAZ = productsAux2.sort((prev, post) => {
                if (prev.name < post.name) return -1;
                else if (prev.name > post.name) return 1;
                else return 0
            });
            return {
                ...state,
                productsByCategory: orderAZ,
            }
            case ORDERZA: /* A-Z */
            const orderZA = productsAux2.sort((prev, post) => {
                if (prev.name < post.name) return 1;
                else if (prev.name > post.name) return -1;
                else return 0
            });
            return {
                ...state,
                productsByCategory: orderZA,
            }
            case MIN_PRICE: /* A-Z */
            const minPrice = productsAux2.sort((prev, post) => {
                if (prev.price < post.price) return -1;
                else if (prev.price > post.price) return 1;
                else return 0
            });
            return {
                ...state,
                productsByCategory: minPrice,
            }
            case MAX_PRICE: /* A-Z */
            const maxPrice = productsAux2.sort((prev, post) => {
                if (prev.price < post.price) return 1;
                else if (prev.price > post.price) return -1;
                else return 0
            });
            return {
                ...state,
                productsByCategory: maxPrice,
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
            case SET_CART:
                return {
                    ...state,
                    cart: action.payload
                }
            case SET_PRODUCTS:
                return {
                    ...state,
                    productsByCategory: action.payload
                }
            case SET_CARTNAV_ON:
                return {
                    ...state,
                    cartNav: true
                }
            case SET_CARTNAV_OFF:
                return {
                    ...state,
                    cartNav: false
                }
            case QUANTITY_ITEM: 
                return{
                    ...state,
                    cart: state.cart.map(el => {
                        if(el.id === action.payload.id){
                            return {
                                ...el,
                                quantity: action.payload.cantidad
                            }
                        }
                        return el
                    })
            }
            case DELETE_PRODUCT:
                state.allProducts = state.allProducts .filter(e => e.id !== action.payload)
                return{
                    ...state,
                    products: state.allProducts 
            }
            case ADD_PRODUCT:
                return {
                    ...state,
                    
                }
            case EDIT_PRODUCT:
                return {
                    ...state,     
            }
		default:
			return state;
	}
 
}