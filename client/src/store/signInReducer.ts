import {IUserData} from "../types/SignInTypes";


const initialState = {
    data: {
        email: '',
        password: '',
        phoneNumber: '',
        userId: null
    }
}

type StateType = typeof initialState

export const signInReducer = (state:StateType = initialState, action: any) => {
    switch (action.type) {
        case 'SET_SIGN_IN':
        return {
            ...state,
            data: action.data
        }
    }

}

type commonActionsSignInPage = ReturnType<typeof setSignedUser>

const setSignedUser = (data:IUserData) => {
    return {type:'SET_SIGN_IN',data} as const
}


