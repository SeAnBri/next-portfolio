import UNIVERSITY_TRIER_LOGO from '@/app/public/assets/experience/university_trier.png'
import BAUHAUS_LOGO from '@/app/public/assets/experience/bauhaus.jpg'
import { EmploymentType, Experience } from '@/components/types'

export const experiences: Experience[] = [
  {
    id: '1',
    image: BAUHAUS_LOGO,
    title: 'BAUHAUS Deutschland',
    jobs: [
      {
        title: 'Associate Software Engineer',
        startDate: new Date('2023-09-01'),
        location: 'Mannheim, DE',
        employmentType: EmploymentType.FullTime,
        description:
          'Während meines Fast-Track-Programms sammelte ich als Trainee in verschiedenen Teams wertvolle Erfahrungen, die meine Fähigkeiten in der App- und Web-Entwicklung erweiterten. Im ersten Semester bekam ich eine Einführung in Best Practices, essentielle Tools, Konzepte und Technologien. Im ersten Team arbeitete ich intensiv mit [highlight:Flutter] und [highlight:Dart], wobei ich wesentlich an der Einbindung eines Storybooks beteiligt war und bereits kleine bis mittelgroße Features, wie das Teilen von Produkten und Videos in der App implementieren konnte. Ein Reporting Nebenprojekt, bei dem ich Daten aus [highlight:GA4], App Store und Play Store konsolidierte und wichtige KPIs in einem Dashboard zusammenstellte ermöglichte es mir, Erfahrung mit dem Aufsetzen und Managen von [highlight:GCP] Projekten mit [highlight:Terraform] zu sammeln. Im zweiten Semester konzentrierte ich mich auf die Web-Entwicklung mit [highlight:React], [highlight:TypeScript] und [highlight:Next.js] und unterstützte bei der Migration des Legacy Frontends und der Internationalisierung der Webanwendung für Länder wie die Schweiz. Dabei übernahm ich auch für verschiedene Themen die Leitung und Verantwortung. Generell konnte ich während des Programms agile Arbeitsweisen sowie deren Vor- und Nachteile kennenlernen und meine Kommunikationsfähigkeiten durch die aktive Zusammenarbeit mit verschiedenen Teams erheblich verbessern.',
      },
    ],
  },
  {
    id: '2',
    image: UNIVERSITY_TRIER_LOGO,
    title: 'Universität Trier',
    jobs: [
      {
        title: 'B. Sc. Informatik',
        startDate: new Date('2019-10-01'),
        endDate: new Date('2023-7-01'),
        location: 'Trier, DE',
        description:
          'Während meines Bachelorstudiums in Informatik habe ich mir Kenntnisse in der Softwareentwicklung mit [highlight:Java], Algorithmen und Datenstrukturen, theoretischer Informatik und Datenbankentwicklung mit [highlight:SQL] angeeignet. Zudem erwarb ich Wissen in der Planung und Umsetzung von Softwareprojekten, sowie der Bedeutung benutzerfreundlicher Software. Durch die praktische Anwendung meines Wissens in verschiedenen Projekten konnte ich meine theoretischen Kenntnisse festigen und wertvolle Praxiserfahrungen sammeln.',
      },
    ],
  },
]
