import Image from 'next/image'
import { Content } from '@/components/shared/Content'
import RECIPES_IMG from '@/app/public/assets/projects/foodpool/mockups/recipes.png'
import SEARCH_IMG from '@/app/public/assets/projects/foodpool/mockups/search.png'
import ADD_IMG from '@/app/public/assets/projects/foodpool/mockups/add.png'
import EDIT_IMG from '@/app/public/assets/projects/foodpool/mockups/edit.png'
import DETAIL_IMG from '@/app/public/assets/projects/foodpool/mockups/detail.png'
import PLAN_IMG from '@/app/public/assets/projects/foodpool/mockups/plan.png'
import SHOPPING_LIST_IMG from '@/app/public/assets/projects/foodpool/mockups/shopping.png'
import { Slideshow } from '@/components/shared/Slideshow'

export const Foodpool = () => {
  return (
    <div className="flex flex-col gap-16">
      <Content
        section="Funktionen"
        title="Rezeptverwaltung"
        description="FoodPool ermöglicht die Verwaltung von eigenen Rezepten. Rezepte können samt Bild, Name, Beschreibung, Zutaten und optionalem Link hinzugefügt werden und jeder Zeit bearbeitet werden. Eine Suche ermöglicht es schnell nach bestimmten Rezepten zu suchen und über eine Detailansicht alle Informationen über ein Rezept abzurufen."
        mediaContent={
          <Slideshow
            className="h-[480px] w-[240px]"
            slides={[
              {
                title: 'Rezepte',
                image: RECIPES_IMG,
              },
              {
                title: 'Suche',
                image: SEARCH_IMG,
              },
              {
                title: 'Rezept hinzufügen',
                image: ADD_IMG,
              },
              {
                title: 'Rezept bearbeiten',
                image: EDIT_IMG,
              },
              {
                title: 'Detailansicht',
                image: DETAIL_IMG,
              },
            ]}
          />
        }
      />
      <Content
        title="Erstellen von Essensplänen"
        description="Basierend auf den gespeicherten Rezepten kann ein zufälliger Essensplan für die Woche erstellt werden. Benutzer können Gerichte im Plan austauschen oder zufällig ersetzen lassen und sie per Drag & Drop verschieben. Zudem können Gerichte, die gekocht wurden, als erledigt markiert werden."
        mediaContent={<Image src={PLAN_IMG} alt="Essensplan" height={480} />}
        isReversed={true}
      />
      <Content
        title="Erstellen von Einkaufslisten"
        description="Die Applikation ermöglicht das Erstellen einer Einkaufsliste aus dem erstellten Essensplan, indem sie Zutaten aus den verschiedenen Gerichten zusammenführt. Nutzende können Produkte hinzufügen oder entfernen und die Liste nach Bedarf anpassen."
        mediaContent={
          <Image src={SHOPPING_LIST_IMG} alt="Einkaufsliste" height={480} />
        }
      />
    </div>
  )
}
