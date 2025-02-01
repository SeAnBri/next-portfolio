import { Job } from '../types'
import { JobItem } from './JobItem'

type JobListProps = {
  jobs: Job[]
}

export const JobList = ({ jobs }: JobListProps) => {
  return (
    <div className="ml-11 flex flex-col gap-4">
      {jobs &&
        jobs.map((job, index) => {
          const isActivePosition = !job.endDate
          return (
            <div key={index}>
              <JobItem job={job} />
              <svg className="pointer-events-none absolute left-1 top-5 h-full w-full">
                <path
                  d="M10,10 C10,25 10,37 32,37"
                  stroke={isActivePosition ? '#22c55e' : '#1e293b'}
                  fill="transparent"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )
        })}
    </div>
  )
}
