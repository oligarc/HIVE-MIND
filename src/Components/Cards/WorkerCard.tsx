import { WorkerCardProps } from "../../types/interfaces"

function WorkerCard({fullName,imagen,formato} : WorkerCardProps) {
  return (
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg">
    <img className="w-full" src={`/trabajadores/${imagen}.${formato}`} alt={`${imagen}`} />
  <div className="px-6 py-4 bg-hive-2">
    <div className="font-bold text-xl text-white">
        <h2>{fullName}</h2>
    </div>
  </div>
  
</div>
  )
}

export default WorkerCard