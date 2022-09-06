import Formulario from "./components/Formulario"
import Header from "./components/header"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState} from 'react'
import {useEffect} from 'react'

function App() {


const [pacientes, setPacientes] = useState([])
const [paciente, setPaciente] = useState({})

useEffect(() => {
  const pacientesLS = () => {
    const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes'))?? [];
    setPacientes(pacientesLocalStorage)
  } 
  pacientesLS()
}, [])

useEffect(() => {

  localStorage.setItem('pacientes', JSON.stringify(pacientes))

    
}, [pacientes])




const eliminarPaciente = (id) => {
  setPacientes(pacientes.filter(paciente => paciente.id !== id))
}

  return (
    <div className="container mx-auto mt-10">

      <Header />
      <div className="mt-12  md:flex">

      <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente} />
      <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      
      </div>
      
    </div>
  )
}

export default App
