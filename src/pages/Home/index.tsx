import { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

export function Home(){
    const [users, setUsers] = useState([]);
    const { isAuthenticated } = useContext(AuthContext);

    console.log(isAuthenticated);

    useEffect(() => {
        async () => {
            const { data : { user } } = await api.get('/users');

            setUsers(user);
        }
    }, [])

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h4>Hello {user.name}</h4>
                </div>
            ))}
        </div>
    )
}