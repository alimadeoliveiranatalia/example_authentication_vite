import { v4 as uuid } from 'uuid';

type SignInRequestData = {
    email: string;
    password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount));

export async function signInRequest(data : SignInRequestData){
    
    await delay();

    return {
        token: uuid(),
        user: {
            name: "Natália Lima",
            email: "natalia.oliveira@sp.senai.br",
            avartar_url: 'https://avatars.githubusercontent.com/u/67019361?v=4'
        }
    }
}