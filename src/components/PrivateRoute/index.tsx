import { Navigate } from "react-router-dom";

interface PrivateRouteProps{
    accessAuthenticated: boolean;
    children: JSX.Element;
}

export function PrivateRoute({accessAuthenticated, children}: PrivateRouteProps){
    if(!accessAuthenticated){
        return <Navigate to="/"/>
    }
    return children
}