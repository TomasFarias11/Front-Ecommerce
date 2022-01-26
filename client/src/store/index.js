import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import reducerProducts from "../reducers/reducerProducts";
import reducerAdmin from "../reducers/reducerAdmin";
import reduceSearch from "../reducers/reduceSearch";

const reducers = combineReducers({
    firstRed: reducerProducts, 
    secondRed: reducerAdmin,
    thirdRed: reduceSearch
})
const store = createStore(reducers, composeWithDevTools(applyMiddleware(Thunk)));

export default store;