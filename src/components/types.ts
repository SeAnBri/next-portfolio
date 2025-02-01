import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

export type Project = {
  id: string
  image: StaticImageData
  title: string
  platform: ProjectPlatform
  text: string
  stack: Technology[]
  tags: string[]
  year: string
  introduction: string
  problem: string
  vision: string
}

type Technology = {
  name: string
  Icon: IconType
}

export const ProjectPlatform = {
  Web: 'Webanwendung',
  Mobile: 'Mobile Anwendung',
}

export type ProjectPlatform =
  (typeof ProjectPlatform)[keyof typeof ProjectPlatform]

export type Experience = {
  id: string
  image: StaticImageData
  title: string
  jobs?: Job[]
}

export type Job = {
  title: string
  startDate?: Date
  endDate?: Date
  location?: string
  employmentType?: EmploymentType
  description?: string
}

export enum EmploymentType {
  FullTime = 'Vollzeit',
}
