import { useFormContext } from "react-hook-form";

export function FormEvent(){
    const { register } = useFormContext();
    return (
        <>
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
                        {...register('date_initial_reserva')}
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
                        {...register('date_finished_reserva')}
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
                        {...register("horario_initial")}
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
                        {...register("horario_finished")}    
                    />
                </div>
            </div>

            <label htmlFor="finalidade" className="mt-4">Motivo da Reserva</label>
            <textarea
                id="finalidade" 
                className="bg-gray-200 shadow-sm rounded-lg h-24 px-3 border focus:border-gray-500 focus:outline-none" 
                placeholder="Ex.: Oficina de Iot turma Técnico de Mecatrônica"
                {...register("finalidade")}   
            />
            <button
                type="submit"
                className="bg-green-600 rounded-xl font-medium text-base text-white p-2 mt-5 mb-5 hover:bg-green-500"
            >
                Realizar Reserva
            </button>
        </>
    )
}