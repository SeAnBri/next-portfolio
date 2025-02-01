import Image from 'next/image'
import { Experience } from '../types'
import { JobList } from './JobList'

type ExperienceItemProps = {
  experience: Experience
}

export const ExperienceItem = ({
  experience: { image, title, jobs },
}: ExperienceItemProps) => {
  return (
    <div className="relative flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4">
        <Image
          src={image}
          alt={title}
          className="h-7 w-7 rounded-full transition-all hover:scale-110"
        />
        {title}
      </div>
      {jobs && <JobList jobs={jobs} />}
    </div>
  )
}
