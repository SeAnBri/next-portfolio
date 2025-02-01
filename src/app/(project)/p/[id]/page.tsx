import { use } from 'react'
import { Aquaplane } from '@/components/project/Aquaplane'
import { Creartion } from '@/components/project/Creartion'
import { Foodpool } from '@/components/project/Foodpool'
import { BackButton } from '@/components/shared/BackButton'
import { Badge } from '@/components/shared/Badge'
import { Project } from '@/components/types'
import projects from '@/fixtures/projects'

type ProjectPageParams = { id: string }

const ProjectPage = ({ params }: { params: Promise<ProjectPageParams> }) => {
  const { id } = use(params)

  const project: Project = projects.find((project) => project.id === id)!

  const projectSpecificComponentMap: Record<string, React.ReactNode> = {
    aquaplane: <Aquaplane />,
    creartion: <Creartion />,
    foodpool: <Foodpool />,
  }

  const projectSpecificComponent = projectSpecificComponentMap[project.id]

  return (
    <div>
      <div className="fixed inset-x-0 bottom-auto top-4 z-20 mx-auto flex max-w-[1200px] items-center justify-between px-4 sm:top-8 sm:px-8 lg:px-16">
        <BackButton href="/#portfolio" />
      </div>
      <div className="h-32" />
      <div className="mx-auto max-w-screen-md px-8 lg:px-0">
        <h1 className="text-green-500">{project.title}</h1>
        <div className="mb-4 flex gap-2">
          {`${project.platform} • ${project.year}`}
        </div>
        <div className="flex flex-col items-center justify-between">
          <p>{project.introduction}</p>
          <div className="mt-16 flex w-full flex-col gap-10 sm:flex-row">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <h2 className="mb-1 text-sm uppercase tracking-widest">TAGS</h2>
              {project.tags.map((tag, index) => (
                <div key={index}>
                  <Badge>{tag}</Badge>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <h2 className="mb-1 text-sm uppercase tracking-widest">Stack</h2>
              {project.stack.map(({ name, Icon }, index) => (
                <div key={index}>
                  <Badge icon={<Icon />}>{name}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-12 md:h-16" />
        <div className="rounded-xl bg-gray-900 px-8 py-6">
          <h2 className="mb-1 text-sm uppercase tracking-widest">Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div className="h-6 md:h-8" />
        <div className="rounded-xl px-8 py-6">
          <h2 className="mb-1 text-sm uppercase tracking-widest">
            Vorgehensweise
          </h2>
          <p>{project.vision}</p>
        </div>
        <div className="h-12 md:h-16" />
      </div>
      <div className="bg-gray-900 py-12 md:py-16">
        {projectSpecificComponent}
      </div>
    </div>
  )
}

export default ProjectPage
