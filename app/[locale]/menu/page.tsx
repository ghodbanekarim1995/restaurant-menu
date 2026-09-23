'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { menuItems } from '@/data/menu'

import styles from './page.module.scss'

type Locale = 'fr' | 'en' | 'ar'

const translations = {
  fr: {
    menu: 'Notre menu',
    subtitle: 'Découvrez nos spécialités asiatiques',
    all: 'Tout',
    starters: 'Entrées',
    main: 'Plats',
    viewDish: 'Voir le plat',
    currency: 'DT',
  },

  en: {
    menu: 'Our menu',
    subtitle: 'Discover our Asian specialties',
    all: 'All',
    starters: 'Starters',
    main: 'Main dishes',
    viewDish: 'View dish',
    currency: 'DT',
  },

  ar: {
    menu: 'قائمتنا',
    subtitle: 'اكتشف أطباقنا الآسيوية',
    all: 'الكل',
    starters: 'المقبلات',
    main: 'الأطباق الرئيسية',
    viewDish: 'عرض الطبق',
    currency: 'د.ت',
  },
}

export default function MenuPage() {
  const params = useParams()

  const locale: Locale =
    typeof params.locale === 'string' &&
    ['fr', 'en', 'ar'].includes(params.locale)
      ? (params.locale as Locale)
      : 'fr'

  const t = translations[locale]

  return (
    <main
      className={styles.page}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
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
            <span>WOK N ROLL</span>

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

        <button
          type="button"
          className={`${styles.categoryButton} ${styles.active}`}
        >
          {t.all}
        </button>

        <button
          type="button"
          className={styles.categoryButton}
        >
          {t.starters}
        </button>

        <button
          type="button"
          className={styles.categoryButton}
        >
          {t.main}
        </button>

      </section>

      {/* =====================================
          MENU
      ===================================== */}

      <section className={styles.menuContainer}>

        <div className={styles.menuGrid}>

          {menuItems.map((item, index) => (

            <Link
              key={item.id}
              href={`/${locale}/menu/${item.id}`}
              className={styles.dishCard}
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >

              {/* IMAGE */}

              <div className={styles.imageWrapper}>

                <Image
                  src={item.image}
                  alt={item.name[locale]}
                  fill
                  sizes="(max-width: 650px) 100vw, 50vw"
                  className={styles.dishImage}
                />

                <div className={styles.imageOverlay}>

                  <span>
                    {t.viewDish}
                  </span>

                  <div className={styles.arrow}>
                    {locale === 'ar' ? '←' : '→'}
                  </div>

                </div>

              </div>

              {/* CONTENT */}

              <div className={styles.dishContent}>

                <div className={styles.dishTop}>

                  <h2>
                    {item.name[locale]}
                  </h2>

                  <span className={styles.price}>
                    {item.price} {t.currency}
                  </span>

                </div>

                <p>
                  {item.description[locale]}
                </p>

              </div>

            </Link>

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