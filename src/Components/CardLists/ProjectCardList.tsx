import { ProjectCardListProps } from "../../types/interfaces"
import ProjectCard from "../Cards/ProjectCard"

function ProjectCardList({projects} : ProjectCardListProps) {
  return (
    <div className="grid grid-cols-3">
        {projects.map((project) => (
            <ProjectCard
            projectName={project.projectName}
            imagen={project.imagen}
            formato={project.formato} />
        ))}
    </div>
  )
}

export default ProjectCardList