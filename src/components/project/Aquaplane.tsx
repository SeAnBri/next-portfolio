import OVERALL_IMG from '@/app/public/assets/projects/aquaplane/overall.png'
import DIMENSION_IMG from '@/app/public/assets/projects/aquaplane/dimension.png'
import SUBDIMENSION_IMG from '@/app/public/assets/projects/aquaplane/subdimension.png'
import { Slideshow } from '@/components/shared/Slideshow'

export const Aquaplane = () => {
  return (
    <div className="mx-auto flex max-w-screen-md flex-col gap-16 px-8 lg:px-0">
      <div>
        <h3 className="mb-1 text-sm uppercase tracking-widest">Funktionen</h3>
        <h2 className="mb-4 text-xl">Bewertung der Argumentqualität</h2>
        <p className="mb-6">
          Die Argumentqualität lässt sich in logische, rhetorische und
          dialektische Dimensionen aufteilen, die jeweils verschiedene
          Qualitätsaspekte umfassen. Die logische Qualität untersucht, ob die
          vorgebrachten Gründe vernünftig, nachvollziehbar und relevant sind.
          Die rhetorische Perspektive prüft wie wirkungsvoll ein Argument
          vorgetragen wird, indem es bspw. die Glaubwürdigkeit (Credibility)
          oder die Verwendung einer korrekten und klaren Sprache (Clarity) in
          den Blick nimmt. Die dialektische Qualität untersucht, ob ein Argument
          einen ausreichenden Beitrag zur Lösung des Problems liefert und vom
          Zielpublikum akzeptiert wird.
        </p>
        <p>
          Um diese Aspekte zu bewerten, wurden spezifische Qualitätsmerkmale
          untersucht, z.B. ob ein Argument einen persönlichen Angriff enthält,
          was die Akzeptanz beeinflussen kann. Weitere untersuchte Merkmale
          waren der Wahrheitsgehalt der Behauptungen, die Rechtschreibung, die
          Verwendung von dramatischer Sprache und viele mehr.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-xl">
          Ableitung des überzeugenderen Arguments
        </h2>
        <p>
          Als Grundlage für die Entscheidungsfindung dient die Bewertung der
          Argumentqualität durch die untersuchten Qualitätsmerkmale. Zu den
          beiden Argumenten eines Argumentpaars werden daher jeweils alle
          Qualitätsmerkmale bestimmt und die dabei berechneten Werte miteinander
          verglichen. Mithilfe von stufenweisen Mehrheitsentscheidungen wird
          dann entschieden, welches Argument bezüglich bestimmter
          Qualitätsmerkmale, bestimmten Dimensionen und insgesamt überzeugender
          ist.
        </p>
      </div>
      <div>
        <h2 className="mb-4 text-xl">
          Interaktive Präsentation der Erklärungen
        </h2>
        <p className="mb-12">
          Die Anwendung hat das Ziel, den Nutzern interaktiv zu zeigen, welches
          Argument in Bezug auf verschiedene Qualitätsaspekte überwiegt und
          warum. Dazu werden zwei Argumentpaare eingegeben, und das insgesamt
          überzeugendere Argument gekennzeichnet. Zusätzlich werden
          Entscheidungen bezüglich der übergeordneten Dimensionen (logische,
          rhetorische und dialektische Qualität) präsentiert. Möchte man mehr
          über die Entscheidung bezüglich der rhetorischen Qualität erfahren,
          kann man auf den hervorgehobenen Begriff &quot;Rhetoric Quality&quot;
          klicken. Dadurch wird auf die Entscheidungen zu den einzelnen
          untergeordneten Dimensionen Bezug genommen. Die Entscheidung zu einer
          untergeordneten Dimension kann dann durch weiteres Klicken vertieft
          werden. So erhält man detaillierte Erklärungen zu den spezifischen
          Unterschieden bei den Qualitätsmerkmalen.
        </p>
        <Slideshow
          hideTitle
          className="h-48 w-full sm:h-72 sm:w-[740px]"
          slides={[
            {
              title: 'Gesamt',
              image: OVERALL_IMG,
            },
            {
              title: 'Dimension',
              image: DIMENSION_IMG,
            },
            {
              title: 'Subdimension',
              image: SUBDIMENSION_IMG,
            },
          ]}
        />
      </div>
    </div>
  )
}
