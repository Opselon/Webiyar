export type Locale = 'fa' | 'en';

type NavItem = {
  label: string;
  href: string;
};

type Meta = {
  title: string;
  description: string;
};

type Section = {
  id: string;
  heading: string;
  subheading?: string;
  body?: string;
  highlights?: string[];
  cta?: { label: string; href: string };
};

type PageContent = {
  meta: Meta;
  hero: Section;
  sections: Section[];
};

export const navigation: Record<Locale, NavItem[]> = {
  fa: [
    { label: 'خدمات', href: '/services' },
    { label: 'نمونه‌کارها', href: '/portfolio' },
    { label: 'بلاگ', href: '/blog' },
    { label: 'درباره ما', href: '/about' },
    { label: 'تماس', href: '/contact' },
  ],
  en: [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const homePage: Record<Locale, PageContent> = {
  fa: {
    meta: {
      title: 'طراحی سایت و سئو مدرن | وبیار',
      description:
        'آژانس تخصصی طراحی سایت، سئو، اپلیکیشن و اتوماسیون با Cloudflare Workers و n8n. تمرکز بر سرعت، سئو و تجربه کاربری.',
    },
    hero: {
      id: 'hero',
      heading: 'طراحی سایت و سئو مدرن برای برندهای آینده‌نگر',
      subheading:
        'پیاده‌سازی SSR روی Cloudflare Workers، پشتیبانی چندزبانه و ساختار JSON برای مدیریت محتوای چابک.',
      body: 'وبیار تیمی چابک برای طراحی سایت شرکتی، فروشگاهی و لندینگ، سئو تکنیکال، طراحی اپلیکیشن، ربات تلگرام و یکپارچه‌سازی اتوماسیون با n8n.',
      cta: { label: 'درخواست مشاوره رایگان', href: '/contact' },
    },
    sections: [
      {
        id: 'services',
        heading: 'خدمات ۳۶۰ درجه',
        highlights: [
          'طراحی سایت SSR با Cloudflare Workers و TypeScript',
          'بهینه‌سازی سئو (On-page، Technical، Local)',
          'طراحی اپلیکیشن و ربات تلگرام متصل به n8n و D1',
          'UI/UX مینیمال، ریسپانسیو و سریع',
        ],
      },
      {
        id: 'performance',
        heading: 'سریع، امن، مقیاس‌پذیر',
        body: 'زیرساخت لبه Cloudflare برای LCP پایین، کش هوشمند و امنیت. داده‌های ساختار یافته JSON و D1 برای مدیریت محتوا.',
        highlights: ['CWV بهینه (LCP، CLS، INP)', 'استقرار خودکار با Wrangler', 'اسکیماهای LocalBusiness و FAQ آماده تزریق'],
      },
      {
        id: 'automation',
        heading: 'اتوماسیون و اینتگریشن',
        body: 'ربات تلگرام، وب‌هوک‌ها و فلوهای n8n برای هماهنگی فروش، پشتیبانی و مارکتینگ. اتصال به D1 یا KV برای داده‌های سبک.',
        highlights: ['Triggerهای فروش و پیگیری سرنخ', 'هماهنگی CRM/ERP از طریق API', 'گزارش‌گیری زنده با داشبورد سبک'],
      },
      {
        id: 'cta',
        heading: 'یک قدم تا رشد',
        body: 'مشاوره رایگان برای استراتژی سئو، طراحی اطلاعات، و معماری فنی Cloudflare Workers.',
        cta: { label: 'شروع پروژه', href: '/contact' },
      },
    ],
  },
  en: {
    meta: {
      title: 'Modern Web Design & SEO | Webiyar',
      description:
        'Edge-first web design, SEO, app design, Telegram bot, and n8n automation on Cloudflare Workers with JSON-driven content.',
    },
    hero: {
      id: 'hero',
      heading: 'Modern web design and SEO for forward-looking brands',
      subheading:
        'SSR on Cloudflare Workers, multilingual support, and JSON-first content governance.',
      body: 'We deliver corporate and ecommerce sites, landing pages, SEO, app design, Telegram bots, and n8n automations with blazing performance.',
      cta: { label: 'Book a free consultation', href: '/contact' },
    },
    sections: [
      {
        id: 'services',
        heading: 'Full-stack services',
        highlights: [
          'SSR websites on Cloudflare Workers with TypeScript',
          'On-page, technical, and local SEO',
          'App design, Telegram bots, n8n workflows, optional D1',
          'Minimal, responsive UI/UX',
        ],
      },
      {
        id: 'performance',
        heading: 'Fast, secure, scalable',
        body: 'Edge infrastructure for low LCP, smart caching, and security. JSON + D1 ready for content operations.',
        highlights: ['Optimized CWV (LCP, CLS, INP)', 'Wrangler-driven CI/CD', 'Schema-ready (LocalBusiness, FAQ)'],
      },
      {
        id: 'automation',
        heading: 'Automation ready',
        body: 'Telegram bots, webhooks, and n8n flows to sync sales, support, and marketing. Connect to D1 or KV for lean data.',
        highlights: ['Lead triggers', 'CRM/ERP via API', 'Live reporting dashboards'],
      },
      {
        id: 'cta',
        heading: 'Let’s grow together',
        body: 'Free consultation for SEO strategy, information architecture, and Cloudflare Workers architecture.',
        cta: { label: 'Start a project', href: '/contact' },
      },
    ],
  },
};

export const servicesPage: Record<Locale, PageContent> = {
  fa: {
    meta: {
      title: 'خدمات طراحی سایت، سئو و اتوماسیون | وبیار',
      description:
        'پکیج‌های طراحی سایت، سئو، طراحی اپلیکیشن، ربات تلگرام و فلوهای n8n. معماری SSR و داده‌های JSON برای توسعه سریع.',
    },
    hero: {
      id: 'hero',
      heading: 'خدمات ما برای رشد دیجیتال شما',
      body: 'از طراحی سایت تا سئو و اتوماسیون؛ همه چیز با معماری Cloudflare Workers و محتوای JSON قابل مدیریت.',
    },
    sections: [
      {
        id: 'web-design',
        heading: 'طراحی سایت SSR',
        body: 'سایت شرکتی، فروشگاهی و لندینگ با TypeScript و رندر سمت سرور برای سئو و سرعت بالا.',
        highlights: ['UI/UX مینیمال', 'فلوهای فرم و تماس با n8n', 'پشتیبانی چندزبانه RTL/LTR'],
      },
      {
        id: 'seo',
        heading: 'سئو تکنیکال و محتوایی',
        body: 'آنالیز فنی، سئوی لوکال، مارک‌آپ اسکیما و تدوین استراتژی محتوا با داده‌های ساختار یافته.',
        highlights: ['LocalBusiness، FAQ، Article Schema', 'بهینه‌سازی سرعت و Core Web Vitals', 'کیورد تارگتینگ هوشمند'],
      },
      {
        id: 'app',
        heading: 'طراحی اپلیکیشن و ربات تلگرام',
        body: 'تجربه موبایل و ربات‌های کارآمد برای فروش و پشتیبانی. اتصال به n8n و D1 برای داده‌های سبک.',
        highlights: ['UI موبایل‌اول', 'وب‌هوک‌ها و پیام‌های خودکار', 'ردیابی تعاملات در داشبورد'],
      },
      {
        id: 'automation',
        heading: 'اتوماسیون n8n و یکپارچه‌سازی',
        body: 'پیاده‌سازی فلوهای هوشمند برای لید، صورتحساب، اعلان و مانیتورینگ. اتصال به CRM/ERP.',
        highlights: ['Triggerهای فروش', 'Sync با Zapier/Make جایگزین', 'مستندسازی JSON برای نگهداری آسان'],
      },
    ],
  },
  en: {
    meta: {
      title: 'Web design, SEO, and automation services | Webiyar',
      description:
        'SSR web design, SEO, app design, Telegram bots, and n8n flows on Cloudflare Workers with JSON-governed content.',
    },
    hero: {
      id: 'hero',
      heading: 'Services built for digital growth',
      body: 'From SSR websites to SEO and automation, all optimized for Cloudflare Workers and JSON-first operations.',
    },
    sections: [
      {
        id: 'web-design',
        heading: 'SSR web design',
        body: 'Corporate, ecommerce, and landing pages with TypeScript SSR for speed and SEO.',
        highlights: ['Minimal UI/UX', 'Forms and contact flows via n8n', 'Multilingual RTL/LTR'],
      },
      {
        id: 'seo',
        heading: 'Technical & content SEO',
        body: 'Technical audits, local SEO, schema markup, and content strategy with structured data.',
        highlights: ['LocalBusiness, FAQ, Article schema', 'Core Web Vitals optimization', 'Smart keyword targeting'],
      },
      {
        id: 'app',
        heading: 'App design & Telegram bots',
        body: 'Mobile-first experiences and Telegram automation for sales and support. Hooked to n8n and D1.',
        highlights: ['Mobile-first UI', 'Webhooks and automations', 'Interaction tracking dashboards'],
      },
      {
        id: 'automation',
        heading: 'n8n automation & integrations',
        body: 'Lead, billing, alerting, and monitoring flows. Connect to CRM/ERP and APIs.',
        highlights: ['Sales triggers', 'Sync with Zapier/Make alternatives', 'JSON documentation for easy ops'],
      },
    ],
  },
};

export const cityPage = (
  citySlug: string,
  locale: Locale,
): PageContent => {
  const cityNameFa = citySlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace('Orumiyeh', 'ارومیه')
    .replace('Tehran', 'تهران');

  const cityNameEn = citySlug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  if (locale === 'en') {
    return {
      meta: {
        title: `Web design in ${cityNameEn} | Webiyar`,
        description: `Edge-first SSR web design and SEO services in ${cityNameEn}. Fast, multilingual, and automation-ready on Cloudflare Workers.`,
      },
      hero: {
        id: 'hero',
        heading: `Web design in ${cityNameEn}`,
        subheading: 'SSR, SEO-ready, multilingual, and automation-first builds.',
        body: 'Local-ready landing pages with structured data, Telegram bot integration, and n8n workflows to capture leads fast.',
        cta: { label: 'Get a proposal', href: '/contact' },
      },
      sections: [
        {
          id: 'local-seo',
          heading: 'Local SEO & speed',
          body: 'Schema, fast LCP, and localized copy in English/Farsi for stronger rankings and conversions.',
          highlights: ['LocalBusiness + FAQ schema', 'Edge caching for the city region', 'JSON-driven copy for updates'],
        },
        {
          id: 'services',
          heading: 'What you get',
          highlights: [
            'SSR website tuned for local queries',
            'Technical SEO and performance tuning',
            'Telegram bot + n8n lead automations',
            'Optional D1 data layer for leads',
          ],
        },
        {
          id: 'cta',
          heading: 'Ready to launch locally?',
          body: 'We tailor the landing page content, CTAs, and automations to your city audience.',
          cta: { label: 'Schedule a call', href: '/contact' },
        },
      ],
    };
  }

  return {
    meta: {
      title: `طراحی سایت در ${cityNameFa} | وبیار`,
      description: `طراحی سایت SSR و سئو در ${cityNameFa} با Cloudflare Workers. محتوای چندزبانه، ربات تلگرام و n8n برای جذب سریع لید.`,
    },
    hero: {
      id: 'hero',
      heading: `طراحی سایت در ${cityNameFa}`,
      subheading: 'سایت رندر سمت سرور، سئوی لوکال و اتوماسیون فروش.',
      body: 'لندینگ لوکال با اسکیما، محتوای فارسی/انگلیسی، ربات تلگرام و فلوهای n8n برای دریافت سریع سرنخ.',
      cta: { label: 'درخواست پروپوزال', href: '/contact' },
    },
    sections: [
      {
        id: 'local-seo',
        heading: 'سئوی لوکال و سرعت',
        body: 'اسکیما، LCP پایین و کپی لوکال برای رتبه و تبدیل بهتر.',
        highlights: ['LocalBusiness + FAQ Schema', 'کش لبه در منطقه شهر', 'محتوای JSON برای آپدیت سریع'],
      },
      {
        id: 'services',
        heading: 'چه چیزی دریافت می‌کنید',
        highlights: [
          'سایت SSR بهینه برای جستجوهای محلی',
          'سئوی فنی و بهبود سرعت',
          'ربات تلگرام + اتوماسیون n8n برای لید',
          'لایه داده اختیاری D1 برای لید',
        ],
      },
      {
        id: 'cta',
        heading: 'آماده جذب مشتری محلی هستید؟',
        body: 'محتوا، CTA و اتوماسیون‌ها را متناسب با مخاطب شهر شما تنظیم می‌کنیم.',
        cta: { label: 'رزرو جلسه', href: '/contact' },
      },
    ],
  };
};

export const localesMeta: Record<Locale, { dir: 'rtl' | 'ltr'; lang: string }> = {
  fa: { dir: 'rtl', lang: 'fa' },
  en: { dir: 'ltr', lang: 'en' },
};
