import { ProjectGrid } from './ProjectGrid'

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="m-auto w-11/12 md:w-10/12 lg:w-3/4">
        <h5 className="mb-10 uppercase tracking-widest">Meine Projekte</h5>
        <ProjectGrid />
      </div>
    </section>
  )
}
