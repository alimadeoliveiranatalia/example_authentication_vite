import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";

export function Calendar(){

    return (
        <FullCalendar 
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            locales={[ptBrLocale]}
           events={[
            { title: "Aula de Manufatura", date: "2023-05-12"},
            { title: "Oficina de IoT", date: "2023-05-15"}
           ]}
        />
    )
}