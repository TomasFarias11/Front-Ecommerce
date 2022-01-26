import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import reducerProducts from "../reducers/reducerProducts";
import reducerUserData from "../reducers/reducerUserData";

const reducers = combineReducers({
    firstRed: reducerProducts, 
    secondRed: reducerUserData
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;