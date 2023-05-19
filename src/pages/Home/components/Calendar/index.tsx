import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import interactionPlugin from "@fullcalendar/interaction";
import { useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { api } from "../../../../services/api";
import { AuthContext } from "../../../../contexts/AuthContext";
import { SelectReservaData } from "../..";

interface FullCalendarProps{
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
}

const events = [
    { 
        id: "cef5e1b6-fa08-436d-a082-e4f63bb148f1",
        title: "Aula de Manufatura",
        startDate: "2023-05-12",
        startTime:"09:00",
        endDate:"2023-05-16",
        endTime: "15:00"
    },
    { 
        id:"f948f14b-5c28-496b-97db-bfee4087a796",
        title: "Oficina de IoT",
        startDate: "2023-05-17",
        startTime: "10:00",
        endDate: "2023-05-19",
        endTime: "12:00",
    }
]

const list_events = events.map((event) => {
    return {
        //allDay: true,
        title: event.title,
        start: event.startDate + "T" + event.startTime,
        //startTime: event.startTime,
        end: event.endDate + "T" + event.endTime,
        //endTime: event.endTime
    }
})

export function Calendar({allReservas}:any){
    //console.log(allReservas)
    const list_all_reservas = allReservas.map((reserva: any) => {
        return {
            title: reserva.finalidade,
            start: reserva.date_initial_reserva + "T" + reserva.horario_initial,
            end: reserva.date_finished_reserva + "T" + reserva.horario_finished
        }
    });
    //console.log(list_all_reservas)
    /*const [ listReservas, setListReservas ] = useState([]);

    async function carregarReservas(){
        const token = user.token;

        const response = await api.get(
            "/reservas/user_reservas",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setListReservas(response.data);
        console.log(response.data)
    }

    useEffect(() => {
        carregarReservas();
    }, [listReservas]);

    const allReservas = listReservas.map((reserva: SelectReservaData) => {
        return {
            title : reserva.finalidade,
            start: reserva.date_initial_reserva ,
            end: reserva.date_finished_reserva 
        }
    });*/

    return (
        <FullCalendar 
            plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
            initialView="dayGridMonth"
            
            locales={[ptBrLocale]}
            showNonCurrentDates={false}
            //select={handleSelectReserva}
            events={list_all_reservas}
            editable={true}
            
        />
    )
}