import { WorkerCardListProps } from "../../types/interfaces"
import WorkerCard from "../Cards/WorkerCard"

function WorkerCardList({workers} : WorkerCardListProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
        {workers.map((worker) => (
            <WorkerCard fullName={worker.fullName}
            imagen={worker.imagen}
            formato={worker.formato} />
        ))}
    </div>
  )
}

export default WorkerCardList