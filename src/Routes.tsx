import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"
import { PrivateRoute } from "./components/PrivateRoute"
import { Home } from "./pages/Home"
import { Cameras } from "./pages/Cameras"

export function MyRoutes(){
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            
            <Route 
                path="/home"
                element={ 
                   <PrivateRoute
                     accessAuthenticated={isAuthenticated}
                    >
                        <Home/>
                    </PrivateRoute>
                } 
            />
            
            <Route
                path="/cameras"
                element={
                    <PrivateRoute
                        accessAuthenticated={isAuthenticated}
                    >
                        <Cameras />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}