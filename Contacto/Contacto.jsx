import React from 'react';
import './contact.css';
import { appendErrors, useForm } from 'react-hook-form';


export const Contacto = () => {
 
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
    }

    return(
       <div className='container-contact'>
          <h2 className='contacto'>Contacto</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
             <div>
                <label>Nombre</label>
                <input type='text' {...register('nombre', {
                    required:true,
                })} />
                {errors.nombre?.type === 'required' && <p className='obligatory-field'>Este campo es obligatorio</p>}
             </div>

             <div>
                <label>Email</label>
                <input type='text' {...register('email',{
                    required:true,
                    pattern:/\S+@\S+\.\S+/
                })} />
               {errors.email?.type === 'pattern' && <p className='obligatory-field'>Este campo es obligatorio</p>}
             </div>

             <div>
                <label>Teléfono(opcional)</label>
                <input type='text' {...register('telefono')} />
             </div>

             <div>
                <label>Mensaje(opcional)</label>
                <textarea {...register('mensaje')} className='textarea-mensaje'></textarea>
             </div>

             <input type="submit" value='Enviar'/>
          </form>
       </div>
      
    )
}