import { useContext, useEffect, useState } from 'react';
//import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import { Header } from '../../components/Header';
import { Accordion } from './components/Accordion';
import Cookie from 'js-cookie';

interface identifyUserProps {
    id: string;
    token: string;
    name: string;
    email: string;
    avatar_url: string;
}

export function Home(){   
    const { signOut } = useContext(AuthContext);

    const userCookie = JSON.parse(Cookie.get("resp_server")!)

    //console.log(user);

    return (
        <>
            <Header nameUser={userCookie.name} urlUser='https://media.istockphoto.com/id/1323990939/pt/foto/a-studio-portrait-of-a-young-millennial-woman.webp?s=2048x2048&w=is&k=20&c=ewxA2yAAbQ1h1TXi1iTeXE_gwvo4C7FgHvw3KOQ1A8w='/>
               <h2>Welcome {userCookie.name} your email {userCookie.email}</h2> 
               <button onClick={signOut}>Sair</button>
            <Accordion />
        </>
    )
}