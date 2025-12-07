import { renderLayout } from './layout';
import { cityPage, servicesPage, type Locale } from '../content/siteContent';
import { buildBaseSchemas, buildFAQSchema } from '../utils/schema';
import { seoPages, type SeoPageContent } from '../content/seoPages';
import {
  renderHero,
  renderColumns,
  renderBenefits,
  renderFeatureList,
  renderFAQ,
  renderCTA,
  renderServiceGrid,
  renderMetadataList,
} from './ui';

export function renderHome(locale: Locale): string {
  const content = seoPages.home[locale];
  const schemas = [
    buildBaseSchemas(locale),
    buildFAQSchema(
      locale,
      content.faqs.map((item) => ({ q: item.question, a: item.answer })),
    ),
  ];

  const sections = [
    renderHero({
      title: content.h1,
      kicker: locale === 'fa' ? 'Cloudflare Workers • JSON-first' : 'Cloudflare Workers • JSON-first',
      intro: content.intro,
      bullets: content.features,
      cta: content.cta,
    }),
    renderColumns(locale === 'fa' ? 'چرا وبیار؟' : 'Why Webiyar?', content.paragraphs),
    renderBenefits(locale === 'fa' ? 'مزایا' : 'Benefits', content.benefits),
    content.features ? renderFeatureList(locale === 'fa' ? 'قابلیت‌ها' : 'Capabilities', content.features) : '',
    renderMetadataList(locale === 'fa' ? 'کلیدواژه‌ها' : 'Keywords', content.primaryKeyword, content.secondaryKeywords),
    renderFAQ(locale === 'fa' ? 'سؤالات متداول' : 'FAQ', content.faqs),
    renderCTA(
      content.cta,
      locale === 'fa' ? 'گام بعد' : 'Next step',
      locale === 'fa'
        ? 'یک جلسه مشاوره رزرو کنید تا معماری و سئو را مشخص کنیم.'
        : 'Book a consultation to align architecture and SEO.',
    ),
  ].join('');

  return renderLayout({ locale, meta: content.meta, content: sections, structuredData: schemas });
}

export function renderServices(locale: Locale): string {
  const content = seoPages.services[locale];
  const schemas = [buildBaseSchemas(locale)];

  const servicesBlocks = servicesPage[locale].sections.map((section) => ({
    id: section.id,
    title: section.heading,
    description: section.body,
  }));

  const sections = [
    renderHero({
      title: content.h1,
      kicker: locale === 'fa' ? 'پکیج‌های ما' : 'Our packages',
      intro: content.intro,
      bullets: content.features,
      cta: content.cta,
    }),
    renderColumns(locale === 'fa' ? 'توضیحات' : 'Overview', content.paragraphs),
    renderServiceGrid(locale === 'fa' ? 'بسته‌های اصلی' : 'Core services', servicesBlocks),
    renderBenefits(locale === 'fa' ? 'مزایا' : 'Benefits', content.benefits),
    renderFAQ(locale === 'fa' ? 'پرسش‌های رایج' : 'FAQ', content.faqs),
    renderCTA(
      content.cta,
      locale === 'fa' ? 'شروع همکاری' : 'Get started',
      locale === 'fa' ? 'بسته مناسب خود را انتخاب کنید و جزئیات را در n8n یا D1 دنبال کنید.' : 'Pick your package and track details via n8n or D1.',
    ),
  ].join('');

  return renderLayout({ locale, meta: content.meta, content: sections, structuredData: schemas });
}

export function renderCity(locale: Locale, city: string): string {
  const normalizedCity = city.toLowerCase();
  const isOrumiyeh = normalizedCity === 'orumiyeh';
  const baseContent: SeoPageContent | ReturnType<typeof cityPage> = isOrumiyeh
    ? seoPages.cityOrumiyehWebDesign[locale]
    : cityPage(city, locale);

  const faqs = isOrumiyeh
    ? baseContent.faqs
    : [
        {
          question: locale === 'fa' ? 'چطور لندینگ لوکال را شخصی‌سازی می‌کنید؟' : 'How do you personalize the local landing page?',
          answer:
            locale === 'fa'
              ? 'کپی و CTA بر اساس شهر و زبان تنظیم و در JSON نگه‌داری می‌شود؛ اسکیماهای لوکال برای SEO تزریق می‌شوند.'
              : 'Copy and CTAs are adjusted per city and language in JSON; local schemas are injected for SEO.',
        },
        {
          question: locale === 'fa' ? 'آیا لیدها در D1 ذخیره می‌شوند؟' : 'Do you store leads in D1?',
          answer:
            locale === 'fa'
              ? 'بسته به نیاز، لیدها در D1 یا KV ذخیره می‌شوند و فلوهای n8n برای اعلان استفاده می‌شود.'
              : 'Leads can be stored in D1 or KV with n8n flows for notifications.',
        },
      ];

  const schemas = [
    buildBaseSchemas(locale),
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Webiyar',
      areaServed: city,
      url: `https://example.com/city/${city}/web-design`,
      address: { addressLocality: city },
      description: baseContent.meta.description,
    },
    buildFAQSchema(
      locale,
      faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
    ),
  ];

  const hasStructuredCopy = 'h1' in baseContent;
  const heroCopy = renderHero({
    title: hasStructuredCopy ? baseContent.h1 : baseContent.hero.heading,
    kicker: locale === 'fa' ? 'لندینگ لوکال' : 'Local landing',
    intro: hasStructuredCopy
      ? baseContent.intro
      : baseContent.hero.subheading || baseContent.hero.body,
    bullets: hasStructuredCopy
      ? baseContent.features
      : baseContent.sections?.flatMap((s) => s.highlights || []).slice(0, 4),
    cta: hasStructuredCopy ? baseContent.cta : baseContent.hero.cta,
  });

  const bodySections = isOrumiyeh
    ? [
        renderColumns(locale === 'fa' ? 'چرا این لندینگ؟' : 'Why this landing?', baseContent.paragraphs),
        renderBenefits(locale === 'fa' ? 'مزیت‌ها' : 'Benefits', baseContent.benefits),
        baseContent.features ? renderFeatureList(locale === 'fa' ? 'قابلیت‌ها' : 'Features', baseContent.features) : '',
        renderMetadataList(locale === 'fa' ? 'کلیدواژه‌های لوکال' : 'Local keywords', baseContent.primaryKeyword, baseContent.secondaryKeywords),
        renderFAQ(locale === 'fa' ? 'پرسش‌های متداول' : 'FAQ', baseContent.faqs),
        renderCTA(
          baseContent.cta,
          locale === 'fa' ? 'شروع جذب لید' : 'Start capturing leads',
          locale === 'fa' ? 'فوراً CTA و پیام‌های ربات تلگرام را بر اساس شهر تنظیم کنید.' : 'Tune CTAs and Telegram bot messages per city instantly.',
        ),
      ].join('')
    : baseContent.sections.map((section) => renderSimpleSection(section)).join('');

  const page = `${heroCopy}${bodySections}`;

  return renderLayout({ locale, meta: baseContent.meta, content: page, structuredData: schemas });
}

export function renderArticle(locale: Locale): string {
  const content = seoPages.blogTechnicalSeo[locale];
  const schemas = [
    buildBaseSchemas(locale),
    buildFAQSchema(
      locale,
      content.faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
    ),
  ];

  const sections = [
    renderHero({
      title: content.h1,
      kicker: locale === 'fa' ? 'مقاله فنی' : 'Technical article',
      intro: content.intro,
      bullets: content.features,
      cta: content.cta,
    }),
    renderColumns(locale === 'fa' ? 'خلاصه' : 'Summary', content.paragraphs),
    renderBenefits(locale === 'fa' ? 'نکات کلیدی' : 'Key points', content.benefits),
    content.features ? renderFeatureList(locale === 'fa' ? 'نمونه‌ها' : 'Artifacts', content.features) : '',
    renderMetadataList(locale === 'fa' ? 'کلیدواژه‌ها' : 'Keywords', content.primaryKeyword, content.secondaryKeywords),
    renderFAQ(locale === 'fa' ? 'سؤالات متداول' : 'FAQ', content.faqs),
    renderCTA(
      content.cta,
      locale === 'fa' ? 'دانلود چک‌لیست' : 'Download checklist',
      locale === 'fa' ? 'نسخه JSON/PDF را دریافت کنید و در n8n استفاده کنید.' : 'Grab the JSON/PDF version and drop into n8n.',
    ),
  ].join('');

  return renderLayout({ locale, meta: content.meta, content: sections, structuredData: schemas });
}

function renderSimpleSection(section: {
  id: string;
  heading: string;
  subheading?: string;
  body?: string;
  highlights?: string[];
  cta?: { label: string; href: string };
}): string {
  const highlights = section.highlights
    ? `<ul class="pill-list">${section.highlights.map((item) => `<li class="pill">${item}</li>`).join('')}</ul>`
    : '';

  return `
    <section class="section-shell" id="${section.id}">
      <div class="section-header">
        <h2>${section.heading}</h2>
      </div>
      ${section.subheading ? `<p class="lead">${section.subheading}</p>` : ''}
      ${section.body ? `<p class="body">${section.body}</p>` : ''}
      ${highlights}
      ${section.cta ? `<a class="btn" href="${section.cta.href}">${section.cta.label}</a>` : ''}
    </section>
  `;
}
