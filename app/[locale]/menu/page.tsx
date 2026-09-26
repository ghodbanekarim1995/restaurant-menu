'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from 'react'

import { menuItems, type MenuCategory } from '@/data/menu'

import styles from './page.module.scss'

type Locale = 'fr' | 'en'

const translations = {
    fr: {
        menu: 'Notre menu',
        subtitle: 'Découvrez nos spécialités asiatiques',
        all: 'Tout',
        starters: 'Entrées',
        soups: 'Soupes',
        skewers: 'Brochettes',
        salads: 'Salades & Bowls',
        noodles: 'Nouilles',
        friedRice: 'Riz sauté',
        wok: 'Wok',
        nigiri: 'Nigiri',
        sashimi: 'Sashimi',
        hosomaki: 'Hosomaki',
        futomaki: 'Futomaki',
        crunchy: 'Crunchy',
        chefRoll: 'Rouleau du chef',
        hotRoll: 'Hot Roll',
        sushiBurger: 'Sushi Burger',
        pokeBurger: 'Poke Burger',
        viewDish: 'Voir le plat',
        currency: 'DT',
        imageComingSoon: 'Photo bientôt disponible',
        boxes: 'Boxes',
        allSalmonMix: 'All Salmon Mix',
        crunchyMix: 'Crunchy Mix',
        boisson: 'Boissons',
        supplements: 'Suppléments',
        california: 'California',

    },

    en: {
        menu: 'Our menu',
        subtitle: 'Discover our Asian specialties',
        all: 'All',
        starters: 'Starters',
        soups: 'Soups',
        skewers: 'Skewers',
        salads: 'Salads & Bowls',
        noodles: 'Noodles',
        friedRice: 'Fried Rice',
        wok: 'Wok',
        nigiri: 'Nigiri',
        sashimi: 'Sashimi',
        hosomaki: 'Hosomaki',
        futomaki: 'Futomaki',
        crunchy: 'Crunchy',
        chefRoll: "Chef's Roll",
        hotRoll: 'Hot Roll',
        sushiBurger: 'Sushi Burger',
        pokeBurger: 'Poke Burger',
        viewDish: 'View dish',
        currency: 'DT',
        imageComingSoon: 'Photo coming soon',
        boxes: 'Boxes',
        allSalmonMix: 'All Salmon Mix',
        crunchyMix: 'Crunchy Mix',
        boisson: 'Drinks',
        supplements: 'Extras',
        california: 'California',

    },
}

/* =====================================
   REVEAL CARD
===================================== */

function RevealCard({
    children,
    className,
    href,
    delay = 0,
}: {
    children: ReactNode
    className: string
    href: string
    delay?: number
}) {
    const ref = useRef<HTMLAnchorElement>(null)

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const element = ref.current

        if (!element) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)

                    observer.unobserve(element)
                }
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px',
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <Link
            ref={ref}
            href={href}
            className={`${className} ${visible ? styles.visible : ''}`}
            style={{
                transitionDelay: visible
                    ? `${delay}ms`
                    : '0ms',
            }}
        >
            {children}
        </Link>
    )
}

/* =====================================
   DISH IMAGE
===================================== */

function DishImage({
    src,
    alt,
    placeholderText,
}: {
    src?: string
    alt: string
    placeholderText: string
}) {
    const [imageError, setImageError] = useState(
        !src || src.trim().length === 0
    )

    if (imageError) {
        return (
            <div className={styles.imagePlaceholder}>
                <Image
                    src="/wok-n-roll.png"
                    alt="Wok N Roll"
                    width={130}
                    height={100}
                    className={styles.placeholderLogo}
                />

                <span>
                    {placeholderText}
                </span>
            </div>
        )
    }

    return (
        <Image
            src={src!}
            alt={alt}
            fill
            sizes="(max-width: 650px) 100vw, 50vw"
            className={styles.dishImage}
            onError={() => setImageError(true)}
        />
    )
}

/* =====================================
   CATEGORY BUTTON
===================================== */

function CategoryButton({
    category,
    label,
    activeCategory,
    onClick,
}: {
    category: 'all' | MenuCategory
    label: string
    activeCategory: 'all' | MenuCategory
    onClick: () => void
}) {
    return (
        <button
            type="button"
            className={`${styles.categoryButton} ${activeCategory === category
                ? styles.active
                : ''
                }`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

/* =====================================
   MENU PAGE
===================================== */

export default function MenuPage() {
    const params = useParams()
    const searchParams = useSearchParams()
    const locale: Locale =
        typeof params.locale === 'string' &&
            ['fr', 'en'].includes(params.locale)
            ? (params.locale as Locale)
            : 'fr'

    const t = translations[locale]

    /* =====================================
       CATEGORY FILTER
    ===================================== */

    const categoryFromUrl = searchParams.get('category')

    const initialCategory: 'all' | MenuCategory =
        categoryFromUrl &&
            [
                'starters',
                'soups',
                'skewers',
                'salads',
                'noodles',
                'fried-rice',
                'wok',
                'nigiri',
                'sashimi',
                'hosomaki',
                'futomaki',
                'crunchy',
                'california',
                'chef-roll',
                'hot-roll',
                'sushi-burger',
                'poke-burger',
                'boxes',
                'all-salmon-mix',
                'crunchy-mix',
                'boisson',
                'supplements',
            ].includes(categoryFromUrl)
            ? (categoryFromUrl as MenuCategory)
            : 'all'

    const [activeCategory, setActiveCategory] =
        useState<'all' | MenuCategory>(initialCategory)

    const filteredItems =
        activeCategory === 'all'
            ? menuItems
            : menuItems.filter(
                (item) => item.category === activeCategory
            )

    return (
        <main
            className={styles.page}
            dir="ltr"
        >
            {/* =====================================
                HEADER
            ===================================== */}

            <header className={styles.header}>
                <div className={styles.headerInner}>
                    <Link
                        href={`/${locale}`}
                        className={styles.logoWrapper}
                    >
                        <Image
                            src="/wok-n-roll.png"
                            alt="Wok N Roll"
                            width={150}
                            height={120}
                            priority
                            className={styles.logo}
                        />
                    </Link>

                    <div className={styles.headerText}>
                        <span>
                            WOK N ROLL
                        </span>

                        <h1>
                            {t.menu}
                        </h1>

                        <p>
                            {t.subtitle}
                        </p>
                    </div>
                </div>
            </header>

            {/* =====================================
                CATEGORY FILTER
            ===================================== */}

            <section className={styles.categorySection}>

                <Link
                    href={`/${locale}/games`}
                    className={styles.gamesButton}
                >
                    🎮 {locale === 'fr' ? 'Jeux' : 'Games'}
                </Link>

                <CategoryButton
                    category="all"
                    label={t.all}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('all')}
                />

                <CategoryButton
                    category="starters"
                    label={t.starters}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('starters')}
                />

                <CategoryButton
                    category="soups"
                    label={t.soups}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('soups')}
                />

                <CategoryButton
                    category="skewers"
                    label={t.skewers}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('skewers')}
                />

                <CategoryButton
                    category="salads"
                    label={t.salads}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('salads')}
                />

                <CategoryButton
                    category="noodles"
                    label={t.noodles}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('noodles')}
                />

                <CategoryButton
                    category="fried-rice"
                    label={t.friedRice}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('fried-rice')}
                />

                <CategoryButton
                    category="wok"
                    label={t.wok}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('wok')}
                />

                <CategoryButton
                    category="nigiri"
                    label={t.nigiri}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('nigiri')}
                />

                <CategoryButton
                    category="sashimi"
                    label={t.sashimi}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('sashimi')}
                />

                <CategoryButton
                    category="hosomaki"
                    label={t.hosomaki}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('hosomaki')}
                />

                <CategoryButton
                    category="futomaki"
                    label={t.futomaki}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('futomaki')}
                />

                <CategoryButton
                    category="crunchy"
                    label={t.crunchy}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('crunchy')}
                />

                <CategoryButton
                    category="california"
                    label={t.california}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('california')}
                />
                <CategoryButton
                    category="chef-roll"
                    label={t.chefRoll}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('chef-roll')}
                />

                <CategoryButton
                    category="hot-roll"
                    label={t.hotRoll}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('hot-roll')}
                />

                <CategoryButton
                    category="sushi-burger"
                    label={t.sushiBurger}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('sushi-burger')}
                />

                <CategoryButton
                    category="poke-burger"
                    label={t.pokeBurger}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('poke-burger')}

                />

                <CategoryButton
                    category="boxes"
                    label={t.boxes}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('boxes')}
                />

                <CategoryButton
                    category="all-salmon-mix"
                    label={t.allSalmonMix}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('all-salmon-mix')}
                />

                <CategoryButton
                    category="crunchy-mix"
                    label={t.crunchyMix}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('crunchy-mix')}
                />

                <CategoryButton
                    category="boisson"
                    label={t.boisson}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('boisson')}
                />

                <CategoryButton
                    category="supplements"
                    label={t.supplements}
                    activeCategory={activeCategory}
                    onClick={() => setActiveCategory('supplements')}
                />


            </section>

            {/* =====================================
                MENU
            ===================================== */}

            <section className={styles.menuContainer}>
                <div className={styles.menuGrid}>

                    {filteredItems.map((item, index) => (
                        <RevealCard
                            key={item.id}
                            href={
                                activeCategory === 'all'
                                    ? `/${locale}/menu/${item.id}`
                                    : `/${locale}/menu/${item.id}?category=${activeCategory}`
                            } className={styles.dishCard}
                            delay={index * 70}
                        >
                            {/* IMAGE */}

                            <div className={styles.imageWrapper}>
                                <DishImage
                                    src={item.image}
                                    alt={item.name[locale]}
                                    placeholderText={
                                        t.imageComingSoon
                                    }
                                />

                                <div
                                    className={
                                        styles.imageOverlay
                                    }
                                >
                                    <span>
                                        {t.viewDish}
                                    </span>

                                    <div
                                        className={
                                            styles.arrow
                                        }
                                    >
                                        →
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className={styles.dishContent}>
                                <div className={styles.dishTop}>
                                    <h2>
                                        {item.name[locale]}
                                    </h2>

                                    <span
                                        className={styles.price}
                                    >
                                        {item.price} {t.currency}
                                    </span>
                                </div>

                                <p>
                                    {item.description[locale]}
                                </p>
                            </div>
                        </RevealCard>
                    ))}

                </div>
            </section>

            {/* =====================================
                FOOTER
            ===================================== */}

            <footer className={styles.footer}>
                <div className={styles.footerLine} />

                <span>
                    WOK N ROLL
                </span>

                <small>
                    ASIAN RESTAURANT
                </small>
            </footer>

        </main>
    )
}