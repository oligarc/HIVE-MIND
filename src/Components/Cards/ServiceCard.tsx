import { serviceCardProps } from "../../types/interfaces"

function ServiceCard({serviceName,imagen,formato} : serviceCardProps) {
  return (
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg">
    <img className="w-full" src={`/servicios/${imagen}.${formato}`} alt={`${imagen}`} />
  <div className="px-6 py-4 bg-hive-2">
    <div className="font-bold text-xl text-white">
        <h2>{serviceName}</h2>
    </div>
  </div>
</div>
  )
}

export default ServiceCard