import { ServiceCardProps } from "../../types/interfaces"

function ServiceCard({serviceName,imagen,formato} : ServiceCardProps) {
  return (
    <div className="max-w-xs rounded-4xl overflow-hidden">
      <div className="flex justify-center">
        <img className="w-40 mb" src={`/servicios/${imagen}.${formato}`} alt={`${imagen}`} />
      </div>
      <div className="px-6 py-4 mt-2 bg-hive-2">
        <div className="font-bold text-xl text-white text-center">
          <h2>{serviceName}</h2>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard