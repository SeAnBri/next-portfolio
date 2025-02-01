import { ImageTileProps } from '@/components/shared/ImageTile'

import SELECT_IMG from '@/app/public/assets/projects/creartion/tool-icons/select.png'
import COPY_IMG from '@/app/public/assets/projects/creartion/tool-icons/copy.png'
import DELETE_IMG from '@/app/public/assets/projects/creartion/tool-icons/delete.png'
import MOVE_IMG from '@/app/public/assets/projects/creartion/tool-icons/move.png'
import RESIZE_IMG from '@/app/public/assets/projects/creartion/tool-icons/resize.png'
import ROTATE_IMG from '@/app/public/assets/projects/creartion/tool-icons/rotate.png'
import STRETCH_IMG from '@/app/public/assets/projects/creartion/tool-icons/stretch.png'
import COLOR_IMG from '@/app/public/assets/projects/creartion/tool-icons/color.png'

export const tools: ImageTileProps[] = [
  {
    image: SELECT_IMG,
    title: 'Mehrere Objekte auswählen',
    description:
      'Durch einfaches Antippen über den Touchscreen können mehrere Objekte zugleich ausgewählt werden.',
  },
  {
    image: MOVE_IMG,
    title: 'Verschieben',
    description:
      'Die Position der Objekte im Raum kann entweder durch Bewegung des Geräts oder durch die Verwendung der Steuerkreuze verschoben werden.',
  },
  {
    image: RESIZE_IMG,
    title: 'Größe ändern',
    description:
      'Mit einer einfachen Geste des Auseinanderziehens von zwei Fingern auf dem Touchscreen kann die Größe der Objekte angepasst werden.',
  },
  {
    image: ROTATE_IMG,
    title: 'Rotieren',
    description:
      'Drei zirkuläre Slider ermöglichen die präzise Rotation der Objekte.',
  },
  {
    image: STRETCH_IMG,
    title: 'Strecken',
    description:
      'Durch Auswahl einer der drei Achsen und Auseinanderziehen von zwei Fingern auf dem Touchscreen können die Objekte in die gewünschten Richtungen gestreckt werden.',
  },
  {
    image: COLOR_IMG,
    title: 'Farbe ändern',
    description:
      'Die Farbe der Objekte kann mithilfe von drei Slidern nach dem RGB-Modell verändert werden, während ein weiterer Slider die Transparenz reguliert.',
  },
  {
    image: COPY_IMG,
    title: 'Kopieren',
    description:
      'Mit nur einem Klick auf den Kopieren-Button können Kopien der Objekte erstellt werden.',
  },
  {
    image: DELETE_IMG,
    title: 'Löschen',
    description:
      'Für eine einfache Entfernung von platzierten Objekten stehen mehrere Löschfunktionen zur Verfügung.',
  },
]
