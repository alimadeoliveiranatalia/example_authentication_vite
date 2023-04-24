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

    async function signIn({ email, password }:SignInData){
        try {
            const response = await fetch(
                "api/authenticate_user",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({ email, password })
                }
            );
            const data = await response.json();
            console.log(data)
            
            if(data.token){
                
                return {
                    data
                }
            } else {
                return data.error
            }
        } catch (error){
            console.error(error)
        }
      console.log('in SignIn')  
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}