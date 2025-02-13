import { ServiceCardListProps } from "../../types/interfaces"
import ServiceCard from "../Cards/ServiceCard"

function ServiceCardList({ servicios }: ServiceCardListProps) {
  return (
    <>
    <div className="grid grid-cols-3">
      {servicios.map((servicio) => (
        <ServiceCard
        serviceName={servicio.serviceName}
        imagen={servicio.imagen}
        formato={servicio.formato}
         />
      ))}
      </div>
    </>
  )
}

export default ServiceCardList
