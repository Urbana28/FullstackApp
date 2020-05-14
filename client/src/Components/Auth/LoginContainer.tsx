import React, {useCallback} from 'react';
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/signInReducer";
import {ILoginUserData} from "../../types/SignInTypes";

const LoginContainer = () => {
    const dispatch = useDispatch();
    const login = useCallback((loginData: ILoginUserData) => {
        dispatch(loginUser(loginData))
    }, [dispatch])


    return (
        <div>
            <LoginForm login={login}/>
        </div>
    )
}

export default LoginContainer;