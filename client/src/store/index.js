import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import reducerProducts from "../reducers/reducerProducts";
import reducerRaro from "../reducers/reducerRaro";
import reduceSearch from "../reducers/reduceSearch";

const reducers = combineReducers({
    firstRed: reducerProducts, 
    secondRed: reducerRaro,
    thirdRed: reduceSearch
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;