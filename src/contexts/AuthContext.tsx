import { createContext, useState } from "react";
import Cookie from "js-cookie";
import { api } from "../services/api";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  SingInValidation: ({email, password}: SignInData) => void;
  signIn: () => void;
  signOut: () => void;
}

type SignInData = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}: any){
    const [ user, setUser ] = useState([]);

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    
    async function SingInValidation({email, password}: SignInData){
        try {
            const response = await api.post(
                "/sessions",
                {
                    email,
                    password
                }
            );
            Cookie.set("resp_server", JSON.stringify(response.data), { expires: 1 })

        } catch (error) {
            console.error(error)
        }
    }

    function signIn(){
        const userCookie = JSON.parse(Cookie.get("resp_server")!);

        setUser(userCookie);

        const token = userCookie.token;

        if(!token){
            setIsAuthenticated(false);
        }

        setIsAuthenticated(true);
    }

    function signOut(){
        setUser([]);

        setIsAuthenticated(false);
        
        Cookie.remove("resp_server")
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated, SingInValidation }} >
            {children}
        </AuthContext.Provider>
    )
}
