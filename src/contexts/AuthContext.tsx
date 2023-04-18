import { createContext, useState } from "react";
import api from "../services/api";
import { redirect } from 'react-router-dom';

type AuthContextType = {
    isAuthenticated: boolean;
    signIn: ({ email, password }: SignInData) => void;
}

type SignInData = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any){
    //const isAuthenticated = false;
    const [isAuthenticated, setIsAuthenticated ] = useState(false);

    async function signIn({ email, password }: SignInData){
        const { data: { token, user } } = await api.post('/authenticate',
            {
                email,
                password
            }
        );
        setIsAuthenticated(true);
        console.log(token, user);
        api.defaults.headers.Authorization = token;
        redirect('/home');
        return {
            token,
            user
        }

    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}