import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export function Calendar(){
    return (
        <FullCalendar 
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
        />
    )
}