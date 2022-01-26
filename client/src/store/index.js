import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import reducerProducts from "../reducers/reducerProducts";
import reducerCart from "../reducers/reducerCart";

const reducers = combineReducers({
    firstRed: reducerProducts, 
    secondRed: reducerCart
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;