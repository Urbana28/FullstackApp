import {useCallback, useState, useEffect} from "react";

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [id, setId] = useState(null)
    const storageName = 'userData'


    const login = useCallback((jwtToken, userId) => {
        setToken(jwtToken)
        setId(userId)
        localStorage.setItem(storageName, JSON.stringify({id:userId, token:jwtToken}))
    }, [])
    const logout = useCallback(() => {
        setToken(null)
        setId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        if(data && data.token) {
            login(data.token, data.id)
        }
    }, [login])

    return {login, logout, token, id}

}