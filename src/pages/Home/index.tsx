import { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ListAtivos } from '../../components/ListAtivos';

interface User {
    id: number;
    name: string;
    email: string;
}

export function Home(){
    const [users, setUsers] = useState<User[]>([]);
    //const { isAuthenticated } = useContext(AuthContext);

    //console.log(isAuthenticated);

   

    return (
        <>
            <Header/>
            <Section/>
            <ListAtivos />
        </>
    )
}