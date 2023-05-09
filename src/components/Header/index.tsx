interface HeaderProps {
    nameUser: string;
    urlUser: string;
}

export function Header({ nameUser, urlUser }: HeaderProps){    
    return (
        <header 
            className='h-20 bg-gray-400 flex space-x-4 items-center justify-end justify-items-end pr-5'>
            <span className='text-base font-normal'>{nameUser}</span>
            <img className='rounded-full w-10 h-10' src={urlUser} alt="" />
        </header>
    )
}