import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo_senai from '../../assets/LOGO_SENAI.png';
import { AuthContext } from "../../contexts/AuthContext";
import { redirect } from "react-router-dom";

interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
}

const newLoginFormVallidationSchema = zod.object({
  email: zod.string().email('E-mail é obrigatório'),
  password: zod.string().min(1,'Informe sua senha')
});

type NewCycleFormData = zod.infer<typeof newLoginFormVallidationSchema>

export function Login(){
  const [ output, setOutput ] = useState('');

  const { signIn } = useContext(AuthContext);
  
  const newLoginForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newLoginFormVallidationSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { handleSubmit, register} = newLoginForm;

  function createUser(data: NewCycleFormData){
    console.log(data);
    const LoginUser: User = {
      email: data.email,
      password: data.password
    } 
    signIn(LoginUser)
    setOutput(JSON.stringify(data, null, 2));
  }


  return (
    <main className='h-screen bg-zinc-400 text-zinc-300 flex flex-col gap-10 items-center justify-center'>
      <div className='flex flex-col items-center '>        
        <img src={logo_senai} className="logo" alt="Vite logo" width={100}/>
        <h4 className='text-red-700 m-2 text-lg font-medium'>Portal Agendamento Planta Manufatura</h4>
      </div>
      <form onSubmit={handleSubmit(createUser)} className='flex flex-col gap-4 w-full max-w-xs'>

        <div className='flex flex-col gap-1'>
          
          <label htmlFor="">E-mail</label>

          <input
            type="email"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 text-black'
            {...register('email')}  
          />

        </div>

        <div className='flex flex-col gap-1'>
        
          <label htmlFor="">Senha</label>

          <input
            type="password"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 text-black'
            {...register("password")}  
          />

        </div>

        <button
          type="submit"
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
          
        >
          Login
        </button>
      </form>
      <pre>{output}</pre>      
    </main>
  )
}