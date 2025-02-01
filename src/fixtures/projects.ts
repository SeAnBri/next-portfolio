import CREARTION_IMG from '@/app/public/assets/projects/creartion/creartion.png'
import FOODPOOL_IMG from '@/app/public/assets/projects/foodpool/foodpool.jpg'
import AQUAPLANE_IMG from '@/app/public/assets/projects/aquaplane/aquaplane.jpg'
import { FaJava, FaPython, FaReact } from 'react-icons/fa'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'
import { RiFirebaseLine } from 'react-icons/ri'
import { SiDart, SiFlutter, SiUnity } from 'react-icons/si'
import { Project, ProjectPlatform } from '@/components/types'

const projects: Project[] = [
  {
    id: 'aquaplane',
    image: AQUAPLANE_IMG,
    title: 'AQUAPLANE',
    platform: ProjectPlatform.Web,
    text: 'AQUAPLANE bewertet Argumente in Debatten nach Logik, Rhetorik und Dialektik und erklärt, welches überzeugender ist.',
    stack: [
      { name: 'Java', Icon: FaJava },
      { name: 'Python', Icon: FaPython },
      { name: 'React', Icon: FaReact },
      { name: 'MySQL', Icon: TbSql },
    ],
    tags: ['Computational Argumentation', 'Argument Quality', 'Explainability'],
    year: '2023',
    introduction:
      'Aquaplane ist das Ergebnis meiner Bachelorarbeit, die sich mit der automatisierten Bewertung von Argumenten und der Bestimmung des überzeugenderen Arguments befasst. In einer Zeit, in der Menschen in sozialen Medien, Artikeln und Aufsätzen aufgrund unterschiedlicher Meinungen und Interessenkonflikte miteinander debattieren, ist es entscheidend, überzeugende Argumente vorzutragen, um ein Publikum zu überzeugen, Streitfragen zu lösen und fundierte Entscheidungen zu treffen. Bestehende Methoden ermöglichen entweder einen direkten Vergleich zweier Argumente oder eine schrittweise Bewertung der Argumentqualität, um zu bestimmen, welches Argument überzeugender oder qualitativ hochwertiger ist.',
    problem:
      'Ein zentrales Problem ist die mangelnde Transparenz der genutzten (Sprach-)Modelle bei der Entscheidungsfindung. Diese Modelle sind häufig primär darauf trainiert, ihre Genauigkeit zu maximieren, wobei die Erklärbarkeit auf der Strecke bleibt. Folglich können Menschen oft nicht nachvollziehen, welche Qualitätseigenschaften eines Arguments zur Entscheidung geführt haben, was die Urteile subjektiv erscheinen lässt.',
    vision:
      'Es werden verschiedene Dimensionen der Argumentqualität wie die Logik, Rhetorik und die Dialektik gemessen und durch Vergleichen bestimmter Qualitätsmerkmale der Argumente Unterschiede in der Argumentqualität festgestellt. Daraus wird das überzeugendere Argument abgeleitet und Nutzenden interaktiv Erklärungen für die Entscheidungen geliefert.',
  },
  {
    id: 'creartion',
    image: CREARTION_IMG,
    title: 'CreARtion',
    platform: ProjectPlatform.Mobile,
    text: 'Mit CreARtion können virtuelle Skulpturen aus auswählbaren und manipulierbaren Formen in einem physischen Raum errichtet werden.',
    stack: [
      { name: 'Unity', Icon: SiUnity },
      { name: 'C#', Icon: TbBrandCSharp },
    ],
    tags: ['Augmented Reality', 'Sculpting', 'Prototyping'],
    year: '2021',
    introduction:
      'CreARtion ist als gemeinsames Studienprojekt mit einem Kommilitonen entstanden. Es handelt sich dabei um eine Augmented-Reality-App, mit der Nutzende primitive 3D-Objekte in AR erstellen können. Mit ihr sollen sich Nutzer und Nutzerinnen  künstlerisch entfalten können oder simple Prototypen erstellen können.',
    problem:
      'Hürden ergeben sich dabei vor allem in der reibungslosen Gestaltung der Nutzerinteraktion. Nutzende sollten möglichst einfach und intuitiv mit der Umgebung und den virtuellen Formen interagieren können, um damit die Illusion der Verbundenheit der Realität und der Virtualität aufrecht zu erhalten.',
    vision:
      'In Benutzerstudien wurde ermittelt, welche Interaktionstechniken am besten geeignet sind, um Formen zu platzieren, auszuwählen und auf verschiedene Weisen zu bearbeiten. Dadurch wurde der Fokus besonders auf die Benutzerfreundlichkeit gelegt.',
  },
  {
    id: 'foodpool',
    image: FOODPOOL_IMG,
    title: 'FoodPool',
    platform: ProjectPlatform.Mobile,
    text: 'FoodPool hilft dabei Rezepte zu organisieren, wöchentliche Essenspläne zu erstellen und daraus Einkaufslisten zu generieren.',
    stack: [
      { name: 'Dart', Icon: SiDart },
      { name: 'Flutter', Icon: SiFlutter },
      { name: 'Firebase', Icon: RiFirebaseLine },
    ],
    tags: ['Meal Planning', 'Recipe Organizer', 'Shopping List'],
    year: '2020',
    introduction:
      'Dieses kleine, private Projekt entstand mit dem Ziel, meinen eigenen Alltag in der Küche effizienter zu gestalten. Bei FoodPool handelt es sich um eine mobile Anwendung, die es ermöglicht Rezepte zu organisieren, wöchentliche Essenspläne zu erstellen und Einkaufslisten zu generieren.',
    problem:
      'Oft fehlt der Überblick über alle Gerichte, was dazu führt, dass man immer wieder das Gleiche kocht. Eine regelmäßige Planung ist notwendig, um im Voraus festzulegen, was in der nächsten Woche gegessen werden soll, und welche Zutaten dafür benötigt und eingekauft werden müssen.',
    vision:
      'Nachdem die notwendigen Funktionen in einer gründlichen Anforderungsanalyse spezifiziert und mit Mock-Ups visualisiert wurden, begann die Implementierungsphase. Mithilfe von Dart und Flutter wurde die App plattformübergreifend entwickelt. Für die effiziente Speicherung und Verwaltung von Daten wie Rezepten, Essensplänen und Einkaufslisten kam die NoSQL-Datenbank Firebase zum Einsatz. Diese cloudbasierte Lösung bot die notwendige schnelle und skalierbare Datenverwaltung für die App.',
  },
]

export default projects
