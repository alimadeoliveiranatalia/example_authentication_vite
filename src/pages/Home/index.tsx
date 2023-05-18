import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import icon_manufature from '../../assets/icon_plant_manufature.svg';
import logo_project from '../../assets/logo_project.svg';
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import { AuthContext } from '../../contexts/AuthContext';
import { Header } from '../../components/Header';
import { Calendar } from './components/Calendar';
import { api } from '../../services/api';
import { FormEvent } from './components/FormEvent';
import { Loading } from '../../components/Loading';
import { Link } from 'react-router-dom';

export interface SelectReservaData {
    id?: string;
    date_initial_reserva: Date;
    date_finished_reserva: Date;
    horario_initial: string;
    horario_finished: string;
    finalidade: string;
}

const newAddReservaFormValidationSchema = zod.object({
    date_initial_reserva: zod.string(),
    date_finished_reserva: zod.string(),
    horario_initial: zod.string(),
    horario_finished: zod.string(),
    finalidade: zod.string()
});

type NewReservaFormData = zod.infer<typeof newAddReservaFormValidationSchema>

export function Home(){   
    const { signOut, user, isAuthenticated } = useContext(AuthContext);

    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const [reservas, setReservas] = useState([]);

    const [reserva, setReserva] = useState(null);

    const newAddReserva = useForm<NewReservaFormData>({
        resolver : zodResolver(newAddReservaFormValidationSchema),
        defaultValues: {
            date_initial_reserva: '',
            date_finished_reserva: '',
            horario_initial: '',
            horario_finished: '',
            finalidade: ''
        }
    });

    const { handleSubmit } = newAddReserva;

    const params_link = {
        pathname : "/cameras",
        state: { isAuthenticated }
    }

    function AddReserva(data: NewReservaFormData){
        const newReserva: SelectReservaData = {
            date_initial_reserva: new Date(data.date_initial_reserva),
            date_finished_reserva: new Date(data.date_finished_reserva),
            horario_initial: data.horario_initial,
            horario_finished: data.horario_finished,
            finalidade: data.finalidade
        }
        handleSelectReserva(newReserva);
        console.log(reserva);
    }

    function handleAccordionToggle(){
        setIsAccordionOpen(!isAccordionOpen);
    }

    async function handleSelectReserva({
        date_initial_reserva,
        date_finished_reserva,
        horario_initial,
        horario_finished,
        finalidade
    }:SelectReservaData){
        try {
            const token = user.token;

            const response = await api.post(
                "/reservas",
                {
                    date_initial_reserva,
                    date_finished_reserva,
                    horario_initial,
                    horario_finished,
                    finalidade
                },
                {
                    headers : { Authorization: `Bearer ${token}`}
                }
            );
            console.log(response.data);

            setReserva(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function loadReservas(){
        try {
            const token = user.token;

            const response = await api.get(
                "/reservas/user_reservas",
                {
                    headers: { Authorization: `Bearer ${token}`}
                }
            );

            setReservas(response.data);

            //setLoading(false);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadReservas();
    },[reservas]);
    
    const myReservas = reservas.map((reserva:SelectReservaData) => {
        return (
            <div className="flex flex-row justify-between items-center m-6 p-2 border border-gray-400" key={reserva.id}>
                <div className="flex flex-row justify-center">
                    <img src={icon_manufature} alt="" />
                    <span className="font-normal ml-2 mt-3">{reserva.finalidade}</span>
                    <span className="mt-3 ml-4">Dia: {String(reserva.date_initial_reserva)} de {reserva.horario_initial}hrs às {reserva.horario_finished}hrs</span>
                </div>
                <Link 
                    to={params_link}
                    className="w-24 h-10 p-3 border border-green-700 rounded hover:bg-green-200"
                >
                   <span className="font-bold text-sm text-green-700 uppercase not-italic">Acessar</span>
                </Link>
                <Dialog.Root>
                    <Dialog.Trigger className="h-10 border border-blue-500 rounded hover:bg-blue-100 mr-2">
                        <span className="font-bold text-sm text-blue-500 uppercase not-italic p-3 ">ver detalhes</span>
                    </Dialog.Trigger>
                    <Dialog.Portal className="relative">
                        <Dialog.Overlay className="absolute inset-0 bg-black opacity-50"/>
                        <Dialog.Content className="fixed w-2/4 bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <Dialog.Title className="relative flex flex-row justify-between bg-gray-300">
                                <span className="font-bold uppercase p-4">Informações da reserva</span>
                                <Dialog.Close>Fechar</Dialog.Close>
                            </Dialog.Title>
                            <Dialog.Description className="m-2">
                                <ul className="m-10 p-4">
                                    <li><strong>Ativo:</strong><p>Planta Smart 4.0 - Senai Vila Mariana</p></li>
                                    <li><strong>Data e Horário</strong><p> {String(reserva.date_initial_reserva)} à {String(reserva.date_finished_reserva)} 
                                    de {reserva.horario_initial}hrs às {reserva.horario_finished}hrs</p></li>
                                    <li><strong>Ocasião:</strong><p> {reserva.finalidade}</p></li>
                                </ul>
                            </Dialog.Description>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        )
    });

    return (
        <>
            <Header nameUser={user.user.name} urlUser='https://avatars.githubusercontent.com/u/67019361?v=4'/>
            
            <div className="flex flex-row items-center justify-between m-6">
                <span className="font-medium text-2xl">Olá {user.user.name}</span> 
                <img src={logo_project} alt=""/>
            </div>

            <span className="font-bold text-2xl uppercase ml-6 mt-6">Ativos</span>

            <button 
                className="w-24 h-10 ml-6 border border-blue-500 rounded hover:bg-blue-100"
                onClick={signOut}
            >
                <span className="font-bold text-sm text-blue-500 uppercase not-italic">Sair</span>
            </button>

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
                        
                        <div className=" m-4">
                            <Calendar />
                        </div>
                        
                        <form onSubmit={handleSubmit(AddReserva)} className="w-2/5 flex flex-col mt-2">

                            <span
                                className="font-semibold text-lg"
                            >
                                Efetue sua Reserva:                                
                            </span>

                            <FormProvider {...newAddReserva}>
                                <FormEvent />
                            </FormProvider>
                        </form>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion.Root>

            <span className="font-bold text-2xl uppercase ml-6">Minhas Reservas</span>

            { reservas.length === 0 ? 
                <div className="m-6">
                    <h2 className="m-4 font-semibold text-lg">Você não possui reservas</h2>
                </div>
                : myReservas 
            }           

        </>
    )
}