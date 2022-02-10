import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import reducerProducts from "../reducers/reducerProducts";
import reducerAdmin from "../reducers/reducerAdmin";
import reducerUserData from "../reducers/reducerUserData";
import reduceSearch from "../reducers/reduceSearch";
import reducerMercadoPago from '../reducers/reducerMercadoPago'
import reducerOrders from "../reducers/reducerOrders";
// import reducerCart from "../reducers/reducerCart";

const reducers = combineReducers({
    firstRed: reducerProducts, 
    secondRed: reducerUserData,
    thirdRed: reduceSearch,
    fourthRed: reducerAdmin,
    fifthRed: reducerMercadoPago,
    sixRed: reducerOrders,
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;