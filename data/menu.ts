export type MenuCategory =
  | 'starters'
  | 'soups'
  | 'skewers'
  | 'salads'
  | 'noodles'
  | 'fried-rice'
  | 'wok'
  | 'sushi'

export type MenuItem = {
  id: string
  category: MenuCategory
  image: string
  price: number

  name: {
    fr: string
    en: string
  }

  description: {
    fr: string
    en: string
  }
}

export const menuItems: MenuItem[] = [
  // =====================================================
  // ENTRÉES
  // =====================================================

  {
    id: 'nems-poulet',
    category: 'starters',
    image: '/nems.jpg',
    price: 9.5,

    name: {
      fr: 'Nems poulet (2 pièces)',
      en: 'Chicken Spring Rolls (2 pcs)',
    },

    description: {
      fr: 'Des lamelles de légumes avec vermicelles sautées, cuites dans des feuilles de riz et accompagnées de sauce sweet chili.',
      en: 'Vegetable strips with stir-fried vermicelli, wrapped in rice paper and served with sweet chili sauce.',
    },
  },

  {
    id: 'nems-crevettes',
    category: 'starters',
    image: '/nems.jpg',
    price: 11,

    name: {
      fr: 'Nems crevettes (2 pièces)',
      en: 'Shrimp Spring Rolls (2 pcs)',
    },

    description: {
      fr: 'Des lamelles de légumes avec vermicelles sautées, cuites dans des feuilles de riz et accompagnées de sauce sweet chili.',
      en: 'Vegetable strips with stir-fried vermicelli, wrapped in rice paper and served with sweet chili sauce.',
    },
  },

  {
    id: 'crab-balls',
    category: 'starters',
    image: '/crab-balls.jpg',
    price: 12,

    name: {
      fr: 'Crab Balls (4 pièces)',
      en: 'Crab Balls (4 pcs)',
    },

    description: {
      fr: 'Pâte de crabe enrobée de pomme de terre et d’oignon, aromatisée à la coriandre et accompagnée de sauce sweet chili.',
      en: 'Crab paste coated with potato and onion, flavored with coriander and served with sweet chili sauce.',
    },
  },

  {
    id: 'spring-rolls-poulet',
    category: 'starters',
    image: '/spring-rolls.jpg',
    price: 10,

    name: {
      fr: 'Spring Rolls poulet (2 pièces)',
      en: 'Chicken Spring Rolls (2 pcs)',
    },

    description: {
      fr: 'Des lamelles de légumes et de menthe marinées à l’huile de sésame et au gingembre, enroulées dans des feuilles de galettes de riz.',
      en: 'Vegetable and mint strips marinated in sesame oil and ginger, wrapped in rice paper sheets.',
    },
  },

  {
    id: 'spring-rolls-crevettes',
    category: 'starters',
    image: '/spring-rolls.jpg',
    price: 11.5,

    name: {
      fr: 'Spring Rolls crevettes (2 pièces)',
      en: 'Shrimp Spring Rolls (2 pcs)',
    },

    description: {
      fr: 'Des lamelles de légumes et de menthe marinées à l’huile de sésame et au gingembre, enroulées dans des feuilles de galettes de riz.',
      en: 'Vegetable and mint strips marinated in sesame oil and ginger, wrapped in rice paper sheets.',
    },
  },

  {
    id: 'spring-rolls-saumon',
    category: 'starters',
    image: '/spring-rolls.jpg',
    price: 14.5,

    name: {
      fr: 'Spring Rolls saumon (2 pièces)',
      en: 'Salmon Spring Rolls (2 pcs)',
    },

    description: {
      fr: 'Des lamelles de légumes et de menthe marinées à l’huile de sésame et au gingembre, enroulées dans des feuilles de galettes de riz.',
      en: 'Vegetable and mint strips marinated in sesame oil and ginger, wrapped in rice paper sheets.',
    },
  },

  {
    id: 'chicken-cheese-yakitori',
    category: 'starters',
    image: '/yakitori.jpg',
    price: 12.5,

    name: {
      fr: 'Chicken Cheese Yakitori (2 pièces)',
      en: 'Chicken Cheese Yakitori (2 pcs)',
    },

    description: {
      fr: 'Des brochettes de poulet et fromage accompagnées de sauce yakitori.',
      en: 'Chicken and cheese skewers served with yakitori sauce.',
    },
  },

  {
    id: 'crunchy-shrimp',
    category: 'starters',
    image: '/crunchy-shrimp.jpg',
    price: 17.5,

    name: {
      fr: 'Crunchy Shrimp (4 pièces)',
      en: 'Crunchy Shrimp (4 pcs)',
    },

    description: {
      fr: 'Des crevettes marinées au soja, enroulées dans des feuilles de brik et accompagnées de sauce sweet chili.',
      en: 'Soy-marinated shrimp wrapped in brik pastry and served with sweet chili sauce.',
    },
  },

  {
    id: 'crevettes-tempura',
    category: 'starters',
    image: '/tempura.jpg',
    price: 18.5,

    name: {
      fr: 'Crevettes Tempura (4 pièces)',
      en: 'Tempura Shrimp (4 pcs)',
    },

    description: {
      fr: 'Des crevettes enrobées de chapelure japonaise panko et accompagnées de sauce sweet chili.',
      en: 'Shrimp coated in Japanese panko breadcrumbs and served with sweet chili sauce.',
    },
  },

  {
    id: 'gyozas-poulet',
    category: 'starters',
    image: '/gyozas.jpg',
    price: 13,

    name: {
      fr: 'Gyozas poulet (4 pièces)',
      en: 'Chicken Gyoza (4 pcs)',
    },

    description: {
      fr: 'Gyozas au poulet.',
      en: 'Chicken gyoza.',
    },
  },

  {
    id: 'gyozas-boeuf',
    category: 'starters',
    image: '/gyozas.jpg',
    price: 16,

    name: {
      fr: 'Gyozas bœuf (4 pièces)',
      en: 'Beef Gyoza (4 pcs)',
    },

    description: {
      fr: 'Gyozas au bœuf.',
      en: 'Beef gyoza.',
    },
  },

  {
    id: 'gyozas-crevettes',
    category: 'starters',
    image: '/gyozas.jpg',
    price: 17,

    name: {
      fr: 'Gyozas crevettes (4 pièces)',
      en: 'Shrimp Gyoza (4 pcs)',
    },

    description: {
      fr: 'Gyozas aux crevettes.',
      en: 'Shrimp gyoza.',
    },
  },

  // =====================================================
  // SOUPES
  // =====================================================

  {
    id: 'tom-yam-soupe',
    category: 'soups',
    image: '/tom-yam.jpg',
    price: 14,

    name: {
      fr: 'Tom Yam Soupe',
      en: 'Tom Yam Soup',
    },

    description: {
      fr: 'La fameuse soupe thaïlandaise à base de crevettes, citronnelle, légumes, gingembre et huile de sésame.',
      en: 'The famous Thai soup made with shrimp, lemongrass, vegetables, ginger and sesame oil.',
    },
  },

  {
    id: 'ramen-poulet',
    category: 'soups',
    image: '/ramen.jpg',
    price: 22,

    name: {
      fr: 'Ramen poulet',
      en: 'Chicken Ramen',
    },

    description: {
      fr: 'Ramen au poulet.',
      en: 'Chicken ramen.',
    },
  },

  {
    id: 'ramen-crevettes',
    category: 'soups',
    image: '/ramen.jpg',
    price: 26,

    name: {
      fr: 'Ramen crevettes',
      en: 'Shrimp Ramen',
    },

    description: {
      fr: 'Ramen aux crevettes.',
      en: 'Shrimp ramen.',
    },
  },

  // =====================================================
  // BROCHETTES
  // =====================================================

  {
    id: 'boeuf-fromage',
    category: 'skewers',
    image: '/beef-cheese.jpg',
    price: 19,

    name: {
      fr: 'Bœuf fromage',
      en: 'Beef & Cheese',
    },

    description: {
      fr: 'Brochettes de bœuf et fromage, servies avec un bol de riz vinaigré.',
      en: 'Beef and cheese skewers served with a bowl of seasoned vinegar rice.',
    },
  },

  {
    id: 'boeuf-fromage-pane',
    category: 'skewers',
    image: '/beef-cheese.jpg',
    price: 20,

    name: {
      fr: 'Bœuf fromage pané',
      en: 'Breaded Beef & Cheese',
    },

    description: {
      fr: 'Brochettes de bœuf et fromage panées, servies avec un bol de riz vinaigré.',
      en: 'Breaded beef and cheese skewers served with a bowl of seasoned vinegar rice.',
    },
  },

  {
    id: 'poulet-grille',
    category: 'skewers',
    image: '/chicken-skewers.jpg',
    price: 15,

    name: {
      fr: 'Poulet grillé',
      en: 'Grilled Chicken',
    },

    description: {
      fr: 'Brochettes de poulet grillé, servies avec un bol de riz vinaigré.',
      en: 'Grilled chicken skewers served with a bowl of seasoned vinegar rice.',
    },
  },

  {
    id: 'poulet-pane',
    category: 'skewers',
    image: '/chicken-skewers.jpg',
    price: 17,

    name: {
      fr: 'Poulet pané',
      en: 'Breaded Chicken',
    },

    description: {
      fr: 'Brochettes de poulet pané, servies avec un bol de riz vinaigré.',
      en: 'Breaded chicken skewers served with a bowl of seasoned vinegar rice.',
    },
  },

  // =====================================================
  // SALADES & BOWLS
  // =====================================================

  {
    id: 'salade-crabe',
    category: 'salads',
    image: '/crab-salad.jpg',
    price: 17,

    name: {
      fr: 'Salade de crabe',
      en: 'Crab Salad',
    },

    description: {
      fr: 'Une salade fraîche et colorée avec du surimi de crabe, des carottes et concombres râpés en julienne, accompagnée de mayonnaise japonaise et de jus de citron.',
      en: 'A fresh and colorful salad with crab surimi, julienned carrots and cucumber, Japanese mayonnaise and lemon juice.',
    },
  },

  {
    id: 'salade-thai',
    category: 'salads',
    image: '/thai-salad.jpg',
    price: 20,

    name: {
      fr: 'Salade thaï',
      en: 'Thai Salad',
    },

    description: {
      fr: 'Laitue, concombre, carottes, chou rouge, vermicelles, crevettes sautées et sauce thaï.',
      en: 'Lettuce, cucumber, carrots, red cabbage, vermicelli, stir-fried shrimp and Thai sauce.',
    },
  },

  {
    id: 'poke-bowl-saumon',
    category: 'salads',
    image: '/poke-salmon.jpg',
    price: 32,

    name: {
      fr: 'Poke Bowl saumon',
      en: 'Salmon Poke Bowl',
    },

    description: {
      fr: 'Riz vinaigré, saumon cru, avocat, carottes, concombre et oignons frits.',
      en: 'Seasoned vinegar rice, raw salmon, avocado, carrots, cucumber and crispy fried onions.',
    },
  },

  {
    id: 'poke-bowl-crevettes',
    category: 'salads',
    image: '/poke-shrimp.jpg',
    price: 32,

    name: {
      fr: 'Poke Bowl crevettes',
      en: 'Shrimp Poke Bowl',
    },

    description: {
      fr: 'Riz vinaigré, crevettes, avocat, ananas, carottes et concombre.',
      en: 'Seasoned vinegar rice, shrimp, avocado, pineapple, carrots and cucumber.',
    },
  },

  {
    id: 'poke-bowl-poulet-teriyaki',
    category: 'salads',
    image: '/poke-chicken.jpg',
    price: 28,

    name: {
      fr: 'Poke Bowl poulet teriyaki',
      en: 'Teriyaki Chicken Poke Bowl',
    },

    description: {
      fr: 'Riz vinaigré, poulet mariné, avocat, ananas, carottes et concombre.',
      en: 'Seasoned vinegar rice, marinated chicken, avocado, pineapple, carrots and cucumber.',
    },
  },

  // =====================================================
  // NOUILLES
  // =====================================================

  {
    id: 'pad-thai-poulet',
    category: 'noodles',
    image: '/pad-thai.jpg',
    price: 28,

    name: {
      fr: 'Pad Thai poulet',
      en: 'Chicken Pad Thai',
    },

    description: {
      fr: 'Pad Thai au poulet.',
      en: 'Chicken Pad Thai.',
    },
  },

  {
    id: 'pad-thai-boeuf',
    category: 'noodles',
    image: '/pad-thai.jpg',
    price: 32,

    name: {
      fr: 'Pad Thai bœuf',
      en: 'Beef Pad Thai',
    },

    description: {
      fr: 'Pad Thai au bœuf.',
      en: 'Beef Pad Thai.',
    },
  },

  {
    id: 'pad-thai-crevettes',
    category: 'noodles',
    image: '/pad-thai.jpg',
    price: 34,

    name: {
      fr: 'Pad Thai crevettes',
      en: 'Shrimp Pad Thai',
    },

    description: {
      fr: 'Pad Thai aux crevettes.',
      en: 'Shrimp Pad Thai.',
    },
  },

  {
    id: 'pad-see-u-poulet',
    category: 'noodles',
    image: '/pad-see-u.jpg',
    price: 27,

    name: {
      fr: 'Pad See U poulet',
      en: 'Chicken Pad See Ew',
    },

    description: {
      fr: 'Pad See U au poulet.',
      en: 'Chicken Pad See Ew.',
    },
  },

  {
    id: 'pad-see-u-boeuf',
    category: 'noodles',
    image: '/pad-see-u.jpg',
    price: 31,

    name: {
      fr: 'Pad See U bœuf',
      en: 'Beef Pad See Ew',
    },

    description: {
      fr: 'Pad See U au bœuf.',
      en: 'Beef Pad See Ew.',
    },
  },

  {
    id: 'pad-see-u-crevettes',
    category: 'noodles',
    image: '/pad-see-u.jpg',
    price: 33,

    name: {
      fr: 'Pad See U crevettes',
      en: 'Shrimp Pad See Ew',
    },

    description: {
      fr: 'Pad See U aux crevettes.',
      en: 'Shrimp Pad See Ew.',
    },
  },

  {
    id: 'drunken-noodles-poulet',
    category: 'noodles',
    image: '/drunken-noodles.jpg',
    price: 28,

    name: {
      fr: 'Drunken Noodles poulet',
      en: 'Chicken Drunken Noodles',
    },

    description: {
      fr: 'Drunken Noodles au poulet.',
      en: 'Chicken Drunken Noodles.',
    },
  },

  {
    id: 'drunken-noodles-boeuf',
    category: 'noodles',
    image: '/drunken-noodles.jpg',
    price: 32,

    name: {
      fr: 'Drunken Noodles bœuf',
      en: 'Beef Drunken Noodles',
    },

    description: {
      fr: 'Drunken Noodles au bœuf.',
      en: 'Beef Drunken Noodles.',
    },
  },

  {
    id: 'drunken-noodles-crevettes',
    category: 'noodles',
    image: '/drunken-noodles.jpg',
    price: 34,

    name: {
      fr: 'Drunken Noodles crevettes',
      en: 'Shrimp Drunken Noodles',
    },

    description: {
      fr: 'Drunken Noodles aux crevettes.',
      en: 'Shrimp Drunken Noodles.',
    },
  },

  {
    id: 'seafood-noodles',
    category: 'noodles',
    image: '/seafood-noodles.jpg',
    price: 37,

    name: {
      fr: 'Seafood Noodles',
      en: 'Seafood Noodles',
    },

    description: {
      fr: 'Nouilles aux fruits de mer.',
      en: 'Seafood noodles.',
    },
  },

  {
    id: 'salmon-noodles',
    category: 'noodles',
    image: '/salmon-noodles.jpg',
    price: 37,

    name: {
      fr: 'Salmon Noodles',
      en: 'Salmon Noodles',
    },

    description: {
      fr: 'Nouilles au saumon.',
      en: 'Salmon noodles.',
    },
  },

  {
    id: 'vermicelles-poulet',
    category: 'noodles',
    image: '/vermicelli.jpg',
    price: 26,

    name: {
      fr: 'Vermicelles poulet',
      en: 'Chicken Vermicelli',
    },

    description: {
      fr: 'Vermicelles au poulet.',
      en: 'Chicken vermicelli.',
    },
  },

  {
    id: 'vermicelles-boeuf',
    category: 'noodles',
    image: '/vermicelli.jpg',
    price: 30,

    name: {
      fr: 'Vermicelles bœuf',
      en: 'Beef Vermicelli',
    },

    description: {
      fr: 'Vermicelles au bœuf.',
      en: 'Beef vermicelli.',
    },
  },

  {
    id: 'vermicelles-crevettes',
    category: 'noodles',
    image: '/vermicelli.jpg',
    price: 32,

    name: {
      fr: 'Vermicelles crevettes',
      en: 'Shrimp Vermicelli',
    },

    description: {
      fr: 'Vermicelles aux crevettes.',
      en: 'Shrimp vermicelli.',
    },
  },

  // =====================================================
  // RIZ SAUTÉ
  // =====================================================

  {
    id: 'nasi-goreng-poulet',
    category: 'fried-rice',
    image: '/nasi-goreng.jpg',
    price: 24.5,

    name: {
      fr: 'Nasi Goreng poulet',
      en: 'Chicken Nasi Goreng',
    },

    description: {
      fr: 'Nasi Goreng au poulet.',
      en: 'Chicken Nasi Goreng.',
    },
  },

  {
    id: 'nasi-goreng-boeuf',
    category: 'fried-rice',
    image: '/nasi-goreng.jpg',
    price: 27.5,

    name: {
      fr: 'Nasi Goreng bœuf',
      en: 'Beef Nasi Goreng',
    },

    description: {
      fr: 'Nasi Goreng au bœuf.',
      en: 'Beef Nasi Goreng.',
    },
  },

  {
    id: 'nasi-goreng-crevettes',
    category: 'fried-rice',
    image: '/nasi-goreng.jpg',
    price: 29.5,

    name: {
      fr: 'Nasi Goreng crevettes',
      en: 'Shrimp Nasi Goreng',
    },

    description: {
      fr: 'Nasi Goreng aux crevettes.',
      en: 'Shrimp Nasi Goreng.',
    },
  },

  {
    id: 'khao-pad-sapparod-poulet',
    category: 'fried-rice',
    image: '/khao-pad-sapparod.jpg',
    price: 28,

    name: {
      fr: 'Khao Pad Sapparod poulet',
      en: 'Chicken Khao Pad Sapparod',
    },

    description: {
      fr: 'Khao Pad Sapparod au poulet.',
      en: 'Chicken Khao Pad Sapparod.',
    },
  },

  {
    id: 'khao-pad-sapparod-crevettes',
    category: 'fried-rice',
    image: '/khao-pad-sapparod.jpg',
    price: 33,

    name: {
      fr: 'Khao Pad Sapparod crevettes',
      en: 'Shrimp Khao Pad Sapparod',
    },

    description: {
      fr: 'Khao Pad Sapparod aux crevettes.',
      en: 'Shrimp Khao Pad Sapparod.',
    },
  },

  {
    id: 'seafood-rice',
    category: 'fried-rice',
    image: '/seafood-rice.jpg',
    price: 32,

    name: {
      fr: 'Seafood Rice',
      en: 'Seafood Rice',
    },

    description: {
      fr: 'Riz aux fruits de mer.',
      en: 'Seafood rice.',
    },
  },

  {
    id: 'shrimp-teriyaki-fried-rice',
    category: 'fried-rice',
    image: '/shrimp-teriyaki-rice.jpg',
    price: 29,

    name: {
      fr: 'Shrimp Teriyaki Fried Rice',
      en: 'Shrimp Teriyaki Fried Rice',
    },

    description: {
      fr: 'Riz sauté aux crevettes teriyaki.',
      en: 'Fried rice with teriyaki shrimp.',
    },
  },

  // =====================================================
  // WOK
  // =====================================================

  {
    id: 'chicken-satay',
    category: 'wok',
    image: '/chicken-satay.jpg',
    price: 19,

    name: {
      fr: 'Chicken Satay',
      en: 'Chicken Satay',
    },

    description: {
      fr: 'Chicken Satay.',
      en: 'Chicken Satay.',
    },
  },

  {
    id: 'pad-kaprao-poulet',
    category: 'wok',
    image: '/pad-kaprao.jpg',
    price: 25,

    name: {
      fr: 'Pad Kaprao poulet',
      en: 'Chicken Pad Kaprao',
    },

    description: {
      fr: 'Pad Kaprao au poulet.',
      en: 'Chicken Pad Kaprao.',
    },
  },

  {
    id: 'pad-kaprao-boeuf',
    category: 'wok',
    image: '/pad-kaprao.jpg',
    price: 28,

    name: {
      fr: 'Pad Kaprao bœuf',
      en: 'Beef Pad Kaprao',
    },

    description: {
      fr: 'Pad Kaprao au bœuf.',
      en: 'Beef Pad Kaprao.',
    },
  },

  {
    id: 'pad-kaprao-crevettes',
    category: 'wok',
    image: '/pad-kaprao.jpg',
    price: 30,

    name: {
      fr: 'Pad Kaprao crevettes',
      en: 'Shrimp Pad Kaprao',
    },

    description: {
      fr: 'Pad Kaprao aux crevettes.',
      en: 'Shrimp Pad Kaprao.',
    },
  },

  {
    id: 'poulet-katsu',
    category: 'wok',
    image: '/chicken-katsu.jpg',
    price: 22,

    name: {
      fr: 'Poulet Katsu',
      en: 'Chicken Katsu',
    },

    description: {
      fr: 'Filet d’escalope pané à la japonaise avec riz blanc, salade de chou et sauce Bulldog.',
      en: 'Japanese-style breaded chicken fillet served with white rice, cabbage salad and Bulldog sauce.',
    },
  },

  // =====================================================
  // SUSHI — NIGIRI
  // =====================================================

  {
    id: 'nigiri-saumon',
    category: 'sushi',
    image: '/nigiri.jpg',
    price: 9,

    name: {
      fr: 'Nigiri saumon (2 pièces)',
      en: 'Salmon Nigiri (2 pcs)',
    },

    description: {
      fr: 'Nigiri au saumon.',
      en: 'Salmon nigiri.',
    },
  },

  {
    id: 'nigiri-crevettes',
    category: 'sushi',
    image: '/nigiri.jpg',
    price: 9,

    name: {
      fr: 'Nigiri crevettes (2 pièces)',
      en: 'Shrimp Nigiri (2 pcs)',
    },

    description: {
      fr: 'Nigiri aux crevettes.',
      en: 'Shrimp nigiri.',
    },
  },

  {
    id: 'nigiri-saumon-avocat',
    category: 'sushi',
    image: '/nigiri.jpg',
    price: 10,

    name: {
      fr: 'Nigiri saumon avocat (2 pièces)',
      en: 'Salmon Avocado Nigiri (2 pcs)',
    },

    description: {
      fr: 'Nigiri au saumon et avocat.',
      en: 'Salmon and avocado nigiri.',
    },
  },

  {
    id: 'nigiri-thon',
    category: 'sushi',
    image: '/nigiri.jpg',
    price: 8,

    name: {
      fr: 'Nigiri thon (2 pièces)',
      en: 'Tuna Nigiri (2 pcs)',
    },

    description: {
      fr: 'Nigiri au thon.',
      en: 'Tuna nigiri.',
    },
  },

  // =====================================================
  // SASHIMI
  // =====================================================

  {
    id: 'sashimi-thon',
    category: 'sushi',
    image: '/sashimi.jpg',
    price: 10,

    name: {
      fr: 'Sashimi thon (3 pièces)',
      en: 'Tuna Sashimi (3 pcs)',
    },

    description: {
      fr: 'Sashimi de thon.',
      en: 'Tuna sashimi.',
    },
  },

  {
    id: 'sashimi-saumon',
    category: 'sushi',
    image: '/sashimi.jpg',
    price: 11,

    name: {
      fr: 'Sashimi saumon (3 pièces)',
      en: 'Salmon Sashimi (3 pcs)',
    },

    description: {
      fr: 'Sashimi de saumon.',
      en: 'Salmon sashimi.',
    },
  },

  {
    id: 'sashimi-tataki-thon',
    category: 'sushi',
    image: '/sashimi.jpg',
    price: 11,

    name: {
      fr: 'Tataki thon (3 pièces)',
      en: 'Tuna Tataki (3 pcs)',
    },

    description: {
      fr: 'Tataki de thon.',
      en: 'Tuna tataki.',
    },
  },

  {
    id: 'sashimi-tataki-saumon',
    category: 'sushi',
    image: '/sashimi.jpg',
    price: 12,

    name: {
      fr: 'Tataki saumon (3 pièces)',
      en: 'Salmon Tataki (3 pcs)',
    },

    description: {
      fr: 'Tataki de saumon.',
      en: 'Salmon tataki.',
    },
  },

  // =====================================================
  // HOSOMAKI
  // =====================================================

  {
    id: 'hosomaki-saumon',
    category: 'sushi',
    image: '/hosomaki.jpg',
    price: 14.5,

    name: {
      fr: 'Hosomaki saumon (6 pièces)',
      en: 'Salmon Hosomaki (6 pcs)',
    },

    description: {
      fr: 'Hosomaki au saumon.',
      en: 'Salmon hosomaki.',
    },
  },

  {
    id: 'hosomaki-crevettes-tempura',
    category: 'sushi',
    image: '/hosomaki.jpg',
    price: 14.5,

    name: {
      fr: 'Hosomaki crevettes tempura (6 pièces)',
      en: 'Tempura Shrimp Hosomaki (6 pcs)',
    },

    description: {
      fr: 'Hosomaki aux crevettes tempura.',
      en: 'Tempura shrimp hosomaki.',
    },
  },

  {
    id: 'hosomaki-thon',
    category: 'sushi',
    image: '/hosomaki.jpg',
    price: 13,

    name: {
      fr: 'Hosomaki thon (6 pièces)',
      en: 'Tuna Hosomaki (6 pcs)',
    },

    description: {
      fr: 'Hosomaki au thon.',
      en: 'Tuna hosomaki.',
    },
  },

  {
    id: 'hosomaki-concombre-fromage',
    category: 'sushi',
    image: '/hosomaki.jpg',
    price: 10,

    name: {
      fr: 'Hosomaki concombre fromage (6 pièces)',
      en: 'Cucumber Cheese Hosomaki (6 pcs)',
    },

    description: {
      fr: 'Hosomaki au concombre et fromage.',
      en: 'Cucumber and cheese hosomaki.',
    },
  },

  {
    id: 'hosomaki-avocat-fromage',
    category: 'sushi',
    image: '/hosomaki.jpg',
    price: 12,

    name: {
      fr: 'Hosomaki avocat fromage (6 pièces)',
      en: 'Avocado Cheese Hosomaki (6 pcs)',
    },

    description: {
      fr: 'Hosomaki à l’avocat et fromage.',
      en: 'Avocado and cheese hosomaki.',
    },
  },

  {
    id: 'hosomaki-crabe-pane',
    category: 'sushi',
    image: '/hosomaki.jpg',
    price: 11,

    name: {
      fr: 'Hosomaki crabe pané (6 pièces)',
      en: 'Breaded Crab Hosomaki (6 pcs)',
    },

    description: {
      fr: 'Hosomaki au crabe pané.',
      en: 'Breaded crab hosomaki.',
    },
  },

  // =====================================================
  // FUTOMAKI
  // =====================================================

  {
    id: 'futomaki-f1',
    category: 'sushi',
    image: '/futomaki.jpg',
    price: 17,

    name: {
      fr: 'F1 Futomaki (5 pièces)',
      en: 'F1 Futomaki (5 pcs)',
    },

    description: {
      fr: 'Saumon, avocat, concombre et mayonnaise épicée.',
      en: 'Salmon, avocado, cucumber and spicy mayonnaise.',
    },
  },

  {
    id: 'futomaki-f2',
    category: 'sushi',
    image: '/futomaki.jpg',
    price: 15.5,

    name: {
      fr: 'F2 Futomaki (5 pièces)',
      en: 'F2 Futomaki (5 pcs)',
    },

    description: {
      fr: 'Poulet, laitue, fromage, carottes et cream cheese.',
      en: 'Chicken, lettuce, cheese, carrots and cream cheese.',
    },
  },

  {
    id: 'futomaki-f3',
    category: 'sushi',
    image: '/futomaki.jpg',
    price: 18.5,

    name: {
      fr: 'F3 Futomaki (5 pièces)',
      en: 'F3 Futomaki (5 pcs)',
    },

    description: {
      fr: 'Saumon, crevettes, avocat, fromage, concombre et cream cheese.',
      en: 'Salmon, shrimp, avocado, cheese, cucumber and cream cheese.',
    },
  },

  {
    id: 'futomaki-f4',
    category: 'sushi',
    image: '/futomaki.jpg',
    price: 17,

    name: {
      fr: 'F4 Futomaki (5 pièces)',
      en: 'F4 Futomaki (5 pcs)',
    },

    description: {
      fr: 'Crevettes, avocat, concombre et mayonnaise épicée.',
      en: 'Shrimp, avocado, cucumber and spicy mayonnaise.',
    },
  },

  {
    id: 'futomaki-f5',
    category: 'sushi',
    image: '/futomaki.jpg',
    price: 18,

    name: {
      fr: 'F5 Futomaki (5 pièces)',
      en: 'F5 Futomaki (5 pcs)',
    },

    description: {
      fr: 'Crevettes tempura, surimi de crabe haché, oignon frit et mayonnaise épicée.',
      en: 'Tempura shrimp, chopped crab surimi, fried onion and spicy mayonnaise.',
    },
  },
]