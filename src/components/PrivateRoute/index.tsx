import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { Home } from "../../pages/Home";

interface PrivateRouteProps{
    accessAuthenticated: boolean;
    children: JSX.Element;
}

export function PrivateRoute({accessAuthenticated, children}: PrivateRouteProps){
    if(!accessAuthenticated){
        console.log('Acesso do usuário: ',accessAuthenticated)
        return <Navigate to="/"/>
    }
    return children
}