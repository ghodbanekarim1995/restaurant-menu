export type MenuCategory =
    | 'starters'
    | 'soups'
    | 'skewers'
    | 'salads'
    | 'noodles'
    | 'fried-rice'
    | 'wok'
    | 'nigiri'
    | 'sashimi'
    | 'hosomaki'
    | 'futomaki'
    | 'california'
    | 'crunchy'
    | 'chef-roll'
    | 'hot-roll'
    | 'sushi-burger'
    | 'poke-burger'
    | 'boxes'
    | 'all-salmon-mix'
    | 'crunchy-mix'
    | 'boisson'
    | 'supplements'

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
        id: 'nems-poulet',
        category: 'starters',
        image: '/nems-poulet.jpg',
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
        image: '/nems-poulet.jpg',
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
        id: 'spring-rolls-poulet',
        category: 'starters',
        image: '/spring-rolls-poulet.jpg',
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
        image: '/spring-rolls-poulet.jpg',
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
        image: '/spring-rolls-saumon.jpeg',
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
        image: '/chicken-cheese-yakitori.jpeg',
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
        image: '/crevettes-tempura.jpg',
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
        image: '/gyozas-poulet.jpg',
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
        image: '/gyozas-poulet.jpg',
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
        image: '/gyozas-poulet.jpg',
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
        image: '',
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
        image: '',
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
        image: '/ramen-crevettes.jpg',
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
        image: '/boeuf-fromage.jpg',
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
        image: '/boeuf-fromage-pane.jpg',
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
        image: '/poulet-grille.jpg',
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
        image: '/poulet-pane.jpg',
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
        image: '/salade-crabe.jpg',
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
        image: '/salade-thai.jpg',
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
        image: '/poke-bowl-saumon.jpeg',
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
        image: '/poke-bowl-crevettes.jpeg',
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
        image: '/poke-bowl-poulet-teriyaki.jpeg',
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
        image: '/pad-thai-poulet.jpg',
        price: 28,

        name: {
            fr: 'Pad Thai poulet',
            en: 'Chicken Pad Thai',
        },

        description: {
            fr: 'Nouilles de riz sautées au wok accompagnées de légumes croquants ,œuf et cacahuètes concassées,le tout relevé d une sauce thai légerement sucrée acidulée et savoureuse.',
            en: 'Wok-fried rice noodles served with crunchy vegetables, egg, and crushed peanuts, all tossed in a slightly sweet, tangy, and flavorful Thai sauce.',
        },
    },

    {
        id: 'pad-thai-boeuf',
        category: 'noodles',
        image: '/pad-thai-boeuf.jpg',
        price: 32,

        name: {
            fr: 'Pad Thai bœuf',
            en: 'Beef Pad Thai',
        },

        description: {
            fr: 'Nouilles de riz sautées au wok accompagnées de légumes croquants ,œuf et cacahuètes concassées,le tout relevé d une sauce thai légerement sucrée acidulée et savoureuse.',
            en: 'Wok-fried rice noodles served with crunchy vegetables, egg, and crushed peanuts, all tossed in a slightly sweet, tangy, and flavorful Thai sauce.',
        },
    },

    {
        id: 'pad-thai-crevettes',
        category: 'noodles',
        image: '/pad-thai-crevettes.jpg',
        price: 34,

        name: {
            fr: 'Pad Thai crevettes',
            en: 'Shrimp Pad Thai',
        },

        description: {
            fr: 'Nouilles de riz sautées au wok accompagnées de légumes croquants ,œuf et cacahuètes concassées,le tout relevé d une sauce thai légerement sucrée acidulée et savoureuse.',
            en: 'Wok-fried rice noodles served with crunchy vegetables, egg, and crushed peanuts, all tossed in a slightly sweet, tangy, and flavorful Thai sauce.',
        },
    },

    {
        id: 'pad-see-u-poulet',
        category: 'noodles',
        image: '/pad-see-u-poulet.jpg',
        price: 27,

        name: {
            fr: 'Pad See U poulet',
            en: 'Chicken Pad See Ew',
        },

        description: {
            fr: 'Nouilles fraiches sautées au wok,légumes croquants et sauce maison gourmande.',
            en: 'Fresh noodles stir-fried in the wok with crunchy vegetables and a delicious homemade sauce.',
        },
    },

    {
        id: 'pad-see-u-boeuf',
        category: 'noodles',
        image: '/pad-see-u-boeuf.jpg',
        price: 31,

        name: {
            fr: 'Pad See U bœuf',
            en: 'Beef Pad See Ew',
        },

        description: {
            fr: 'Nouilles fraiches sautées au wok,légumes croquants et sauce maison gourmande.',
            en: 'Fresh noodles stir-fried in the wok with crunchy vegetables and a delicious homemade sauce.',
        },
    },

    {
        id: 'pad-see-u-crevettes',
        category: 'noodles',
        image: '/pad-see-u-crevettes.jpg',
        price: 33,

        name: {
            fr: 'Pad See U crevettes',
            en: 'Shrimp Pad See Ew',
        },

        description: {
            fr: 'Nouilles fraiches sautées au wok,légumes croquants et sauce maison gourmande.',
            en: 'Fresh noodles stir-fried in the wok with crunchy vegetables and a delicious homemade sauce.',
        },
    },

    {
        id: 'drunken-noodles-poulet',
        category: 'noodles',
        image: '/drunken-noodles-poulet.jpg',
        price: 28,

        name: {
            fr: 'Drunken Noodles poulet',
            en: 'Chicken Drunken Noodles',
        },

        description: {
            fr: 'Nouilles de riz sautées au wok légumes croquants, basilic et sauce maison savoureuse.',
            en: 'Wok-fried rice noodles with crunchy vegetables, basil, and a flavorful homemade sauce.',
        },
    },

    {
        id: 'drunken-noodles-boeuf',
        category: 'noodles',
        image: '/drunken-noodles-boeuf.jpg',
        price: 32,

        name: {
            fr: 'Drunken Noodles bœuf',
            en: 'Beef Drunken Noodles',
        },

        description: {
            fr: 'Nouilles de riz sautées au wok légumes croquants, basilic et sauce maison savoureuse.',
            en: 'Wok-fried rice noodles with crunchy vegetables, basil, and a flavorful homemade sauce.',
        },
    },

    {
        id: 'drunken-noodles-crevettes',
        category: 'noodles',
        image: '/drunken-noodles-crevettes.jpg',
        price: 34,

        name: {
            fr: 'Drunken Noodles crevettes',
            en: 'Shrimp Drunken Noodles',
        },

        description: {
            fr: 'Nouilles de riz sautées au wok légumes croquants, basilic et sauce maison savoureuse.',
            en: 'Wok-fried rice noodles with crunchy vegetables, basil, and a flavorful homemade sauce.',
        },
    },

    {
        id: 'seafood-noodles',
        category: 'noodles',
        image: '/seafood-noodles.jpeg',
        price: 37,

        name: {
            fr: 'Seafood Noodles',
            en: 'Seafood Noodles',
        },

        description: {
            fr: 'Nouilles de riz plates au fruit de mer.',
            en: 'Flat rice noodles with seafood',
        },
    },

    {
        id: 'salmon-noodles',
        category: 'noodles',
        image: '',
        price: 37,

        name: {
            fr: 'Salmon Noodles',
            en: 'Salmon Noodles',
        },

        description: {
            fr: 'Des nouilles fraiches sautées aux légumes et saumon.',
            en: 'Fresh stir-fried noodles with vegetables and salmon.',
        },
    },

    {
        id: 'vermicelles-poulet',
        category: 'noodles',
        image: '',
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
        image: '',
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
        image: '',
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
        image: '/nasi-goreng-poulet.jpg',
        price: 24.5,

        name: {
            fr: 'Nasi Goreng poulet',
            en: 'Chicken Nasi Goreng',
        },

        description: {
            fr: 'Riz parfumé sauté au wok,légumes croquants œuf et sauce maison savoureuse.',
            en: 'Fragrant rice stir-fried in the wok with crunchy vegetables, egg, and a flavorful homemade sauce.',
        },
    },

    {
        id: 'nasi-goreng-boeuf',
        category: 'fried-rice',
        image: '/nasi-goreng-boeuf.jpg',
        price: 27.5,

        name: {
            fr: 'Nasi Goreng bœuf',
            en: 'Beef Nasi Goreng',
        },

        description: {
            fr: 'Riz parfumé sauté au wok,légumes croquants œuf et sauce maison savoureuse.',
            en: 'Fragrant rice stir-fried in the wok with crunchy vegetables, egg, and a flavorful homemade sauce.',
        },
    },

    {
        id: 'nasi-goreng-crevettes',
        category: 'fried-rice',
        image: '/nasi-goreng-crevettes.jpg',
        price: 29.5,

        name: {
            fr: 'Nasi Goreng crevettes',
            en: 'Shrimp Nasi Goreng',
        },

        description: {
            fr: 'Riz parfumé sauté au wok,légumes croquants œuf et sauce maison savoureuse.',
            en: 'Fragrant rice stir-fried in the wok with crunchy vegetables, egg, and a flavorful homemade sauce.',
        },
    },

    {
        id: 'khao-pad-sapparod-poulet',
        category: 'fried-rice',
        image: '',
        price: 28,

        name: {
            fr: 'Khao Pad Sapparod poulet',
            en: 'Chicken Khao Pad Sapparod',
        },

        description: {
            fr: 'Une évasion exotique est assuré par ce plat ;riz sautés avec des morceaux d ananas agrémentés de curry jaune',
            en: 'An exotic escape awaits with this dish: stir-fried rice with chunks of pineapple, enhanced with aromatic yellow curry.',
        },
    },

    {
        id: 'khao-pad-sapparod-crevettes',
        category: 'fried-rice',
        image: '/khao-pad-sapparod-crevettes.jpeg',
        price: 33,

        name: {
            fr: 'Khao Pad Sapparod crevettes',
            en: 'Shrimp Khao Pad Sapparod',
        },

        description: {
            fr: 'Une évasion exotique est assuré par ce plat ;riz sautés avec des morceaux d ananas agrémentés de curry jaune',
            en: 'An exotic escape awaits with this dish: stir-fried rice with chunks of pineapple, enhanced with aromatic yellow curry.',
        },
    },

    {
        id: 'seafood-rice',
        category: 'fried-rice',
        image: '',
        price: 32,

        name: {
            fr: 'Seafood Rice',
            en: 'Seafood Rice',
        },

        description: {
            fr: 'Fruit de mer(crevettes crabe et seiche)sur un lit de riz sautés servi avec un œuf.',
            en: 'Seafood (shrimp, crab, and squid) served on a bed of stir-fried rice, accompanied by an egg.',
        },
    },

    {
        id: 'shrimp-teriyaki-fried-rice',
        category: 'fried-rice',
        image: '',
        price: 29,

        name: {
            fr: 'Shrimp Teriyaki Fried Rice',
            en: 'Shrimp Teriyaki Fried Rice',
        },

        description: {
            fr: 'Pour les amateurs du gout sucré salé  des crevettes avec du riz sauté dans une sauce teriyaki.',
            en: 'For lovers of sweet and savory flavors: succulent shrimp with stir-fried rice, tossed in a delicious teriyaki sauce.',
        },
    },

    // =====================================================
    // WOK
    // =====================================================

    {
        id: 'chicken-satay',
        category: 'wok',
        image: '/chicken-satay.jpeg',
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
        image: '/pad-kaprao-poulet.jpg',
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
        image: '/pad-kaprao-boeuf.jpg',
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
        image: '/pad-kaprao-crevettes.jpg',
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
        image: '/poulet-katsu.jpg',
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

    {
        id: 'katsu-curry',
        category: 'wok',
        image: '/katsu-curry.jpg',
        price: 32,

        name: {
            fr: 'Katsu curry ',
            en: 'Katsu curry ',
        },

        description: {
            fr: 'Poulet panné a la japonaise avec riz et sauce au curry épaisse et parfumée',
            en: 'Japanese-style breaded chicken served with rice and a rich, aromatic curry sauce.',
        },
    },

    // =====================================================
    // NIGIRI — 2 PIÈCES
    // =====================================================

    {
        id: 'nigiri-saumon',
        category: 'nigiri',
        image: '/nigiri-saumon.jpg',
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
        category: 'nigiri',
        image: '/nigiri-crevettes.jpg',
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
        category: 'nigiri',
        image: '/nigiri-saumon-avocat.jpg',
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
        category: 'nigiri',
        image: '/nigiri-thon.jpg',
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
    // SASHIMI — 3 PIÈCES
    // =====================================================

    {
        id: 'sashimi-thon',
        category: 'sashimi',
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
        category: 'sashimi',
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
        category: 'sashimi',
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
        category: 'sashimi',
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
    // HOSOMAKI — 6 PIÈCES
    // =====================================================

    {
        id: 'hosomaki-saumon',
        category: 'hosomaki',
        image: '/hosomaki-saumon.png',
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
        category: 'hosomaki',
        image: '/hosomaki-crevettes-tempura.png',
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
        category: 'hosomaki',
        image: '/hosomaki-thon.png',
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
        category: 'hosomaki',
        image: '/hosomaki-concombre-fromage.png',
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
        category: 'hosomaki',
        image: '/hosomaki-avocat-fromage.png',
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
        category: 'hosomaki',
        image: '/hosomaki-crabe-pane.png',
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
    // FUTOMAKI — 5 PIÈCES
    // =====================================================

    {
        id: 'futomaki-f1',
        category: 'futomaki',
        image: '/futomaki-f1.png',
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
        category: 'futomaki',
        image: '/futomaki-f2.png',
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
        category: 'futomaki',
        image: '/futomaki-f3.png',
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
        category: 'futomaki',
        image: '/futomaki-f4.png',
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
        category: 'futomaki',
        image: '/futomaki-f5.png',
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


    {
        id: 'california-fresh',
        category: 'california',
        image: '/california-fresh.png',
        price: 23,
        name: {
            fr: 'Fresh',
            en: 'Fresh',
        },
        description: {
            fr: 'Saumon, avocat, concombre',
            en: 'Salmon, avocado, cucumber',
        },
    },

    {
        id: 'california-spicy-shrimp',
        category: 'california',
        image: '/california-spicy-shrimp.png',
        price: 23,
        name: {
            fr: 'Spicy Shrimp',
            en: 'Spicy Shrimp',
        },
        description: {
            fr: 'Crevettes, avocat, concombre, mayonnaise épicée, shishimi',
            en: 'Shrimp, avocado, cucumber, spicy mayonnaise, shishimi',
        },
    },

    {
        id: 'california-vegan',
        category: 'california',
        image: '/california-vegan.png',
        price: 19,
        name: {
            fr: 'Vegan',
            en: 'Vegan',
        },
        description: {
            fr: 'Laitue, avocat, concombre, carotte, ananas, aneth',
            en: 'Lettuce, avocado, cucumber, carrot, pineapple, dill',
        },
    },

    {
        id: 'california-tuna-roll',
        category: 'california',
        image: '/california-tuna-roll.png',
        price: 21,
        name: {
            fr: 'Tuna Roll',
            en: 'Tuna Roll',
        },
        description: {
            fr: 'Thon épicé, avocat, concombre, carotte, shishimi',
            en: 'Spicy tuna, avocado, cucumber, carrot, shishimi',
        },
    },

    {
        id: 'california-sweet-ebi',
        category: 'california',
        image: '/california-sweet-ebi.png',
        price: 23,
        name: {
            fr: 'Sweet Ebi',
            en: 'Sweet Ebi',
        },
        description: {
            fr: 'Crevettes tempura, avocat, concombre, ananas, sauce teriyaki',
            en: 'Tempura shrimp, avocado, cucumber, pineapple, teriyaki sauce',
        },
    },

    {
        id: 'california-spicy-salmon',
        category: 'california',
        image: '/california-spicy-salmon.png',
        price: 23,
        name: {
            fr: 'Spicy Salmon',
            en: 'Spicy Salmon',
        },
        description: {
            fr: 'Saumon, avocat, concombre, shishimi',
            en: 'Salmon, avocado, cucumber, shishimi',
        },
    },

    {
        id: 'california-saumon-tempura',
        category: 'california',
        image: '/california-saumon-tempura.png',
        price: 23,
        name: {
            fr: 'Saumon Tempura',
            en: 'Tempura Salmon',
        },
        description: {
            fr: 'Saumon tempura, concombre, fromage',
            en: 'Tempura salmon, cucumber, cheese',
        },
    },

    {
        id: 'california-crabe',
        category: 'california',
        image: '/california-crabe.png',
        price: 20,
        name: {
            fr: 'Crabe',
            en: 'Crab',
        },
        description: {
            fr: 'Surimi de crabe tempura, avocat, fromage',
            en: 'Tempura crab surimi, avocado, cheese',
        },
    },

    {
        id: 'california-atlantique',
        category: 'california',
        image: '/california-atlantique.jpeg',
        price: 24,
        name: {
            fr: 'Atlantique',
            en: 'Atlantic',
        },
        description: {
            fr: 'Saumon fumé, avocat, menthe, fromage, aneth',
            en: 'Smoked salmon, avocado, mint, cheese, dill',
        },
    },

    // =====================================================
    // CRUNCHY
    // =====================================================

    {
        id: 'crunchy-chicken-roll',
        category: 'crunchy',
        image: '/crunchy-chicken-roll.png',
        price: 21,

        name: {
            fr: 'Chicken Roll (8 pièces)',
            en: 'Chicken Roll (8 pcs)',
        },

        description: {
            fr: 'Chicken Roll.',
            en: 'Chicken Roll.',
        },
    },

    {
        id: 'crunchy-ebi-maki',
        category: 'crunchy',
        image: '/crunchy-ebi-maki.png',
        price: 24,

        name: {
            fr: 'Ebi Maki (8 pièces)',
            en: 'Ebi Maki (8 pcs)',
        },

        description: {
            fr: 'Ebi Maki.',
            en: 'Ebi Maki.',
        },
    },

    {
        id: 'crunchy-salmon-roll',
        category: 'crunchy',
        image: '/crunchy-salmon-roll.png',
        price: 25,

        name: {
            fr: 'Salmon Roll (8 pièces)',
            en: 'Salmon Roll (8 pcs)',
        },

        description: {
            fr: 'Salmon Roll.',
            en: 'Salmon Roll.',
        },
    },

    {
        id: 'crunchy-crab-surimi',
        category: 'crunchy',
        image: '/crunchy-crab-surimi.jpeg',
        price: 21,

        name: {
            fr: 'Crab Surimi (8 pièces)',
            en: 'Crab Surimi (8 pcs)',
        },

        description: {
            fr: 'Crabe pané, fromage, avocat et sauce teriyaki.',
            en: 'Breaded crab, cheese, avocado and teriyaki sauce.',
        },
    },

    {
        id: 'crunchy-futomaki',
        category: 'crunchy',
        image: '/crunchy-futomaki.jpeg',
        price: 19.5,

        name: {
            fr: 'Crunchy Futomaki (5 pièces)',
            en: 'Crunchy Futomaki (5 pcs)',
        },

        description: {
            fr: 'Crunchy Futomaki.',
            en: 'Crunchy Futomaki.',
        },
    },

    {
        id: 'dragon-eye',
        category: 'crunchy',
        image: '/dragon-eye.jpg',
        price: 20,

        name: {
            fr: 'Dragon Eye (5 pièces)',
            en: 'Dragon Eye (5 pcs)',
        },

        description: {
            fr: 'Dragon Eye.',
            en: 'Dragon Eye.',
        },
    },

    {
        id: 'crunchy-hoso-saumon',
        category: 'crunchy',
        image: '',
        price: 19,

        name: {
            fr: 'Hoso saumon',
            en: 'Salmon Hoso',
        },

        description: {
            fr: 'Hosomaki saumon, avocat et mayonnaise épicée.',
            en: 'Salmon hosomaki with avocado and spicy mayonnaise.',
        },
    },

    // =====================================================
    // ROULEAU DU CHEF — 8 PIÈCES
    // =====================================================

    {
        id: 'shake-yaki',
        category: 'chef-roll',
        image: '/shake-yaki.png',
        price: 33,

        name: {
            fr: 'Shake Yaki (8 pièces)',
            en: 'Shake Yaki (8 pcs)',
        },

        description: {
            fr: 'Shake Yaki.',
            en: 'Shake Yaki.',
        },
    },

    {
        id: 'green-dragon',
        category: 'chef-roll',
        image: '/green-dragon.png',
        price: 32,

        name: {
            fr: 'Green Dragon (8 pièces)',
            en: 'Green Dragon (8 pcs)',
        },

        description: {
            fr: 'Green Dragon.',
            en: 'Green Dragon.',
        },
    },

    {
        id: 'red-dragon',
        category: 'chef-roll',
        image: '/red-dragon.png',
        price: 30,

        name: {
            fr: 'Red Dragon (8 pièces)',
            en: 'Red Dragon (8 pcs)',
        },

        description: {
            fr: 'Red Dragon.',
            en: 'Red Dragon.',
        },
    },

    {
        id: 'hot-and-cold',
        category: 'chef-roll',
        image: '/hot-and-cold.png',
        price: 33,

        name: {
            fr: 'Hot & Cold (8 pièces)',
            en: 'Hot & Cold (8 pcs)',
        },

        description: {
            fr: 'Hot & Cold.',
            en: 'Hot & Cold.',
        },
    },

    {
        id: 'rainbow',
        category: 'chef-roll',
        image: '/rainbow.png',
        price: 33,

        name: {
            fr: 'Rainbow (8 pièces)',
            en: 'Rainbow (8 pcs)',
        },

        description: {
            fr: 'À l’intérieur : surimi de crabe, tempura, avocat et fromage. À l’extérieur : saumon, crevette et avocat.',
            en: 'Inside: crab surimi, tempura, avocado and cheese. Outside: salmon, shrimp and avocado.',
        },
    },

    {
        id: 'iceberg',
        category: 'chef-roll',
        image: '/iceberg.jpeg',
        price: 32,

        name: {
            fr: 'Iceberg (8 pièces)',
            en: 'Iceberg (8 pcs)',
        },

        description: {
            fr: 'Iceberg.',
            en: 'Iceberg.',
        },
    },

    {
        id: 'fuji',
        category: 'chef-roll',
        image: '/fuji.png',
        price: 31,

        name: {
            fr: 'Fuji (8 pièces)',
            en: 'Fuji (8 pcs)',
        },

        description: {
            fr: 'À l’intérieur : crevettes tempura et avocat. À l’extérieur : surimi de crabe mixé et sauce Fuji.',
            en: 'Inside: tempura shrimp and avocado. Outside: mixed crab surimi and Fuji sauce.',
        },
    },

    {
        id: 'tokyo-roll',
        category: 'chef-roll',
        image: '/tokyo-roll.png',
        price: 30,

        name: {
            fr: 'Tokyo Roll (6 pièces)',
            en: 'Tokyo Roll (6 pcs)',
        },

        description: {
            fr: 'Avocat, laitue et fromage avec du riz enroulé au saumon.',
            en: 'Avocado, lettuce and cheese with rice wrapped in salmon.',
        },
    },

    // =====================================================
    // HOT ROLL — MAKI DOG
    // =====================================================

    {
        id: 'hot-roll-salmon',
        category: 'hot-roll',
        image: '/hot-roll-salmon.jpg',
        price: 24,

        name: {
            fr: 'Hot Roll Salmon',
            en: 'Salmon Hot Roll',
        },

        description: {
            fr: 'Saumon frais, fromage, avocat, oignon frit, sauce creamy sriracha et sauce teriyaki.',
            en: 'Fresh salmon, cheese, avocado, fried onion, creamy sriracha sauce and teriyaki sauce.',
        },
    },

    {
        id: 'hot-roll-shrimp',
        category: 'hot-roll',
        image: '/hot-roll-shrimp.jpg',
        price: 24,

        name: {
            fr: 'Hot Roll Shrimp',
            en: 'Shrimp Hot Roll',
        },

        description: {
            fr: 'Crevette tempura, fromage, avocat, oignon frit, sauce creamy sriracha et sauce teriyaki.',
            en: 'Tempura shrimp, cheese, avocado, fried onion, creamy sriracha sauce and teriyaki sauce.',
        },
    },

    {
        id: 'hot-roll-tuna',
        category: 'hot-roll',
        image: '',
        price: 22,

        name: {
            fr: 'Hot Roll Tuna',
            en: 'Tuna Hot Roll',
        },

        description: {
            fr: 'Thon rouge cuit, fromage, avocat, oignon frit, sauce épicée et sauce teriyaki.',
            en: 'Cooked red tuna, cheese, avocado, fried onion, spicy sauce and teriyaki sauce.',
        },
    },

    // =====================================================
    // SUSHI BURGER
    // =====================================================

    {
        id: 'sushi-burger-salmon',
        category: 'sushi-burger',
        image: '/sushi-burger-salmon.jpg',
        price: 27.5,

        name: {
            fr: 'Sushi Burger Salmon',
            en: 'Salmon Sushi Burger',
        },

        description: {
            fr: 'Saumon frais, fromage, avocat, surimi mix et riz vinaigré enrobé de feuilles d’algues, avec sauce mayo épicée et teriyaki.',
            en: 'Fresh salmon, cheese, avocado, mixed crab surimi and seasoned rice wrapped in seaweed, with spicy mayo and teriyaki sauce.',
        },
    },

    {
        id: 'sushi-burger-shrimp',
        category: 'sushi-burger',
        image: '',
        price: 27.5,

        name: {
            fr: 'Sushi Burger Shrimp',
            en: 'Shrimp Sushi Burger',
        },

        description: {
            fr: 'Crevettes tempura, fromage, avocat, surimi mix et riz vinaigré enrobé de feuilles d’algues, avec sauce mayo épicée et teriyaki.',
            en: 'Tempura shrimp, cheese, avocado, mixed crab surimi and seasoned rice wrapped in seaweed, with spicy mayo and teriyaki sauce.',
        },
    },

    // =====================================================
    // POKE BURGER
    // =====================================================

    {
        id: 'poke-burger-salmon',
        category: 'poke-burger',
        image: '/poke-burger-salmon.jpg',
        price: 28,

        name: {
            fr: 'Poke Burger Salmon',
            en: 'Salmon Poke Burger',
        },

        description: {
            fr: 'Saumon mariné, avocat, salade de crabe et fromage avec nos sauces maison. Le pain est remplacé par des galettes de riz.',
            en: 'Marinated salmon, avocado, crab salad and cheese with our homemade sauces. Rice cakes replace the traditional burger bun.',
        },
    },

    {
        id: 'poke-burger-shrimp',
        category: 'poke-burger',
        image: '/poke-burger-shrimp.jpg',
        price: 28,

        name: {
            fr: 'Poke Burger Shrimp',
            en: 'Shrimp Poke Burger',
        },

        description: {
            fr: 'Crevettes tempura, avocat, salade de crabe et fromage avec nos sauces maison. Le pain est remplacé par des galettes de riz.',
            en: 'Tempura shrimp, avocado, crab salad and cheese with our homemade sauces. Rice cakes replace the traditional burger bun.',
        },
    },

    {
        id: 'poke-burger-tuna',
        category: 'poke-burger',
        image: '',
        price: 25,

        name: {
            fr: 'Poke Burger Tuna',
            en: 'Tuna Poke Burger',
        },

        description: {
            fr: 'Thon rouge mariné, avocat, salade de crabe et fromage avec nos sauces maison. Le pain est remplacé par des galettes de riz.',
            en: 'Marinated red tuna, avocado, crab salad and cheese with our homemade sauces. Rice cakes replace the traditional burger bun.',
        },
    },


    //boxe


    {
        id: 'rock-n-roll-mix',
        category: 'boxes',
        image: '/rock-n-roll-mix.jpg',
        price: 85,
        name: {
            fr: 'Rock N Roll Mix',
            en: 'Rock N Roll Mix',
        },
        description: {
            fr: '8 Rainbow · 6 Futomaki F5 · 8 California Fresh · 4 Fuji Roll · 8 Crunchy Maki Saumon',
            en: '8 Rainbow · 6 Futomaki F5 · 8 Fresh California · 4 Fuji Roll · 8 Salmon Crunchy Maki',
        },
    },

    {
        id: 'mix-32',
        category: 'boxes',
        image: '/mix-32.jpg',
        price: 75,
        name: {
            fr: 'Mix 32',
            en: 'Mix 32',
        },
        description: {
            fr: '5 Futomaki · 5 Dragon Eye (Crunchy) · 8 California · 10 Hosomaki · 4 Nigiri',
            en: '5 Futomaki · 5 Dragon Eye (Crunchy) · 8 California · 10 Hosomaki · 4 Nigiri',
        },
    },

       {
        id: 'apero-box',
        category: 'boxes',
        image: '/apero-box.jpeg',
        price: 70,
        name: {
            fr: 'Apéro Box',
            en: 'Apéro Box',
        },
        description: {
            fr: 'Une sélection idéale pour l’apéritif',
            en: 'A selection made for aperitif',
        },
    },

       {
        id: 'wok-time-box',
        category: 'boxes',
        image: '/wok-time-box.jpeg',
        price: 38,
        name: {
            fr: 'Wok Time Box',
            en: 'Wok Time Box',
        },
        description: {
            fr: 'Une sélection spéciale Wok N Roll',
            en: 'A special Wok N Roll selection',
        },
    },


    {
        id: 'mix-12',
        category: 'boxes',
        image: '',
        price: 33,
        name: {
            fr: 'Mix 12',
            en: 'Mix 12',
        },
        description: {
            fr: '5 Futomaki · 4 California · 3 Hosomaki',
            en: '5 Futomaki · 4 California · 3 Hosomaki',
        },
    },

    {
        id: 'mix-24',
        category: 'boxes',
        image: '',
        price: 61,
        name: {
            fr: 'Mix 24',
            en: 'Mix 24',
        },
        description: {
            fr: '10 Futomaki · 8 California · 6 Hosomaki',
            en: '10 Futomaki · 8 California · 6 Hosomaki',
        },
    },

    {
        id: 'mix-48',
        category: 'boxes',
        image: '/mix-48.jpeg',
        price: 112,
        name: {
            fr: 'Mix 48',
            en: 'Mix 48',
        },
        description: {
            fr: '10 Futomaki · 10 Dragon Eye (Crunchy) · 16 California · 6 Hosomaki · 6 Nigiri',
            en: '10 Futomaki · 10 Dragon Eye (Crunchy) · 16 California · 6 Hosomaki · 6 Nigiri',
        },
    },

    {
        id: 'mix-72',
        category: 'boxes',
        image: '/mix-72.jpeg',
        price: 170,
        name: {
            fr: 'Mix 72',
            en: 'Mix 72',
        },
        description: {
            fr: '15 Futomaki · 15 Crunchy · 24 California · 12 Hosomaki · 6 Nigiri',
            en: '15 Futomaki · 15 Crunchy · 24 California · 12 Hosomaki · 6 Nigiri',
        },
    },

    {
        id: 'le-tout-cuit',
        category: 'boxes',
        image: '',
        price: 77,
        name: {
            fr: 'Le Tout Cuit',
            en: 'Le Tout Cuit',
        },
        description: {
            fr: '8 California crevette tempura · 8 California saumon tempura · 8 Hosomaki surimi pané · 8 Ebi Maki',
            en: '8 Tempura Shrimp California · 8 Tempura Salmon California · 8 Breaded Surimi Hosomaki · 8 Ebi Maki',
        },
    },






    {
        id: 'all-salmon-mix-12',
        category: 'all-salmon-mix',
        image: '/all-salmon-mix-12.jpeg',
        price: 39,
        name: {
            fr: 'Mix 12',
            en: 'Mix 12',
        },
        description: {
            fr: 'Une sélection de 12 pièces 100% saumon',
            en: 'A selection of 12 pieces, 100% salmon',
        },
    },

    {
        id: 'all-salmon-mix-24',
        category: 'all-salmon-mix',
        image: '/all-salmon-mix-12.jpeg',
        price: 70,
        name: {
            fr: 'Mix 24',
            en: 'Mix 24',
        },
        description: {
            fr: 'Une sélection de 24 pièces 100% saumon',
            en: 'A selection of 24 pieces, 100% salmon',
        },
    },

    {
        id: 'crunchy-mix-12',
        category: 'crunchy-mix',
        image: '/crunchy-mix-12.jpeg',
        price: 35,
        name: {
            fr: 'Mix 12',
            en: 'Mix 12',
        },
        description: {
            fr: 'Une sélection de 12 pièces Crunchy',
            en: 'A selection of 12 Crunchy pieces',
        },
    },

    {
        id: 'crunchy-mix-24',
        category: 'crunchy-mix',
        image: '/crunchy-mix-24.jpeg',
        price: 65,
        name: {
            fr: 'Mix 24',
            en: 'Mix 24',
        },
        description: {
            fr: 'Une sélection de 24 pièces Crunchy',
            en: 'A selection of 24 Crunchy pieces',
        },
    },

    {
        id: 'crunchy-mix-32',
        category: 'crunchy-mix',
        image: '/crunchy-mix-32.jpeg',
        price: 79,
        name: {
            fr: 'Mix 32',
            en: 'Mix 32',
        },
        description: {
            fr: 'Une sélection de 32 pièces Crunchy',
            en: 'A selection of 32 Crunchy pieces',
        },
    },

    {
        id: 'soda',
        category: 'boisson',
        image: '',
        price: 3.5,
        name: {
            fr: 'Soda',
            en: 'Soda',
        },
        description: {
            fr: 'Soda',
            en: 'Soda',
        },
    },

    {
        id: 'eau-minerale',
        category: 'boisson',
        image: '',
        price: 2.5,
        name: {
            fr: 'Eau minérale',
            en: 'Mineral water',
        },
        description: {
            fr: 'Eau minérale 1L',
            en: 'Mineral water 1L',
        },
    },

    {
        id: 'jus-de-saison',
        category: 'boisson',
        image: '',
        price: 6,
        name: {
            fr: 'Jus de saison',
            en: 'Seasonal juice',
        },
        description: {
            fr: 'Jus de saison frais',
            en: 'Fresh seasonal juice',
        },
    },

    // ====================
    // SUPPLÉMENTS
    // ====================

    {
        id: 'sauce-soja',
        category: 'supplements',
        image: '',
        price: 2,
        name: {
            fr: 'Sauce soja',
            en: 'Soy sauce',
        },
        description: {
            fr: 'Sauce soja',
            en: 'Soy sauce',
        },
    },

    {
        id: 'sweet-chili-sauce',
        category: 'supplements',
        image: '',
        price: 2,
        name: {
            fr: 'Sweet Chili Sauce',
            en: 'Sweet Chili Sauce',
        },
        description: {
            fr: 'Sauce chili douce',
            en: 'Sweet chili sauce',
        },
    },

    {
        id: 'sauce-yakitori',
        category: 'supplements',
        image: '',
        price: 2,
        name: {
            fr: 'Sauce Yakitori',
            en: 'Yakitori Sauce',
        },
        description: {
            fr: 'Sauce Yakitori',
            en: 'Yakitori sauce',
        },
    },

    {
        id: 'sauce-sriracha',
        category: 'supplements',
        image: '',
        price: 2,
        name: {
            fr: 'Sauce Sriracha',
            en: 'Sriracha Sauce',
        },
        description: {
            fr: 'Sauce piquante Sriracha',
            en: 'Spicy Sriracha sauce',
        },
    },

    {
        id: 'oignon-frit',
        category: 'supplements',
        image: '',
        price: 1.5,
        name: {
            fr: 'Oignon frit',
            en: 'Fried onion',
        },
        description: {
            fr: 'Oignon frit croustillant',
            en: 'Crispy fried onion',
        },
    },

    {
        id: 'noix-de-cajou',
        category: 'supplements',
        image: '',
        price: 4,
        name: {
            fr: 'Noix de cajou',
            en: 'Cashew nuts',
        },
        description: {
            fr: 'Noix de cajou',
            en: 'Cashew nuts',
        },
    },

    {
        id: 'champignon-noir',
        category: 'supplements',
        image: '',
        price: 4.5,
        name: {
            fr: 'Champignon noir',
            en: 'Black mushroom',
        },
        description: {
            fr: 'Champignon noir',
            en: 'Black mushroom',
        },
    },

    {
        id: 'champignon-shiitake',
        category: 'supplements',
        image: '',
        price: 4.5,
        name: {
            fr: 'Champignon Shiitake',
            en: 'Shiitake mushroom',
        },
        description: {
            fr: 'Champignon Shiitake',
            en: 'Shiitake mushroom',
        },
    },

    {
        id: 'supplement-poulet',
        category: 'supplements',
        image: '',
        price: 6.5,
        name: {
            fr: 'Poulet',
            en: 'Chicken',
        },
        description: {
            fr: 'Supplément poulet',
            en: 'Chicken extra',
        },
    },

    {
        id: 'supplement-boeuf',
        category: 'supplements',
        image: '',
        price: 8.5,
        name: {
            fr: 'Bœuf',
            en: 'Beef',
        },
        description: {
            fr: 'Supplément bœuf',
            en: 'Beef extra',
        },
    },

    {
        id: 'supplement-crevettes',
        category: 'supplements',
        image: '',
        price: 9.5,
        name: {
            fr: 'Crevettes',
            en: 'Shrimp',
        },
        description: {
            fr: 'Supplément crevettes',
            en: 'Shrimp extra',
        },
    },

    {
        id: 'riz-vinaigre',
        category: 'supplements',
        image: '',
        price: 9.5,
        name: {
            fr: 'Riz vinaigré',
            en: 'Sushi rice',
        },
        description: {
            fr: 'Riz vinaigré',
            en: 'Seasoned sushi rice',
        },
    },

    {
        id: 'jasmin-rice',
        category: 'supplements',
        image: '',
        price: 4.5,
        name: {
            fr: 'Jasmin Rice',
            en: 'Jasmine Rice',
        },
        description: {
            fr: 'Riz jasmin',
            en: 'Jasmine rice',
        },
    },

    {
        id: 'supplement-ananas',
        category: 'supplements',
        image: '',
        price: 4,
        name: {
            fr: 'Ananas',
            en: 'Pineapple',
        },
        description: {
            fr: 'Supplément ananas',
            en: 'Pineapple extra',
        },
    },


]