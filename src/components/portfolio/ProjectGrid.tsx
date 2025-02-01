'use client'

import projects from '@/fixtures/projects'
import { ProjectTile } from './ProjectTile'

export const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        return <ProjectTile key={project.id} project={project} />
      })}
    </div>
  )
}
