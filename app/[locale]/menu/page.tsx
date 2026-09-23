'use client'

import { useParams } from 'next/navigation'

const content = {
  fr: {
    title: 'Notre Menu',
    text: 'Bienvenue chez Wok N Roll.',
  },
  en: {
    title: 'Our Menu',
    text: 'Welcome to Wok N Roll.',
  },
  ar: {
    title: 'قائمتنا',
    text: 'مرحباً بكم في Wok N Roll.',
  },
}

export default function MenuPage() {
  const params = useParams()

  const locale =
    typeof params.locale === 'string' &&
    ['ar', 'fr', 'en'].includes(params.locale)
      ? params.locale
      : 'fr'

  const t = content[locale as keyof typeof content]

  return (
    <main
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        textAlign: 'center',
        background: '#fffaf3',
      }}
    >
      <h1
        style={{
          color: '#f15a24',
          fontSize: '48px',
          marginBottom: '20px',
        }}
      >
        {t.title}
      </h1>

      <p
        style={{
          fontSize: '20px',
          color: '#555',
        }}
      >
        {t.text}
      </p>
    </main>
  )
}