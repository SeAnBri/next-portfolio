import { ImageTile } from '@/components/shared/ImageTile'
import { tools } from '@/fixtures/projects/creartion'

export const Creartion = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="mx-auto my-8 flex w-full max-w-screen-md flex-col px-8 lg:px-0">
        <h3 className="mb-1 text-sm uppercase tracking-widest">Funktionen</h3>
        <h2 className="mb-4 text-xl">Platzieren und Auswählen von Objekten</h2>
        <p>
          Im Selektionsmodus kann zwischen verschiedenen 3D-Objekten gewählt
          werden: Zylinder, Würfel, Halbkugel, dreieckiges Prisma, Kegel, Ring,
          Kapsel, Torus, Pyramide und Kugel. Diese einfach gehaltenen Objekte
          dienen als Materialien zur weiteren Bearbeitung. Eine
          Platzierungshilfe zeigt an, wo das Objekt platziert wird, und durch
          Tippen wird es platziert. Platzierte Objekte können über Antippen über
          den Touchscreen zur Bearbeitung ausgewählt werden.
        </p>
        <h2 className="my-8 mb-4 text-xl">Bearbeitung von Objekten</h2>
        <p className="mb-8">
          Es stehen verschiedene Werkzeuge zur Verfügung, um die Objekte auf
          kreative und intuitive Weise zu bearbeiten. Mit diesen
          Bearbeitungsmöglichkeiten sind der Kreativität und dem spielerischen
          Umgang mit virtuellen Objekten keine Grenzen gesetzt:
        </p>
        <div className="flex flex-col gap-10">
          {tools.map((tool, index) => (
            <ImageTile
              key={index}
              image={tool.image}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
