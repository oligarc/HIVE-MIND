import './App.css'
import Button from './Components/Button'
import CustomerCardList from './Components/CardLists/CustomerCardList'
import ProjectCardList from './Components/CardLists/ProjectCardList.tsx'
import ServiceCardList from './Components/CardLists/ServiceCardList'
import WorkerCardList from './Components/CardLists/WorkerCardList'
import Footer from './Components/Layouts/Footer'
import Header from './Components/Layouts/Header'
import customers from './data/customers.ts'
import services from './data/services.ts'
import workers from './data/workers.ts'
import projects from './data/projects.ts'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto my-4'>
        <Header 
        firstli='Home' 
        secondli='Nosotros' 
        thirdli='Servicios' 
        fourthli='Contacto' />
        <div className='container mt-3 bg-fill-white'>
        {/*Probando botón*/}
        <Button displayText='Contáctanos' rounded={true} />
        {/*Probando customerCardList*/}
        <CustomerCardList customers={customers} />
        {/*Probando workerCardList*/}
        <WorkerCardList workers={workers}/>
        {/*Probando listaServicios*/}
        <ServiceCardList servicios={services} />
        {/*Probando listaProyectos*/}
        <ProjectCardList projects={projects} />
        </div>
         {/*Probando footer*/}
        <Footer />
      </div>
    </>
  )
}

export default App
