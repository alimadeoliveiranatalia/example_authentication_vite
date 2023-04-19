import { useFormContext } from "react-hook-form";

export function FormLogin(){
  const { register } = useFormContext()
    
    return (
      <>
        <div className='flex flex-col gap-1'>
          
          <label htmlFor="" className="text-2xl font-medium small-caps">
            Login:
          </label>

          <input
            type="email"
            className='bg-gray-200 shadow-sm rounded-lg h-16 px-3 text-black'
            placeholder="Digite seu E-mail"
            {...register('email')}  
          />

        </div>

        <div className='flex flex-col gap-1'>
        
          <label htmlFor="" className="text-2xl font-medium">
            Senha:
          </label>

          <input
            type="password"
            className='bg-gray-200 shadow-sm rounded-lg h-16 px-3 text-black'
            placeholder="Digite sua Senha"
            {...register("password")}  
          />

        </div>

        <button
          type="submit"
          className='bg-green-600 rounded-xl font-medium text-4xl text-white w-40 h-12 hover:bg-green-400 mt-6'          
        >
          Entrar
        </button>
      </>
      
    )
}