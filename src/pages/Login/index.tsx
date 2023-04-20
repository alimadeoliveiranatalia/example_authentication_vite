import { useContext, useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logo_senai from '../../assets/logo_project.svg';
import { AuthContext } from "../../contexts/AuthContext";
import { CardDescription } from "./components/cardDescription";
import { FormLogin } from "./components/formLogin";

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
    <main className='bg-image_background bg-cover bg-center backdrop-blur-md bg-white flex flex-col gap-10 items-center justify-center'>
      
      <div className="mt-9">        
        
        <img src={logo_senai} className="w-[72rem]" alt="Vite logo"/>
              
      </div>    
        
          
          <form onSubmit={handleSubmit(createUser)} className='flex flex-col justify-center items-center gap-4 w-full max-w-xs bg-white ml-[48rem] rounded-3xl h-[26rem]'>
            <FormProvider {...newLoginForm}>
              <FormLogin />
            </FormProvider>
          </form>
        <CardDescription />
            
    </main>
  )
}