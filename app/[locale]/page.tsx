'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import styles from './page.module.scss'

type Locale = 'fr' | 'en' | 'ar'

const languages = [

  {
    code: 'fr' as Locale,
    name: 'Français',
    subName: 'Français',
    flag: '/france.png',
  },
  {
    code: 'en' as Locale,
    name: 'English',
    subName: 'Anglais',
    flag: '/united.png',
  },
]

const content = {
  fr: {
    titleFirst: 'Choisissez votre',
    titleAccent: 'langue',
    description:
      'Découvrez notre menu et laissez-vous embarquer par les saveurs de l’Asie.',
    experience: 'Une expérience simple et rapide',
    steps: [
      {
        icon: '01',
        title: 'Choisissez',
        text: 'votre langue',
      },
      {
        icon: '02',
        title: 'Accédez',
        text: 'au menu',
      },
      {
        icon: '03',
        title: 'Découvrez',
        text: 'nos saveurs',
      },
      {
        icon: '04',
        title: 'Bon appétit !',
        text: '',
      },
    ],
  },

  en: {
    titleFirst: 'Choose your',
    titleAccent: 'language',
    description:
      'Discover our menu and let yourself be carried away by the flavors of Asia.',
    experience: 'A simple and fast experience',
    steps: [
      {
        icon: '01',
        title: 'Choose',
        text: 'your language',
      },
      {
        icon: '02',
        title: 'Access',
        text: 'the menu',
      },
      {
        icon: '03',
        title: 'Discover',
        text: 'our flavors',
      },
      {
        icon: '04',
        title: 'Enjoy your meal!',
        text: '',
      },
    ],
  },

  ar: {
    titleFirst: 'اختر',
    titleAccent: 'لغتك',
    description:
      'اكتشف قائمتنا واستمتع بنكهات المطبخ الآسيوي.',
    experience: 'تجربة بسيطة وسريعة',
    steps: [
      {
        icon: '01',
        title: 'اختر',
        text: 'لغتك',
      },
      {
        icon: '02',
        title: 'اكتشف',
        text: 'القائمة',
      },
      {
        icon: '03',
        title: 'استمتع',
        text: 'بنكهاتنا',
      },
      {
        icon: '04',
        title: 'شهية طيبة!',
        text: '',
      },
    ],
  },
}

export default function LandingPage() {
  const router = useRouter()
  const params = useParams()

  const locale: Locale =
    typeof params.locale === 'string' &&
      ['ar', 'fr', 'en'].includes(params.locale)
      ? (params.locale as Locale)
      : 'fr'

  const t = content[locale]

  const isArabic = locale === 'ar'

  const handleLanguageChange = (language: Locale) => {
    router.push(`/${language}/menu`)
  }

  return (
    <main
      className={styles.page}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* Décoration orange */}
      <div className={styles.orangeBrush} />

      <div className={styles.wavePatternLeft} />
      <div className={styles.wavePatternRight} />

      <div className={styles.container}>

        {/* LOGO */}
        <header className={styles.header}>
          <Image
            src="/wok-n-roll.png"
            alt="Wok N Roll"
            width={300}
            height={240}
            priority
            className={styles.logo}
          />
        </header>

        {/* LANGUAGE CARD */}
        <section className={styles.languageCard}>

          <h1 className={styles.title}>
            {t.titleFirst}{' '}
            <span>{t.titleAccent}</span>
          </h1>

          <p className={styles.description}>
            {t.description}
          </p>

          {/* LANGUAGES */}
          <div className={styles.languages}>
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                className={styles.languageButton}
                onClick={() =>
                  handleLanguageChange(language.code)
                }
              >
                {/* DRAPEAU */}
                <div className={styles.flagContainer}>
                  <Image
                    src={language.flag}
                    alt={language.name}
                    width={64}
                    height={64}
                    className={styles.flagImage}
                  />
                </div>

                {/* TEXTE */}
                <div className={styles.languageContent}>
                  <strong>
                    {language.name}
                  </strong>

                  <span>
                    {language.subName}
                  </span>
                </div>

                {/* FLECHE */}
                <div className={styles.arrow}>
                  {isArabic ? '←' : '→'}
                </div>
              </button>
            ))}
          </div>

        </section>

        {/* RESTAURANT INFO */}
        <section className={styles.restaurantInfo}>

          <div className={styles.restaurantInfoItem}>
            <div className={styles.restaurantInfoIcon}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="2.3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            <div className={styles.restaurantInfoText}>
              <span>NOUS TROUVER</span>
              <strong>14 avenue de l'environnement</strong>
              <small>L Aouina</small>
            </div>
          </div>


          <div className={styles.restaurantInfoSeparator} />


          <a
            href="tel:26000639"
            className={styles.restaurantInfoItem}
          >
            <div className={styles.restaurantInfoIcon}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M7.5 4.5 9.8 3.4c.7-.3 1.5 0 1.8.7l1.1 2.6c.2.5.1 1.1-.3 1.5l-1.5 1.2a12.8 12.8 0 0 0 4.9 4.9l1.2-1.5c.4-.4 1-.5 1.5-.3l2.6 1.1c.7.3 1 1.1.7 1.8l-1.1 2.3c-.3.7-1 1.1-1.8 1.1C11.1 18.8 5.2 12.9 4.2 6.3c-.1-.8.3-1.5 1.1-1.8l2.2-1Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className={styles.restaurantInfoText}>
              <span>LIVRAISON</span>
              <strong>26 000 639</strong>
              <small>Commander maintenant</small>
            </div>
          </a>

        </section>







        {/* FOOTER */}
        <footer className={styles.footer}>
          <span>WOK N ROLL</span>
          <i />
          <span>ASIAN RESTAURANT</span>
        </footer>

      </div>
    </main>
  )
}