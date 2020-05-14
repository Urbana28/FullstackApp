import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';
import { signInReducer } from "./signInReducer";
import { patientReducer } from "./patientReducer";

let reducers = combineReducers({
    signInPage: signInReducer,
    patientPage: patientReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export type AppStateType = ReturnType<typeof reducers>;



