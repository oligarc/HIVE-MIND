import './App.css'
import Button from './Components/Button'
import CustomerCard from './Components/Cards/CustomerCard'
import Header from './Components/Header'

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
        {/*Probando customerCard*/}
        <CustomerCard opinion='Mi experiencia con este servicio ha sido simplemente excepcional. Desde el primer momento, la atención al cliente fue amable, profesional y resolutiva. Se tomaron el tiempo de entender mis necesidades y me ofrecieron una solución que superó por completo mis expectativas. Además, la calidad del producto es excelente, con un diseño cuidado y materiales de primera. La entrega fue rápida y sin inconvenientes, lo que demuestra el compromiso de la empresa con la satisfacción del cliente. Sin duda, recomendaría este servicio a cualquiera que busque calidad y confianza. Volveré a comprar sin dudarlo.' 
        fullName='Ana Romario' 
        imagen='ana' 
        formato='avif' />
        </div>
        
      </div>
    </>
  )
}

export default App
