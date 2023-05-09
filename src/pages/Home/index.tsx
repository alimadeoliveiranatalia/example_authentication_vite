import { useContext, useEffect, useState } from 'react';
//import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import { Header } from '../../components/Header';
import { Accordion } from './components/Accordion';
import Cookies from 'js-cookie';

interface identifyUserProps {
    id: string;
    token: string;
    name: string;
    email: string;
    avatar_url: string;
}

export function Home(){   
    const { user } = useContext(AuthContext);

    console.log(user);

    return (
        <>
            <Header nameUser={user.name} urlUser='https://media.istockphoto.com/id/1323990939/pt/foto/a-studio-portrait-of-a-young-millennial-woman.webp?s=2048x2048&w=is&k=20&c=ewxA2yAAbQ1h1TXi1iTeXE_gwvo4C7FgHvw3KOQ1A8w='/>
               <h2>Welcome {user.name} your email {user.email}</h2> 
            <Accordion />
        </>
    )
}