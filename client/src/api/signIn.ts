import axios from 'axios'
import {IdType, ILoginUserData, IUserData} from "../types/SignInTypes";

const instance = axios.create({
    baseURL: ' http://localhost:3000/api/auth',
    withCredentials: true
})

const storageName = 'userData'

export const authAPI = {
    signInUser (data: IUserData) {
        return instance.post('/register', data).then(res => res.data)
    },
    loginUser (loginData:ILoginUserData) {
        return instance.post('/login', loginData)
    },
    saveToken (userId: IdType, token: null ) {
        return localStorage.setItem(storageName, JSON.stringify({userId, token}))
    }
}