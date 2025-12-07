import type { Locale } from '../content/siteContent';

const supported: Locale[] = ['fa', 'en'];

export function pickLocale(queryLang: string | null, acceptLanguage: string | null, fallback: Locale = 'fa'): Locale {
  if (queryLang && supported.includes(queryLang as Locale)) {
    return queryLang as Locale;
  }
  if (acceptLanguage) {
    const match = acceptLanguage.split(',').map((part) => part.trim().slice(0, 2));
    const found = match.find((code) => supported.includes(code as Locale));
    if (found) return found as Locale;
  }
  return fallback;
}
