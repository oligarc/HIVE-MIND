import './App.css'
import Button from './Components/Button'
import CustomerCardList from './Components/CardLists/CustomerCardList'
import ServiceCardList from './Components/CardLists/ServiceCardList'
import WorkerCardList from './Components/CardLists/WorkerCardList'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  const customers = [
    {
      opinion:'Mi experiencia con este servicio ha sido simplemente excepcional. Desde el primer momento, la atención al cliente fue amable, profesional y resolutiva.',
      fullName:'Ana Romario',
      imagen:'ana',
      formato:'avif'
    },
    {
      opinion:'Mi experiencia con este servicio ha sido simplemente excepcional. Desde el primer momento, la atención al cliente fue amable, profesional y resolutiva.',
      fullName:'Ana Romario',
      imagen:'ana',
      formato:'avif'
    },
    {
      opinion:'Mi experiencia con este servicio ha sido simplemente excepcional. Desde el primer momento, la atención al cliente fue amable, profesional y resolutiva.',
      fullName:'Ana Romario',
      imagen:'ana',
      formato:'avif'
    },
    {
      opinion:'Mi experiencia con este servicio ha sido simplemente excepcional. Desde el primer momento, la atención al cliente fue amable, profesional y resolutiva.',
      fullName:'Ana Romario',
      imagen:'ana',
      formato:'avif'
    },
  ]

  const workers = [
    {
      fullName:'Pepe Juan',
      imagen:'pepe',
      formato:'jpg'
    },
    {
      fullName:'Pepe Juan',
      imagen:'pepe',
      formato:'jpg'
    },
    {
      fullName:'Pepe Juan',
      imagen:'pepe',
      formato:'jpg'
    },
    {
      fullName:'Pepe Juan',
      imagen:'pepe',
      formato:'jpg'
    }
  ]

  const services = [
    {
      serviceName:'Diseño gráfico',
      imagen:'graphic-design',
      formato:'png'
    },
    {
      serviceName:'Publicidad Digital',
      imagen:'publicidad-digital',
      formato:'png'
    },
    {
      serviceName:'Publicidad Online',
      imagen:'publicidad-online',
      formato:'png'
    },
    {
      serviceName:'Tienda Online',
      imagen:'tienda-online',
      formato:'png'
    },
    {
      serviceName:'Posicionamiento web',
      imagen:'web-positioning',
      formato:'png'
    },
  ]
  

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
        {/*Probando footer*/}
        </div>
        <Footer />
      </div>
      
     
    </>
  )
}

export default App
