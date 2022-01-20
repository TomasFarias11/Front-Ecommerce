import {createStore, applyMiddleware} from "redux";

import { combineReducers } from "redux";
import Thunk from "redux-thunk";
import reducerProducts from "../reducers/reducerProducts";
import reducerRaro from "../reducers/reducerRaro";

const reducers = combineReducers({
    firstRed: reducerProducts, secondRed:  reducerRaro
})
const store = createStore(reducers, applyMiddleware(Thunk));

export default store;