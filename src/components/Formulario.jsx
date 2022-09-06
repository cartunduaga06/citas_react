import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [error, setError] = useState(false)


    useEffect(() => {
        if (Object.keys(paciente).length >=  0){ 
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        } 
    }, [paciente])



    const generarId = () => {
            const ramdon = Math.random().toString(36).substring(2)
            const fecha = Date.now().toString(36)

        return fecha + ramdon
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // validar formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            
        } else {
            // enviar peticion
            setError(false)
            const data = {
                nombre,
                propietario,
                email,
                fecha,
                sintomas,
                
            }

            if(paciente.id) {
                //editando el registro
                data.id = paciente.id
                setPacientes(pacientes.map(pacienteState => pacienteState.id === paciente.id ? data : pacienteState))
                setPaciente({})

            } else {
                data.id = generarId()


            setPacientes([...pacientes, data]);
            }
            //reset form
            setNombre('')
            setPropietario('')
            setEmail('')
            setFecha('')
            setSintomas('')

        }



        
    }


  return (
    <div className='md:w-1/2 ld:w-2/5 mx-5'>
        <h2 className='font-black text-center text-3xl'>Seguimiento Pacientes</h2>
    
    
<p className='text-lg mt-5 mb-5 text-center font-bold'>
    
    Añade pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos </span>    
    </p>
    

    <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5'>

       {error && <Error  mensaje={"Todos los campos son obligatorios"} />}

    <div className='mb-5'>
        <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold' > Nombre Mascota</label>
        <input 
        id='mascota'
        type='text'
        placeholder='Nombre mascota'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 md:rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
    </div>
    <div className='mb-5'>
        <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold' > Nombre Propietario</label>
        <input 
        id='propetario'
        type='text'
        placeholder='Nombre propietario'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 md:rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        value={propietario}
        onChange={(e) => setPropietario(e.target.value)}
        />
    </div>
    <div className='mb-5'>
        <label htmlFor='email' className='block text-gray-700 uppercase font-bold' > Email propietario</label>
        <input 
        id='email'
        type='text'
        placeholder='Email propietario'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 md:rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div className='mb-5'>
        <label htmlFor='alta' className='block text-gray-700 uppercase font-bold' > Fecha de alta</label>
        <input 
        id='alta'
        type='date'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 md:rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
        />
    </div>
    <div className='mb-5'>
        <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold' > Sintomas</label>
        <textarea 
        id='sintomas'
        placeholder='Sintomas'
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 md:rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
        />
       
       </div>

       <input
        type="submit"    
        className='bg-indigo-600 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-colors duration-500 ease-in-out mb-5' 
       
        value={paciente.id?'Editar paciente':'Agergar paciente'} />
       
       

    </form>
    

    </div>    
  )
}

export default Formulario