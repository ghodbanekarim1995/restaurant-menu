'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

import { menuItems } from '@/data/menu'

import styles from './page.module.scss'

type Locale = 'fr' | 'en' | 'ar'

const translations = {
  fr: {
    back: 'Retour au menu',
    description: 'Description',
    order: 'Disponible au restaurant',
    currency: 'DT',
  },

  en: {
    back: 'Back to menu',
    description: 'Description',
    order: 'Available at the restaurant',
    currency: 'DT',
  },

  ar: {
    back: 'العودة إلى القائمة',
    description: 'الوصف',
    order: 'متوفر في المطعم',
    currency: 'د.ت',
  },
}

export default function DishPage() {
  const params = useParams()

  const locale: Locale =
    typeof params.locale === 'string' &&
    ['fr', 'en', 'ar'].includes(params.locale)
      ? (params.locale as Locale)
      : 'fr'

  const id =
    typeof params.id === 'string'
      ? params.id
      : ''

  const item = menuItems.find(
    (menuItem) => menuItem.id === id
  )

  const t = translations[locale]

  if (!item) {
    return (
      <main className={styles.page}>
        <div className={styles.notFound}>
          <h1>404</h1>

          <Link href={`/${locale}/menu`}>
            {t.back}
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main
      className={styles.page}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >

      {/* =====================================
          BACK
      ===================================== */}

      <div className={styles.topBar}>

        <Link
          href={`/${locale}/menu`}
          className={styles.backButton}
        >
          <span>
            {locale === 'ar' ? '→' : '←'}
          </span>

          {t.back}
        </Link>

      </div>

      {/* =====================================
          DETAIL
      ===================================== */}

      <article className={styles.detail}>

        {/* IMAGE */}

        <div className={styles.imageWrapper}>

          <Image
            src={item.image}
            alt={item.name[locale]}
            fill
            priority
            sizes="(max-width: 650px) 100vw, 700px"
            className={styles.image}
          />

        </div>

        {/* CONTENT */}

        <div className={styles.content}>

          <span className={styles.restaurant}>
            WOK N ROLL
          </span>

          <div className={styles.titleRow}>

            <h1>
              {item.name[locale]}
            </h1>

            <div className={styles.price}>
              {item.price} {t.currency}
            </div>

          </div>

          <div className={styles.separator} />

          <h2>
            {t.description}
          </h2>

          <p className={styles.description}>
            {item.description[locale]}
          </p>

          <div className={styles.availability}>

            <span className={styles.dot} />

            {t.order}

          </div>

        </div>

      </article>

    </main>
  )
}