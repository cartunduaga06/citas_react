import React from 'react'
import Paciente from './paciente'


const ListadoPacientes = ({ pacientes, setPaciente, paciente, eliminarPaciente }) => {

  
  return (
    <>
    <div className='md:w-1/2 ld:w-3/5 '>
      
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center '>Listado pacientes</h2>
          <p className='text-xl mt-5 md-10  text-center'>
            Adminitra tus {' '}

            <span className='text-indigo-600 font-bold'>pacientes y citas</span>


          </p>

        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center '>Listado pacientes</h2>
          <p className='text-xl mt-5 md-10  text-center'>
            Comienza agregando pacientes  {' '}

            <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>


          </p>
        </>
      )}
     

    
     <div className=' h-screen '>
      {
        pacientes.map((paciente) => (
          <Paciente

            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}

          />
        ))
      }

      </div>
    </div>
    </>
  )
}

export default ListadoPacientes