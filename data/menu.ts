export type MenuItem = {
  id: string
  category: 'starters' | 'main'
  image: string
  price: number

  name: {
    fr: string
    en: string
    ar: string
  }

  description: {
    fr: string
    en: string
    ar: string
  }
}

export const menuItems: MenuItem[] = [
  {
    id: 'sushi-dragon',
    category: 'main',

    image: '/sushi.jpg',

    price: 24,

    name: {
      fr: 'Sushi Dragon',
      en: 'Dragon Sushi',
      ar: 'سوشي دراغون',
    },

    description: {
      fr: 'Un assortiment raffiné de sushi préparé avec du saumon frais, de l’avocat et une touche de sauce maison.',
      en: 'A refined sushi selection prepared with fresh salmon, avocado and a touch of our homemade sauce.',
      ar: 'تشكيلة راقية من السوشي محضرة بالسلمون الطازج والأفوكادو ولمسة من صلصتنا الخاصة.',
    },
  },

  {
    id: 'ramen-wok',
    category: 'main',

    image: '/ramen.jpg',

    price: 28,

    name: {
      fr: 'Ramen Wok',
      en: 'Wok Ramen',
      ar: 'رامن ووك',
    },

    description: {
      fr: 'Un ramen généreux avec des nouilles fraîches, des légumes croquants, du poulet mariné et notre bouillon signature.',
      en: 'A generous ramen with fresh noodles, crunchy vegetables, marinated chicken and our signature broth.',
      ar: 'رامن غني بالنودلز الطازجة والخضروات المقرمشة والدجاج المتبل ومرقنا الخاص.',
    },
  },
]