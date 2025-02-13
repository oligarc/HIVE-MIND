import { ProjectCardProps } from "../../types/interfaces"

function ProjectCard({projectName,imagen,formato} : ProjectCardProps) {
  return (
    <div className="max-w-xs rounded-4xl overflow-hidden">
      <div className="flex justify-center">
        <img className="w-40 mb" src={`/proyectos/${imagen}.${formato}`} alt={`${imagen}`} />
      </div>
      <div className="px-6 py-4 mt-2">
        <div className="font-bold text-xl text-negro-abeja text-center">
          <h2>{projectName}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard