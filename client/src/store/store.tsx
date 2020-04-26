import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import { signInReducer } from "./signInReducer";

let reducers = combineReducers({
    signInPage: signInReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export type AppStateType = ReturnType<typeof reducers>;



