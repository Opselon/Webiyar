import type { Locale } from './siteContent';

export type ClientService = {
  id: string;
  title: string;
  description: string;
  chips: string[];
  cta?: { label: string; href: string };
};

export type ClientProcessStep = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type ClientTestimonial = {
  quote: string;
  author: string;
  role: string;
  metric: string;
};

export type ClientPricing = {
  name: string;
  value: string;
  cadence: string;
  meta: string;
  features: string[];
  highlighted?: boolean;
};

export type ClientMetric = {
  label: string;
  value: string;
  description: string;
};

export type ClientStack = {
  title: string;
  items: string[];
};

export type ClientLocaleContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    badges: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    note: string;
  };
  stats: ClientMetric[];
  services: ClientService[];
  process: ClientProcessStep[];
  pricing: ClientPricing[];
  testimonials: ClientTestimonial[];
  stack: ClientStack[];
  automation: {
    title: string;
    description: string;
    points: string[];
  };
  contact: {
    title: string;
    bullets: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  keywords: string[];
};

const faServices: ClientService[] = [
  {
    id: 'corporate-web',
    title: 'طراحی سایت شرکتی و بین‌المللی',
    description:
      'سایت‌های شرکتی مینیمال با معماری بهینه برای SEO و صادرات؛ آماده اتصال به CRM، هاب‌اسپات و فرم‌های چندزبانه.',
    chips: ['Next.js/Workers SSR', 'Cloudflare CDN', 'Tracking پیشرفته', 'فرم دوزبانه'],
    cta: { label: 'درخواست پروپوزال', href: '/contact' },
  },
  {
    id: 'commerce',
    title: 'فروشگاه، رزرو و پرداخت',
    description:
      'فروشگاه هدلس یا رزرو آنلاین با درگاه داخلی/بین‌المللی، با ساختار محتوایی JSON-first برای مدیریت سریع.',
    chips: ['هدلس', 'n8n Automation', 'ریزپرداخت', 'گزارش‌گیری زنده'],
    cta: { label: 'زمان‌بندی دمو', href: '/contact' },
  },
  {
    id: 'landing',
    title: 'لندینگ‌پیج لوکال و تبلیغاتی',
    description:
      'لندینگ‌های لوکال با URL ساختاریافته `/city/:city/web-design` و اسکیماهای LocalBusiness/FAQ برای تبدیل سریع.',
    chips: ['A/B تست', 'Schema آماده', 'Responsive مینیمال', 'متن‌های JSON'],
  },
  {
    id: 'seo',
    title: 'سئو تکنیکال + محتوایی',
    description:
      'ممیزی فنی، برنامه‌ریزی کلمات کلیدی، تولید محتوای ساخت‌یافته و استقرار اسکیما در SSR برای بهبود CTR.',
    chips: ['Core Web Vitals', 'FAQ/Article Schema', 'لوکال SEO', 'Technical Fixes'],
  },
  {
    id: 'app',
    title: 'طراحی اپلیکیشن و تجربه کاربری',
    description:
      'طراحی UI/UX اپلیکیشن موبایل و وب‌اپ با کیت کامپوننت قابل ترجمه و مستندات دیزاین‌سیستم.',
    chips: ['Design Tokens', 'Figma Kit', 'RTL/LTR', 'States کامل'],
  },
  {
    id: 'automation',
    title: 'اتوماسیون n8n + ربات تلگرام',
    description:
      'فلوهای n8n برای لید، سینک محتوا با D1/KV، و ربات تلگرام برای اعلان پروژه‌ها و بلاگ.',
    chips: ['Webhook', 'Scheduler', 'Telegram Bot', 'D1/KV Sync'],
  },
];

const enServices: ClientService[] = [
  {
    id: 'corporate-web',
    title: 'Corporate & Global Websites',
    description:
      'Minimal corporate sites optimized for SEO and exports; ready for CRM, HubSpot, multilingual forms, and analytics.',
    chips: ['Workers SSR', 'Cloudflare CDN', 'Advanced tracking', 'Multilingual forms'],
    cta: { label: 'Request proposal', href: '/contact' },
  },
  {
    id: 'commerce',
    title: 'Commerce, Booking & Payments',
    description:
      'Headless commerce or booking flows with local/international payments, JSON-first content, and observability built in.',
    chips: ['Headless', 'n8n automation', 'Micro-payments', 'Live dashboards'],
    cta: { label: 'Book a demo', href: '/contact' },
  },
  {
    id: 'landing',
    title: 'Localized & Campaign Landing Pages',
    description:
      'Local landing pages with structured URLs `/city/:city/web-design` and LocalBusiness/FAQ schemas to drive conversions.',
    chips: ['A/B testing', 'Schema-ready', 'Minimal responsive', 'JSON copy'],
  },
  {
    id: 'seo',
    title: 'Technical & Content SEO',
    description:
      'Technical audits, keyword architecture, structured content production, and SSR schema injection for better CTR.',
    chips: ['Core Web Vitals', 'FAQ/Article schema', 'Local SEO', 'Technical fixes'],
  },
  {
    id: 'app',
    title: 'App Design & UX',
    description:
      'Mobile/web app UI/UX with a translation-ready component kit and documented design system for product teams.',
    chips: ['Design tokens', 'Figma kit', 'RTL/LTR', 'Complete states'],
  },
  {
    id: 'automation',
    title: 'n8n Automation & Telegram Bot',
    description:
      'Automation flows for leads, D1/KV content sync, and Telegram bot handoffs for projects and blog announcements.',
    chips: ['Webhook', 'Scheduler', 'Telegram bot', 'D1/KV sync'],
  },
];

const faProcess: ClientProcessStep[] = [
  {
    id: 'discover',
    title: 'Discovery & KPI',
    description: 'تعریف KPI، تحقیق کلمه کلیدی و نقشه محتوا. خروجی: سند IA + Backlog JSON.',
    deliverables: ['IA + Sitemap', 'Keyword map', 'Persona + Journey', 'Backlog JSON'],
  },
  {
    id: 'design',
    title: 'طراحی UI/UX + وایرفریم',
    description: 'وایرفریم تعاملی و کیت کامپوننت با پشتیبانی RTL/LTR برای فرانت و اپ.',
    deliverables: ['Design tokens', 'Wireframes', 'Component kit', 'UX states'],
  },
  {
    id: 'build',
    title: 'پیاده‌سازی SSR + اتوماسیون',
    description: 'Cloudflare Workers + Hono، تزریق داده JSON، و فلوهای n8n/Telegram برای لید.',
    deliverables: ['SSR routes', 'SEO schemas', 'n8n flows', 'Bot commands'],
  },
  {
    id: 'optimize',
    title: 'بهینه‌سازی و سئو مداوم',
    description: 'تست Core Web Vitals، A/B تست CTA، و گزارش ماهانه با متریک‌های شفاف.',
    deliverables: ['CWV fixes', 'A/B reports', 'Content calendar', 'Structured FAQ'],
  },
];

const enProcess: ClientProcessStep[] = [
  {
    id: 'discover',
    title: 'Discovery & KPIs',
    description: 'Define KPIs, keyword research, and content map. Output: IA spec + JSON backlog.',
    deliverables: ['IA + sitemap', 'Keyword map', 'Persona & journey', 'JSON backlog'],
  },
  {
    id: 'design',
    title: 'UI/UX & Wireframes',
    description: 'Interactive wireframes and component kit with RTL/LTR readiness for web and app.',
    deliverables: ['Design tokens', 'Wireframes', 'Component kit', 'UX states'],
  },
  {
    id: 'build',
    title: 'SSR Build & Automation',
    description: 'Cloudflare Workers + Hono, JSON-fed templates, and n8n/Telegram flows for leads.',
    deliverables: ['SSR routes', 'SEO schemas', 'n8n flows', 'Bot commands'],
  },
  {
    id: 'optimize',
    title: 'Optimize & SEO Ops',
    description: 'Core Web Vitals fixes, CTA A/B testing, and monthly reports with transparent metrics.',
    deliverables: ['CWV fixes', 'A/B reports', 'Content calendar', 'Structured FAQ'],
  },
];

const faTestimonials: ClientTestimonial[] = [
  {
    quote: 'با SSR و اسکیماهای لوکال، ورودی لید از جستجو 2.3 برابر شد و تیم فروش ما در تلگرام اعلان لحظه‌ای گرفت.',
    author: 'مریم خسروی',
    role: 'CMO، برند تجهیزات صنعتی',
    metric: '+130% CTR ارگانیک',
  },
  {
    quote: 'فروشگاه هدلس با n8n به ERP ما وصل شد و بدون وابستگی به وردپرس، پیاده‌سازی پرداخت بین‌المللی انجام شد.',
    author: 'سینا مرادی',
    role: 'Product Owner، استارتاپ صادراتی',
    metric: '-40% هزینه نگه‌داری',
  },
  {
    quote: 'وایرفریم‌ها، کیت کامپوننت و مستندات JSON باعث شد تیم ما در سه هفته MVP را منتشر کند.',
    author: 'هدیه نادری',
    role: 'Head of Growth، SaaS B2B',
    metric: 'MVP در ۳ هفته',
  },
];

const enTestimonials: ClientTestimonial[] = [
  {
    quote: 'Local SEO schemas plus Workers SSR increased inbound leads by 2.3x and our sales team received Telegram alerts instantly.',
    author: 'Maryam Khosravi',
    role: 'CMO, industrial brand',
    metric: '+130% organic CTR',
  },
  {
    quote: 'The headless store connected to our ERP via n8n; we launched international payments with zero WordPress overhead.',
    author: 'Sina Moradi',
    role: 'Product Owner, export startup',
    metric: '-40% maintenance cost',
  },
  {
    quote: 'Wireframes, component kit, and JSON docs let the team ship the MVP in three weeks without guesswork.',
    author: 'Hedieh Naderi',
    role: 'Head of Growth, B2B SaaS',
    metric: 'MVP in 3 weeks',
  },
];

const faPricing: ClientPricing[] = [
  {
    name: 'Launch',
    value: '۴۹ میلیون',
    cadence: 'پروژه‌ای',
    meta: 'برای استارتاپ‌ها و MVP با زمان ۴ هفته',
    features: ['وایرفریم + Design Tokens', '۳ صفحه اصلی SSR', 'لوکالیزیشن دو زبان', 'اسکیماهای پایه', 'داشبورد محتوا'],
  },
  {
    name: 'Growth',
    value: '۸۹ میلیون',
    cadence: 'پروژه‌ای',
    meta: 'برای برندهایی که سئو و اتوماسیون می‌خواهند',
    features: ['۶+ صفحه SSR', 'فلوهای n8n لید', 'ربات تلگرام اطلاع‌رسانی', 'Core Web Vitals Fix', 'A/B تست CTA'],
    highlighted: true,
  },
  {
    name: 'Scale',
    value: 'ماهیانه ۲۵ میلیون',
    cadence: 'ریتینر',
    meta: 'مانیتورینگ، تولید محتوا، و بهبود مداوم',
    features: ['تقویم محتوا', '۲۰ ساعت توسعه/ماه', 'گزارش KPI ماهانه', 'همگام‌سازی D1/KV', 'پشتیبانی چندزبانه'],
  },
];

const enPricing: ClientPricing[] = [
  {
    name: 'Launch',
    value: '$1.8k',
    cadence: 'per project',
    meta: 'For MVPs delivered in 4 weeks',
    features: ['Wireframes + tokens', '3 core SSR pages', 'Bilingual ready', 'Base schemas', 'Content dashboard'],
  },
  {
    name: 'Growth',
    value: '$3.1k',
    cadence: 'per project',
    meta: 'For brands needing SEO + automation',
    features: ['6+ SSR pages', 'Lead n8n flows', 'Telegram alerts', 'Core Web Vitals fixes', 'CTA A/B testing'],
    highlighted: true,
  },
  {
    name: 'Scale',
    value: '$750',
    cadence: 'per month',
    meta: 'Monitoring, content, and continuous SEO',
    features: ['Content calendar', '20 dev hours/month', 'Monthly KPI report', 'D1/KV sync', 'Multilingual support'],
  },
];

const faStack: ClientStack[] = [
  { title: 'Front/SSR', items: ['Hono', 'Cloudflare Workers', 'Tailwind-like tokens', 'Semantic HTML'] },
  { title: 'Automation', items: ['n8n', 'Telegram Bot', 'Webhooks', 'Slack/Email alerts'] },
  { title: 'Data', items: ['D1', 'KV', 'JSON-first content', 'Edge caching'] },
  { title: 'SEO', items: ['Schema.org', 'CWV profiling', 'A/B frameworks', 'Localized sitemaps'] },
];

const enStack: ClientStack[] = [
  { title: 'Front/SSR', items: ['Hono', 'Cloudflare Workers', 'Tokenized styles', 'Semantic HTML'] },
  { title: 'Automation', items: ['n8n', 'Telegram Bot', 'Webhooks', 'Slack/Email alerts'] },
  { title: 'Data', items: ['D1', 'KV', 'JSON-first content', 'Edge caching'] },
  { title: 'SEO', items: ['Schema.org', 'CWV profiling', 'A/B frameworks', 'Localized sitemaps'] },
];

const faAutomation = {
  title: 'دیتا و اتوماسیون',
  description: 'JSON-first + D1/KV + n8n برای همگام‌سازی محتوا، اعلان تلگرام و ایمیلینگ.',
  points: [
    'Sync محتوا به تلگرام، Slack و CRM',
    'وبهوک برای فرم‌ها و لیدها',
    'Scheduler برای انتشار بلاگ/نمونه‌کار',
    'D1 backup و نسخه‌بندی',
  ],
};

const enAutomation = {
  title: 'Data & Automation',
  description: 'JSON-first + D1/KV + n8n for content sync, Telegram alerts, and email drip.',
  points: [
    'Sync content to Telegram, Slack, CRM',
    'Webhooks for forms and leads',
    'Scheduler for blog/project publishing',
    'D1 backups and versioning',
  ],
};

const faContact = {
  title: 'همین امروز جلسه را رزرو کنید',
  bullets: [
    'پیشنهاد فنی + تخمین زمان‌بندی در ۴۸ ساعت',
    'دموی لندینگ لوکال و داشبورد محتوا',
    'تعیین KPI و نحوه گزارش‌گیری شفاف',
  ],
  primaryCta: { label: 'رزرو مشاوره', href: '/contact' },
  secondaryCta: { label: 'دانلود پلن PDF', href: '/docs/plan.pdf' },
};

const enContact = {
  title: 'Book a strategy call',
  bullets: [
    'Technical proposal + ETA in 48h',
    'Demo of localized landing & CMS dashboard',
    'Define KPIs and transparent reporting',
  ],
  primaryCta: { label: 'Book consultation', href: '/contact' },
  secondaryCta: { label: 'Download PDF plan', href: '/docs/plan.pdf' },
};

export const clientContent: Record<Locale, ClientLocaleContent> = {
  fa: {
    meta: {
      title: 'کلاینت: طراحی سایت، سئو، اپ، اتوماسیون | Webiyar',
      description: 'کلاینت اکسپریینس وبیار با SSR، سئو، اپلیکیشن، n8n و ربات تلگرام. JSON-first، چندزبانه و آماده صادرات.',
    },
    hero: {
      eyebrow: 'Client Experience',
      title: 'وب‌سایت و اپلیکیشن چندزبانه با سئو و اتوماسیون آماده رشد',
      lead:
        'طراحی و پیاده‌سازی SSR روی Cloudflare Workers، با داده‌های JSON برای ترجمه سریع، اسکیماهای سئو، و فلوهای n8n برای اعلان‌ها و لید.',
      badges: [
        'Cloudflare Workers',
        'SSR + Schema',
        'n8n + Telegram',
        'Design System',
        'D1/KV Ready',
      ],
      primaryCta: { label: 'مشاهده پلن رشد', href: '#pricing' },
      secondaryCta: { label: 'نمونه کارها', href: '/portfolio' },
      note: 'پوشش فارسی و انگلیسی | آماده اتصال به ابزارهای بین‌المللی',
    },
    stats: [
      { label: 'زمان تحویل MVP', value: '۴ هفته', description: 'وایرفریم، SSR، سئو پایه و اتوماسیون' },
      { label: 'بهبود CTR ارگانیک', value: '+130%', description: 'با اسکیماهای لوکال و FAQ' },
      { label: 'زمان پاسخ لید', value: '۱۱ دقیقه', description: 'اعلان ربات تلگرام + ایمیل' },
      { label: 'پشتیبانی زبان', value: 'FA / EN', description: 'قابل افزودن زبان سوم' },
    ],
    services: faServices,
    process: faProcess,
    pricing: faPricing,
    testimonials: faTestimonials,
    stack: faStack,
    automation: faAutomation,
    contact: faContact,
    keywords: [
      'طراحی سایت حرفه‌ای',
      'طراحی سایت در ارومیه',
      'سئو تکنیکال',
      'لندینگ لوکال',
      'طراحی اپلیکیشن',
      'اتوماسیون n8n',
      'ربات تلگرام',
    ],
  },
  en: {
    meta: {
      title: 'Client Experience: Web, SEO, App & Automation | Webiyar',
      description:
        'Webiyar client experience with Workers SSR, SEO schemas, app-ready design system, n8n automations, and Telegram bot handoffs.',
    },
    hero: {
      eyebrow: 'Client Experience',
      title: 'Multilingual web & app delivery with SEO and automation baked in',
      lead:
        'SSR on Cloudflare Workers with JSON-first content, schema-rich SEO, and n8n + Telegram automation for leads and publishing.',
      badges: ['Cloudflare Workers', 'SSR + Schema', 'n8n + Telegram', 'Design System', 'D1/KV Ready'],
      primaryCta: { label: 'View growth plans', href: '#pricing' },
      secondaryCta: { label: 'See portfolio', href: '/portfolio' },
      note: 'FA/EN support • export ready • connect any stack',
    },
    stats: [
      { label: 'MVP launch time', value: '4 weeks', description: 'Wireframes, SSR, base SEO, automation' },
      { label: 'Organic CTR lift', value: '+130%', description: 'Local + FAQ schemas' },
      { label: 'Lead response time', value: '11 min', description: 'Telegram bot + email alerts' },
      { label: 'Languages shipped', value: 'FA / EN', description: 'Add a third locale anytime' },
    ],
    services: enServices,
    process: enProcess,
    pricing: enPricing,
    testimonials: enTestimonials,
    stack: enStack,
    automation: enAutomation,
    contact: enContact,
    keywords: [
      'professional web design',
      'web design in orumiyeh',
      'technical seo',
      'local landing pages',
      'app ux design',
      'n8n automation',
      'telegram bot',
    ],
  },
};

export const clientNavigation = {
  fa: [
    { href: '#services', label: 'خدمات' },
    { href: '#process', label: 'فرآیند' },
    { href: '#pricing', label: 'پلن‌ها' },
    { href: '#automation', label: 'اتوماسیون' },
    { href: '#contact', label: 'ارتباط' },
  ],
  en: [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#automation', label: 'Automation' },
    { href: '#contact', label: 'Contact' },
  ],
};

export function getClientContent(locale: Locale): ClientLocaleContent {
  return clientContent[locale] ?? clientContent.fa;
}
