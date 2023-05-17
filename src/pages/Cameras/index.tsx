import { useContext } from "react";
import { Header } from "../../components/Header";
import { AuthContext } from "../../contexts/AuthContext";
import logo_project from "../../assets/logo_project.svg";
import { Link } from "react-router-dom";

export function Cameras(){
    const { user, isAuthenticated } = useContext(AuthContext);

    const params_link = {
        pathname : "/home",
        state: { isAuthenticated }
    }
    
    return (
        <>
            <Header nameUser={user.user.name} urlUser="https://avatars.githubusercontent.com/u/67019361?v=4"/>

            <div className="flex flex-row items-center justify-between m-6">
                <span className="font-bold text-2xl">Planta smart 4.0 - Senai Vila Mariana</span> 
                <img src={logo_project} alt=""/>
            </div>

            <Link 
                to={params_link}
                className="w-24 h-10 ml-6 p-3 border border-blue-500 rounded hover:bg-blue-100"
            >
                <span className="font-bold text-sm text-blue-500 uppercase not-italic">Voltar</span>
            </Link>

            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-start m-5 p-4 gap-6 rounded-xl bg-gray-500">
                    <span className="font-semibold text-4xl text-white">Visão: Robôs Colaborativos</span>
                    <iframe 
                        width="560"
                        height="315"
                        src="http://video.kiklot.com.br/"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                <div className="flex flex-col items-start m-5 p-4 gap-6 rounded-xl bg-gray-500">
                    <span className="font-semibold text-4xl text-white">Visão: Estação Pneumática</span>
                    <iframe 
                        width="560"
                        height="315"
                        src="http://video.kiklot.com.br/"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>
                
            </div>
        </>
    )
}