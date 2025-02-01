import { experiences } from '@/fixtures/experience'
import { ExperienceItem } from './ExperienceItem'

export const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900">
      <div className="xl:max-[40%] m-auto w-11/12 md:w-10/12 lg:max-w-[60%]">
        <h5 className="mb-10 uppercase tracking-widest">Erfahrung</h5>
        <div className="align-center flex flex-col justify-center gap-8">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  )
}
