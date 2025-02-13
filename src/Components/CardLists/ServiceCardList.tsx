import { serviceCardListProps } from "../../types/interfaces"
import ServiceCard from "../Cards/ServiceCard"

function ServiceCardList({ servicios }: serviceCardListProps) {
  return (
    <>  
      {servicios.map((servicio) => (
        <ServiceCard
        serviceName={servicio.serviceName}
        imagen={servicio.imagen}
        formato={servicio.formato}
         />
      ))}
    </>
  )
}

export default ServiceCardList
