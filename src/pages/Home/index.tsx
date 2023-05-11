import { useContext, useEffect, useState } from 'react';
import icon_manufature from '../../assets/icon_plant_manufature.svg';
import logo_project from '../../assets/logo_project.svg';
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import { AuthContext } from '../../contexts/AuthContext';
import { Header } from '../../components/Header';
import Cookie from 'js-cookie';
import { Calendar } from './components/Calendar';

export function Home(){   
    const { signOut } = useContext(AuthContext);


    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const userCookie = JSON.parse(Cookie.get("resp_server")!);

    function handleAccordionToggle(){
        setIsAccordionOpen(!isAccordionOpen);
    }

    return (
        <>
            <Header nameUser={userCookie.name} urlUser='https://avatars.githubusercontent.com/u/67019361?v=4'/>
            <div className="flex flex-row items-center justify-between m-6">
                <span className="font-medium text-2xl">Olá {userCookie.name}</span> 
                <img src={logo_project} alt=""/>
            </div>
            <button 
                className="w-24 h-10 ml-6 border border-blue-500 rounded hover:bg-blue-100"
                onClick={signOut}
            >
                <span className="font-bold text-sm text-blue-500 uppercase not-italic">Sair</span>
            </button>
            <br/>

            <div className=" m-4">
                <Calendar />
            </div>

            <br/>
            <span className="font-bold text-2xl uppercase ml-6">Ativos</span>

            <Accordion.Root type="single" collapsible={isAccordionOpen}>
                <Accordion.Item value='item-1' className="m-6 p-2 border border-gray-400" >
                    <div className="flex flex-row justify-between items-center p-2">
                        <div className="flex flex-row justify-center">
                            <img src={icon_manufature} alt="" />
                            <span className="font-bold ml-2 mt-3">Planta Smart 4.0 - Senai Vila Mariana</span>
                        </div>
                        <Accordion.Header>
                            <Accordion.Trigger
                                className="w-24 h-10 border border-blue-500 rounded hover:bg-blue-100"
                                onClick={handleAccordionToggle}
                            >
                                <span className="font-bold text-sm text-blue-500 uppercase not-italic">Reservar</span>
                            </Accordion.Trigger>
                        </Accordion.Header>                            
                    </div>
                    
                    <Accordion.Content 
                        className="flex flex-row justify-around border">
                        
                        
                        <form action="" className="w-2/5 flex flex-col mt-2">

                            <span
                                className="font-semibold text-lg"
                            >
                                Efetue sua Reserva:                                
                            </span>

                            <div className="flex flex-row justify-between m-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-base font-normal"
                                    >
                                        Agendar para o Dia
                                    </label>
                                    <input
                                        type="date"
                                        className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-64 border focus:border-gray-500 focus:outline-none"
                                        placeholder="dd/mm/aaaa"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-base font-normal"
                                    >
                                        Até o Dia
                                    </label>
                                    <input
                                        type="date"
                                        className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-64 border focus:border-gray-500 focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-row mt-2 justify-between">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor=""
                                        className="text-base font-normal m-2"
                                    >
                                        Horário Inicial
                                    </label>
                                    <input
                                        type="time" 
                                        className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-64 border focus:border-gray-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label 
                                        htmlFor=""
                                        className="text-base font-normal m-2"
                                    >
                                        Horário Final
                                    </label>
                                    <input
                                        type="time" 
                                        className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-64 border focus:border-gray-500 focus:outline-none"    
                                    />
                                </div>
                            </div>

                            <label htmlFor='' className="mt-4">Motivo da Reserva</label>
                            <textarea 
                                className="bg-gray-200 shadow-sm rounded-lg h-24 px-3 border focus:border-gray-500 focus:outline-none" 
                                placeholder="Ex.: Oficina de Iot turma Técnico de Mecatrônica"   
                            />

                            <button
                                type="submit"
                                className="bg-green-600 rounded-xl font-medium text-base text-white p-2 mt-5 mb-5 hover:bg-green-500"
                                /*onClick={handleSelectReserva}*/
                            >
                                Realizar Reserva
                            </button>
                        </form>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>

            <span className="font-bold text-2xl uppercase ml-6">Minhas Reservas</span>
            <div className="flex flex-row justify-between items-center m-6 p-2 border border-gray-400">
                <div className="flex flex-row justify-center">
                    <img src={icon_manufature} alt="" />
                    <span className="font-normal ml-2 mt-3">Oficina de Iot turma de Mecatrônica</span>
                    <span className="mt-3 ml-4">Dia: 16/05 de 10:00hrs às 11:00hrs</span>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger className="h-10 border border-blue-500 rounded hover:bg-blue-100 mr-2">
                        <span className="font-bold text-sm text-blue-500 uppercase not-italic p-3 ">ver detalhes</span>
                    </Dialog.Trigger>
                    <Dialog.Portal className="relative">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50"/>
                        <Dialog.Content className="fixed w-2/4 bg-white translate-x-2/4 -translate-y-96">
                            <Dialog.Title className="relative flex flex-row justify-between bg-gray-300">
                                <span className="font-bold uppercase p-4">Informações da reserva</span>
                                <Dialog.Close>Fechar</Dialog.Close>
                            </Dialog.Title>
                            <Dialog.Description className="m-2">
                                <ul className="m-10">
                                    <li><strong>Ativo:</strong>Planta Smart 4.0 - Senai Vila Mariana</li>
                                    <li><strong>Data e Horário</strong> 16/05 à 19/05 de 09:00 às 11:00</li>
                                    <li><strong>Ocasião:</strong> Oficina de Iot para a turma de Mecatrônica</li>
                                </ul>
                            </Dialog.Description>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>

        </>
    )
}