import { createContext, useState } from "react";
import Cookie from "js-cookie";
import { api } from "../services/api";

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  SingInValidation: ({email, password}: SignInData) => void;
  signIn: (data: any) => void;
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
            
            console.log(response.data)
            //setUser(response.data.user);

            setIsAuthenticated(true);

            Cookie.set("resp_server", JSON.stringify(response.data.user), { expires: 1 })
            const userCookie = JSON.parse(Cookie.get("resp_server")!) 

            setUser(userCookie);

        } catch (error) {
            console.error(error)
        }
    }

    function signIn(){
        //Cookie.set("response_api", user, { expires: 1});
    }

    function signOut(){
        setUser([]);
        setIsAuthenticated(false);
        Cookie.remove("token")
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, isAuthenticated, SingInValidation }} >
            {children}
        </AuthContext.Provider>
    )
}
