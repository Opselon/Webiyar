import type { Locale } from '../content/siteContent';

export function buildBaseSchemas(locale: Locale) {
  const lang = locale === 'fa' ? 'fa-IR' : 'en-US';
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Webiyar',
    url: 'https://example.com',
    description:
      locale === 'fa'
        ? 'آژانس طراحی سایت و سئو با تمرکز بر Cloudflare Workers، n8n و محتوای JSON.'
        : 'Webiyar delivers web design, SEO, automation, and JSON-first operations on Cloudflare Workers.',
    sameAs: ['https://t.me/webiyar'],
    areaServed: 'IR',
    inLanguage: lang,
  };
}

export function buildFAQSchema(locale: Locale, entries: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
