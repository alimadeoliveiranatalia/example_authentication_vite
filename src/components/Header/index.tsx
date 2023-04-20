﻿import avatar from '../../assets/user_avatar.svg';
import { faker } from '@faker-js/faker';

export function Header(){
    return (
        <header className='h-20 bg-gray-400 flex space-x-4 items-center justify-end justify-items-end pr-5'>
            <span className='text-base font-normal'>Natália Lima de Oliveira</span>
            <img className='rounded-full w-10 h-10' src={faker.image.avatar()} alt="" />
        </header>
    )
}