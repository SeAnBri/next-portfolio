import Image from 'next/image'
import Link from 'next/link'
import { Project, ProjectPlatform } from '../types'
import { ReactNode } from 'react'
import { HiMiniDevicePhoneMobile, HiWindow } from 'react-icons/hi2'

type ProjectTileProps = {
  project: Project
}

export const ProjectTile = ({ project }: ProjectTileProps) => {
  const url = `/p/${project.id}`

  const platformIconMap: Record<ProjectPlatform, ReactNode> = {
    [ProjectPlatform.Web]: <HiWindow size={18} />,
    [ProjectPlatform.Mobile]: <HiMiniDevicePhoneMobile size={18} />,
  }

  const platformIcon = platformIconMap[project.platform]

  return (
    <Link href={url} key={project.id} prefetch={false}>
      <article
        key={project.id}
        className="relative rounded-3xl border-2 border-solid border-slate-800 p-4 transition-colors duration-300 hover:border-slate-700"
      >
        <div className="overflow-hidden rounded-2xl">
          <Image src={project.image} alt={project.title} />
        </div>
        <div className="mb-2 mt-5 flex items-center text-base text-green-500">
          <span className="mr-1">{platformIcon}</span>
          <h3>{project.title}</h3>
        </div>
        <p className="mb-12">{project.text}</p>
        <div className="absolute bottom-5 flex gap-5">
          {project.stack.map(({ Icon }, index) => (
            <Icon key={index} size={24} />
          ))}
        </div>
      </article>
    </Link>
  )
}
