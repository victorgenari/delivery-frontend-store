import React, { createContext, useState, useContext, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [token, setToken] = useState();

    useEffect(() => {
        setUser(localStorage.getItem("@DeliveryStore:user"))
        setToken(localStorage.getItem("@DeliveryStore:token"))
    }, [])

    useEffect(() => {
        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`
        }
    }, [token, user])

    const signIn = async (email, password) => {
        const user = {
            email: email,
            password: password
        }

        const response = await api.post("login", user)

        if (response.data) {
            setUser(response.data.data.user)
            setToken(response.data.data.token)

            localStorage.setItem("@DeliveryStore:user", JSON.stringify(response.data.data.user))
            localStorage.setItem("@DeliveryStore:token", response.data.data.token)

            const authToken = `Bearer ${response.data.data.token}`

            api.defaults.headers.authorization = authToken
        }
    }

    const signOut = async () => {
        localStorage.removeItem('@DeliveryStore:user')
        localStorage.removeItem('@DeliveryStore:token')
        setUser(false)
        setToken(false)
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error("useAuth deve ser usado por dentro de um AuthProvider")
    }

    return context
}