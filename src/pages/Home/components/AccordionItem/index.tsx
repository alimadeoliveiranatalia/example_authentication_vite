import { useState } from "react";
import { AtivoProps } from "../Accordion";
import { Calendar } from "../Calendar";


export function AccordionItem({id, company, senai_unid, url}:AtivoProps){
    const [ open, setOpen ] = useState(false);
    
    function handleOpenAccordion(){
        setOpen(true);
    }

    return (
        <div key={id}>
            <details>
                <summary className="flex border-2" onClick={handleOpenAccordion}>
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
                <div key={id} className="m-10 flex justify-around border-2">
                    <div className="flex flex-col w-1/2">
                        <p className="m-4 font-semibold text-lg">Programação da Planta Smart 4.0 para o mês:</p>
                        <Calendar />
                    </div>
                    <form
                        action=""
                        className="grid gap-4 w-[25rem] m-6"
                    >
                        <div className="flex flex-col">
                            <label
                              htmlFor=""
                              className="text-base font-normal small-caps"
                            >
                                Agendar para o dia
                            </label>

                            <input
                                type="date"
                                className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-64"
                                placeholder="18/04/2023"
                            />

                            <label
                              htmlFor=""
                              className="text-base font-normal small-caps"
                            >
                                Até o dia
                            </label>

                            <input
                                type="date"
                                className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-64"
                                placeholder="18/04/2023"
                            />
                        </div>
                        
                        <div className="flex flex-col">
                            <label
                                htmlFor=""
                                className="text-base font-medium small-caps"    
                            >
                                início
                            </label>

                            <input 
                                type="time"
                                className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-28"
                                placeholder="00:00"
                            />

                            <label
                                htmlFor=""
                                className="text-base font-medium small-caps"    
                            >
                                até
                            </label>

                            <input 
                                type="time"
                                className="bg-gray-200 shadow-sm rounded-lg h-14 px-3 w-28"
                                placeholder="00:00"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 rounded-xl font-medium text-4xl text-white p-2 mt-5"
                        >
                            Efetuar Reserva
                        </button>
                    </form>
                </div>
            </details>
        </div>
    )
}