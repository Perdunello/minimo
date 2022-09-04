import {applyMiddleware, combineReducers, createStore} from "redux";
import commonReducer from "./commonReducer";
import thunk  from "redux-thunk";
const reducers = combineReducers({
    common:commonReducer
})
const store = createStore(reducers,applyMiddleware(thunk))

export default store