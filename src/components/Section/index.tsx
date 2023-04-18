import icon_project from "../../assets/logo_project.svg";

export function Section(){
    return (
        <div className="mt-3 flex justify-between items-center px-8 gap-x-96 grid-cols-2">
            <span className="text-2xl font-medium">Olá Natália</span>
            <img 
                src={icon_project} alt=""
                className="w-96"    
            />
        </div>
    )
}