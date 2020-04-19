import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({

})

export const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
export type AppStateType = ReturnType<typeof reducers>;

