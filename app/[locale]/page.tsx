'use client'

import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import styles from './page.module.scss'

type Locale = 'fr' | 'en' | 'ar'

const languages = [
  {
    code: 'ar' as Locale,
    name: 'العربية',
    subName: 'Arabe',
    flag: '/tunisia.webp',
  },
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