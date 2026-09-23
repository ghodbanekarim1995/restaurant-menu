'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

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
    sushi: 'Sushi',
    viewDish: 'Voir le plat',
    currency: 'DT',
    imageComingSoon: 'Photo bientôt disponible',
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
    sushi: 'Sushi',
    viewDish: 'View dish',
    currency: 'DT',
    imageComingSoon: 'Photo coming soon',
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
  children: React.ReactNode
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
      className={`${className} ${
        visible ? styles.visible : ''
      }`}
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
   MENU PAGE
===================================== */

export default function MenuPage() {
  const params = useParams()

  const locale: Locale =
    typeof params.locale === 'string' &&
    ['fr', 'en'].includes(params.locale)
      ? (params.locale as Locale)
      : 'fr'

  const t = translations[locale]

  // =====================================
  // CATEGORY FILTER
  // =====================================

  const [activeCategory, setActiveCategory] = useState<
    'all' | MenuCategory
  >('all')

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

        {/* ALL */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'all'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('all')}
        >
          {t.all}
        </button>

        {/* STARTERS */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'starters'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('starters')}
        >
          {t.starters}
        </button>

        {/* SOUPS */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'soups'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('soups')}
        >
          {t.soups}
        </button>

        {/* SKEWERS */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'skewers'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('skewers')}
        >
          {t.skewers}
        </button>

        {/* SALADS */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'salads'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('salads')}
        >
          {t.salads}
        </button>

        {/* NOODLES */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'noodles'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('noodles')}
        >
          {t.noodles}
        </button>

        {/* FRIED RICE */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'fried-rice'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('fried-rice')}
        >
          {t.friedRice}
        </button>

        {/* WOK */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'wok'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('wok')}
        >
          {t.wok}
        </button>

        {/* SUSHI */}

        <button
          type="button"
          className={`${styles.categoryButton} ${
            activeCategory === 'sushi'
              ? styles.active
              : ''
          }`}
          onClick={() => setActiveCategory('sushi')}
        >
          {t.sushi}
        </button>

      </section>

      {/* =====================================
          MENU
      ===================================== */}

      <section className={styles.menuContainer}>

        <div className={styles.menuGrid}>

          {filteredItems.map((item, index) => {

            const hasImage =
              typeof item.image === 'string' &&
              item.image.trim().length > 0

            return (
              <RevealCard
                key={item.id}
                href={`/${locale}/menu/${item.id}`}
                className={styles.dishCard}
                delay={index * 70}
              >

                {/* =================================
                    IMAGE
                ================================= */}

                <div className={styles.imageWrapper}>

                  {hasImage ? (
                    <Image
                      src={item.image}
                      alt={item.name[locale]}
                      fill
                      sizes="(max-width: 650px) 100vw, 50vw"
                      className={styles.dishImage}
                    />
                  ) : (
                    <div
                      className={
                        styles.imagePlaceholder
                      }
                    >
                      <Image
                        src="/wok-n-roll.png"
                        alt="Wok N Roll"
                        width={130}
                        height={100}
                        className={
                          styles.placeholderLogo
                        }
                      />

                      <span>
                        {t.imageComingSoon}
                      </span>
                    </div>
                  )}

                  {/* OVERLAY */}

                  <div className={styles.imageOverlay}>

                    <span>
                      {t.viewDish}
                    </span>

                    <div className={styles.arrow}>
                      →
                    </div>

                  </div>

                </div>

                {/* =================================
                    CONTENT
                ================================= */}

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
            )
          })}

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