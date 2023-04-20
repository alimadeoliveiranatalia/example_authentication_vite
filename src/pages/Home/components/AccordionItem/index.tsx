import { useState } from "react";
import { AtivoProps } from "../Accordion";


export function AccordionItem({id, company, senai_unid, url}:AtivoProps){
    const [ open, setOpen ] = useState(false);
    
    function handleOpenAccordion(){
        setOpen(true);
    }

    return (
        <div key={id}>
            <details>
                <summary className="flex border-b-2" onClick={handleOpenAccordion}>
                    <img className="w-16 h-16 rounded-3xl" src={url} alt=""/>
                    <div className="ml-3 flex-col justify-between">
                        <p className="font-semibold text-base">{company} - {senai_unid}</p>
                        <p className="pt-4">Mais Detalhes</p>
                    </div>
                    {/*<button
                        //type="button"
                        //onClick={handleOpenAccordion}
                        className="h-10 rounded outline outline-offset-1 outline-sky-700 font-bold text-sky-700 px-4 py-3 ml-32">
                            RESERVAR
                    </button>*/}
                </summary>
                <div key={id} className="m-10 flex-2 justify-center items-center ">
                    <p>Programação da Planta para o mês:</p>
                    <iframe 
                        className="w-1/2 h-screen"
                        src="https://outlook.office365.com/owa/calendar/26e71588a73f440c88d7154f2323b1f8@sp.senai.br/7cc108d7aa064358aef0e8a1b1a8b3799129753312227258037/calendar.html"
                        aria-label="calendário outlook"
                        allowFullScreen
                    
                    ></iframe>
                </div>
            </details>
        </div>
    )
}