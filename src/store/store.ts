import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./productDetails/reducer";

const rootReducer = combineReducers({ product: productReducer });

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;