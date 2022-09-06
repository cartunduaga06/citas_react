import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = window.confirm('Estas seguro de eliminar este paciente?')

    if (respuesta) {

    eliminarPaciente(id)
    }
  }
    

  return (
    <>
    <div className='mt-5 bg-white m-3 shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3  text-gray-700 uppercase'> Nombre: {' '}
    <span className='font-normal normal-case '> {nombre} </span>
    </p>
    <p className='font-bold mb-3  text-gray-700 uppercase'> Propietario: {' '}
    <span className='font-normal normal-case '> {propietario} </span>
    </p>
    <p className='font-bold mb-3  text-gray-700 uppercase'> Email: {' '}
    <span className='font-normal normal-case '> {email} </span>
    </p>
    <p className='font-bold mb-3  text-gray-700 uppercase'> Fecha alta: {' '}
    <span className='font-normal normal-case '> {fecha} </span>
    </p>
    <p className='font-bold mb-3  text-gray-700 uppercase'> Sintomas: {' '}
    <span className='font-normal normal-case '> {sintomas} </span>
    </p>

    <div className='flex justify-between mt-10'>
    <button 
    className='py-2 px-10 bg-indigo-700  mt-5 p-2 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-colors duration-500 ease-in-out mb-5 rounded-lg'
    onClick={()=> setPaciente(paciente)}> 
    Editar
    </button>
    <button className='py-2 px-10 bg-red-700  mt-5 p-2 text-white uppercase font-bold hover:bg-red-500 cursor-pointer transition-colors duration-500 ease-in-out mb-5 rounded-lg'
    onClick={()=> handleEliminar()}>
    Eliminar 
    </button>




    </div>

    
</div>
</>
  )
}

export default Paciente