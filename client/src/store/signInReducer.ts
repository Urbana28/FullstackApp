import {IdType, ILoginUserData, IUserData} from "../types/SignInTypes";
import {Dispatch} from "redux";
import {AppStateType} from "./store";
import {authAPI} from "../api/signIn";


const initialState = {
    userData: null as IUserData | null,
    isLoading: false,
    userId: null as IdType | null,
    token: null
}

type InitialStateType = typeof initialState

export const signInReducer = (state = initialState,
                              action: commonActionsSignInPage): InitialStateType => {
    switch (action.type) {
        case "SET_SIGN_IN":
            return {
                ...state,
                userData: action.data
            };
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            };
        case "LOGIN_USER":
            return {
                ...state,
                userId: action.id,
                token: action.token
            }

        default:
            return state
    }

}

type commonActionsSignInPage = AC<typeof signInActions>

export const signInActions = {
    setSignedUser: (data: IUserData) => ({type: 'SET_SIGN_IN', data} as const),
    loginUser: (id: IdType, token: null) => ({type: 'LOGIN_USER', id, token} as const),
    setIsLoading: (isLoading: boolean) => ({type: 'SET_IS_LOADING', isLoading} as const)
}

type AC<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

export const setSignedUser = (data: IUserData) => {
    return async (dispatch: Dispatch<commonActionsSignInPage>, getState: () => AppStateType) => {
        try {
            let res = await authAPI.signInUser(data)
            dispatch(signInActions.setSignedUser(res))
        } catch (e) {
            console.log(e)
        }
    }
}

export const loginUser = (data: ILoginUserData) => {
    return async (dispatch: Dispatch<commonActionsSignInPage>, getState: () => AppStateType) => {
        try {
            let res = await authAPI.loginUser(data)
            dispatch(signInActions.loginUser(res.data.id, res.data.token));
            authAPI.saveToken(res.data.id, res.data.token)
        } catch (e) {
            console.log(e)
        }
    }
}

