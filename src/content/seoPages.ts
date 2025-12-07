import { type Locale } from './siteContent';

type FAQ = { question: string; answer: string };

type CTA = { label: string; href: string; note?: string };

type SeoPageContent = {
  h1: string;
  meta: { title: string; description: string };
  intro: string;
  paragraphs: string[];
  benefits: string[];
  features?: string[];
  faqs: FAQ[];
  cta: CTA;
  primaryKeyword: string;
  secondaryKeywords: string[];
};

type SeoPages = Record<string, Record<Locale, SeoPageContent>>;

export const seoPages: SeoPages = {
  home: {
    fa: {
      h1: 'طراحی سایت، سئو و اتوماسیون برای برندهای بین‌المللی',
      meta: {
        title: 'طراحی سایت، سئو و اپلیکیشن | وبیار Cloudflare Workers',
        description:
          'وبیار: طراحی سایت SSR با TypeScript، سئو تکنیکال و محتوایی، طراحی اپلیکیشن و ربات تلگرام با فلوهای n8n. پشتیبانی چندزبانه و معماری JSON-first برای آپدیت سریع.',
      },
      intro:
        'ما برای بیزنس‌هایی که به رشد محلی و بین‌المللی فکر می‌کنند وب‌سایت، سئو، اپلیکیشن و ربات تلگرام را یکپارچه روی Cloudflare Workers پیاده می‌کنیم تا سرعت، امنیت و سئو در بهترین سطح باشد.',
      paragraphs: [
        'تمام محتوا، ساختار صفحات و متادیتا در JSON نگه‌داری می‌شود تا تغییرات کمپین‌ها بدون درگیری با کد انجام شود. SSR روی لبه Cloudflare باعث می‌شود لندینگ‌ها در هر کشور با کمترین LCP و بهترین Core Web Vitals لود شوند.',
        'تیم ما تجربه طراحی شرکتی، فروشگاهی و لندینگ را با سئو تکنیکال، اسکیما (LocalBusiness، FAQ، Article) و ردیابی آنالیتیکس ترکیب می‌کند. فلوهای n8n برای دریافت لید از فرم، ربات تلگرام یا وب‌هوک فروش آماده هستند.',
      ],
      benefits: [
        'کپی و متاهای چندزبانه با تشخیص خودکار Accept-Language',
        'UI/UX مینیمال و موبایل‌اول با HTML semantic و کلاس‌های مدرن',
        'اتصال فرم‌ها و ربات تلگرام به n8n و ذخیره‌سازی در D1 یا KV',
        'اسکیما و Open Graph آماده تزریق برای هر صفحه',
        'دیپلوی سریع با Wrangler و نسخه‌بندی داده‌های JSON',
      ],
      features: [
        'وب‌سایت‌های SSR برای شرکت‌ها و فروشگاه‌ها',
        'طراحی اپلیکیشن و ربات تلگرام با برندینگ یکپارچه',
        'اتوماسیون مارکتینگ و پشتیبانی با n8n',
        'آنالیتیکس و گزارش‌گیری قابل توسعه',
      ],
      faqs: [
        {
          question: 'چطور چندزبانه و JSON-first را مدیریت می‌کنید؟',
          answer:
            'زبان پیش‌فرض بر اساس Accept-Language انتخاب می‌شود و کلیدهای محتوا در آبجکت‌های TypeScript/JSON نسخه‌بندی می‌شوند تا تیم محتوا بدون لمس کد آن‌ها را به‌روزرسانی کند.',
        },
        {
          question: 'آیا می‌توان لیدها را در D1 ذخیره کرد؟',
          answer: 'بله، فرم‌ها و ربات تلگرام می‌توانند لید را در D1 یا KV ثبت کنند و هم‌زمان به n8n برای اعلان یا ارسال به CRM متصل شوند.',
        },
        {
          question: 'چقدر روی Core Web Vitals تمرکز دارید؟',
          answer:
            'معماری SSR روی Edge، کش تنظیم‌شده و تصاویر بهینه باعث LCP پایین و CLS کنترل‌شده می‌شود. کد HTML مینیمال و بدون اسکریپت اضافی است.',
        },
      ],
      cta: { label: 'رزرو جلسه مشاوره رایگان', href: '/contact', note: 'پاسخ در کمتر از ۲۴ ساعت' },
      primaryKeyword: 'طراحی سایت و سئو',
      secondaryKeywords: ['طراحی سایت حرفه‌ای', 'سئو تکنیکال', 'طراحی اپلیکیشن', 'ربات تلگرام', 'n8n Automation'],
    },
    en: {
      h1: 'Web design, SEO, and automation for international brands',
      meta: {
        title: 'Web design, SEO, apps, and bots | Webiyar on Cloudflare Workers',
        description:
          'SSR TypeScript sites, technical & content SEO, app design, Telegram bots, and n8n automation. JSON-first content, multilingual, and schema-ready for global launches.',
      },
      intro:
        'We build multilingual SSR sites, SEO, apps, and Telegram bots on Cloudflare Workers so your local and international campaigns load fast and rank well.',
      paragraphs: [
        'Content, page structure, and metadata live in JSON so marketing teams can adjust campaigns without code. Edge SSR keeps LCP low worldwide and keeps Core Web Vitals green.',
        'We combine corporate, ecommerce, and landing page design with technical SEO, schema markup (LocalBusiness, FAQ, Article), and analytics. n8n flows are ready for leads from forms, Telegram bots, or sales webhooks.',
      ],
      benefits: [
        'Automatic locale negotiation via Accept-Language',
        'Minimal, mobile-first semantic HTML with modern classes',
        'Forms and Telegram bots wired to n8n with D1/KV persistence',
        'Schema and Open Graph injected per page',
        'Fast deployment with Wrangler and versioned JSON content',
      ],
      features: ['SSR sites for corporate and ecommerce', 'App and Telegram bot design', 'n8n marketing and support automation', 'Extensible analytics and reporting'],
      faqs: [
        {
          question: 'How do you manage multilingual JSON-first content?',
          answer:
            'Locale is selected from Accept-Language and content keys live in TypeScript/JSON objects, so editors can update copy without touching the renderer.',
        },
        {
          question: 'Can leads be stored in D1?',
          answer: 'Yes. Forms and bots can persist to D1 or KV while triggering n8n flows for CRM syncing or notifications.',
        },
        {
          question: 'How do you protect Core Web Vitals?',
          answer: 'Edge SSR, tuned caching, and optimized assets keep LCP and CLS healthy. The markup stays lean with no excess scripts.',
        },
      ],
      cta: { label: 'Book a free consultation', href: '/contact', note: 'Response within 24 hours' },
      primaryKeyword: 'web design and SEO',
      secondaryKeywords: ['technical SEO', 'app design', 'Telegram bot', 'n8n workflows', 'Cloudflare Workers'],
    },
  },
  cityOrumiyehWebDesign: {
    fa: {
      h1: 'طراحی سایت در ارومیه با تمرکز بر سئو لوکال',
      meta: {
        title: 'طراحی سایت در ارومیه | لندینگ لوکال با سئو و سرعت بالا',
        description:
          'لندینگ «طراحی سایت در ارومیه» با SSR، کش لبه و اسکیماهای LocalBusiness/FAQ. متن‌ها در JSON و قابل شخصی‌سازی برای کمپین‌های محلی.',
      },
      intro: 'اگر به دنبال رتبه‌گیری روی «طراحی سایت در ارومیه» هستید، لندینگ ما با محتوای بومی‌سازی‌شده، سرعت بالا و اسکیماهای لوکال طراحی شده است.',
      paragraphs: [
        'متن صفحه، تیترها و متاها در JSON هستند تا به‌راحتی برای نام محله‌ها، رویدادهای محلی یا پیشنهادهای فصلی ویرایش شوند. SSR و کش Cloudflare لود صفحه را برای کاربران شمال‌غرب کشور سریع می‌کند.',
        'فرم مشاوره و ربات تلگرام هر لید را به n8n می‌فرستد تا در CRM ذخیره و پیگیری شود. با D1 می‌توانید آرشیو لید و گزارش‌های محلی داشته باشید.',
      ],
      benefits: [
        'H1 و متاهای هدفمند برای «طراحی سایت در ارومیه»',
        'LocalBusiness + FAQ Schema مخصوص شهر',
        'کپی دوزبانه فارسی/انگلیسی برای مشتریان بین‌المللی',
        'CTA محلی (تماس، تلگرام، واتساپ) قابل تنظیم در JSON',
        'فرم ذخیره‌سازی لید در D1 و اعلان بلادرنگ در تلگرام',
      ],
      features: [
        'بسته طراحی سایت SSR با سئو لوکال',
        'ربات تلگرام اختصاصی برای ارومیه',
        'فلوهای n8n برای پیگیری و گزارش',
        'پیشنهاد محتوای محلی قابل تغییر در JSON',
      ],
      faqs: [
        { question: 'زمان تحویل لندینگ ارومیه چقدر است؟', answer: 'نسخه اولیه در ۷ تا ۱۰ روز کاری آماده می‌شود و با داده JSON قابل اصلاح سریع است.' },
        {
          question: 'آیا صفحه دوزبانه تحویل می‌دهید؟',
          answer: 'بله، نسخه فارسی و انگلیسی به همراه سوییچ زبان آماده می‌شود تا جستجوهای بین‌المللی پوشش داده شود.',
        },
        {
          question: 'چطور اسکیماهای لوکال اضافه می‌شوند؟',
          answer: 'LocalBusiness و FAQ Schema بر اساس نام شهر و آدرس تنظیم و در SSR تزریق می‌شود.',
        },
      ],
      cta: { label: 'درخواست پروپوزال ارومیه', href: '/contact?city=orumiyeh', note: 'هماهنگی جلسه در کمتر از ۴۸ ساعت' },
      primaryKeyword: 'طراحی سایت در ارومیه',
      secondaryKeywords: ['شرکت طراحی سایت ارومیه', 'سئو لوکال ارومیه', 'لندینگ لوکال ارومیه', 'طراحی سایت حرفه‌ای'],
    },
    en: {
      h1: 'Web design in Orumiyeh with local SEO focus',
      meta: {
        title: 'Web design in Orumiyeh | Fast local landing with SEO',
        description:
          'Local landing for “web design in Orumiyeh” with Edge SSR, caching, and LocalBusiness/FAQ schema. JSON-driven copy for quick seasonal updates.',
      },
      intro: 'Rank for “web design in Orumiyeh” with localized copy, fast delivery, and schema-optimized SSR pages.',
      paragraphs: [
        'Headings, copy, and metadata live in JSON so you can quickly adjust for neighborhoods, seasonal offers, or events. Cloudflare caching keeps load times low for northwest Iran.',
        'Consultation forms and Telegram bots send every lead to n8n for CRM storage and follow-up. D1 can keep a local archive and performance reports.',
      ],
      benefits: [
        'H1 and metadata tailored to “web design in Orumiyeh”',
        'LocalBusiness + FAQ schema tuned for the city',
        'Bilingual Persian/English copy for international clients',
        'Local CTAs (call, Telegram, WhatsApp) editable via JSON',
        'Leads stored in D1 with instant Telegram alerts',
      ],
      features: ['SSR web design bundle with local SEO', 'City-specific Telegram bot', 'n8n follow-up and reporting flows', 'Editable local offers in JSON'],
      faqs: [
        { question: 'How fast can the Orumiyeh page go live?', answer: 'Initial launch is 7–10 business days with JSON keys for rapid edits.' },
        { question: 'Do you ship a bilingual page?', answer: 'Yes, Persian and English versions plus a language switcher are provided to capture international searches.' },
        { question: 'How is local schema added?', answer: 'LocalBusiness and FAQ schema are filled with city data and injected at render time.' },
      ],
      cta: { label: 'Request Orumiyeh proposal', href: '/contact?city=orumiyeh', note: 'Schedule within 48 hours' },
      primaryKeyword: 'web design in Orumiyeh',
      secondaryKeywords: ['Orumiyeh web design company', 'local SEO Orumiyeh', 'local landing page', 'professional web design'],
    },
  },
  services: {
    fa: {
      h1: 'خدمات طراحی سایت، سئو، اپلیکیشن و اتوماسیون',
      meta: {
        title: 'خدمات طراحی سایت، سئو و اپلیکیشن | وبیار',
        description:
          'طراحی سایت SSR، سئو تکنیکال و محتوایی، طراحی اپلیکیشن و ربات تلگرام، و فلوهای n8n. همه با ساختار JSON-first و قابلیت استقرار روی Cloudflare Workers.',
      },
      intro: 'سرویس‌های ما از استراتژی تا اجرا پوشش می‌دهد: طراحی سایت، سئو، اپلیکیشن، ربات تلگرام و اتوماسیون n8n.',
      paragraphs: [
        'هر سرویس با چک‌لیست سئو و Core Web Vitals آغاز می‌شود تا پایه فنی درست چیده شود. محتوای صفحات خدمات در JSON ذخیره می‌شود تا بسته‌ها و قیمت‌ها به سرعت به‌روزرسانی شوند.',
        'فلوهای n8n برای ثبت سفارش، صدور فاکتور و اعلان پشتیبانی آماده‌اند و در صورت نیاز به D1 متصل می‌شوند. تجربه کاربری مینیمال و ریسپانسیو است تا نرخ تبدیل بالا بماند.',
      ],
      benefits: [
        'طراحی سایت SSR (شرکتی، فروشگاهی، لندینگ)',
        'سئو تکنیکال، محتوایی و لوکال با اسکیما',
        'طراحی اپلیکیشن و ربات تلگرام متصل به n8n',
        'اتوماسیون فروش و پشتیبانی با گزارش‌دهی شفاف',
        'مستندسازی JSON برای تغییر سریع پلن‌ها',
      ],
      features: [
        'پکیج طراحی سایت با UI/UX مینیمال',
        'پکیج سئو با تحقیقات کلیدواژه و محتوا',
        'اپلیکیشن و ربات تلگرام با برندینگ یکپارچه',
        'فلوهای خودکار n8n برای CRM و اعلان',
      ],
      faqs: [
        { question: 'آیا خدمات به صورت ماژولار ارائه می‌شود؟', answer: 'بله، می‌توانید فقط طراحی سایت، فقط سئو یا پکیج کامل (سایت + سئو + اتوماسیون) را انتخاب کنید.' },
        { question: 'چطور به n8n یا ابزارهای دیگر وصل می‌شوید؟', answer: 'از وب‌هوک‌ها و API برای اتصال به n8n، CRM، سرویس پرداخت یا هر اتوماسیون دیگر استفاده می‌کنیم.' },
        { question: 'پشتیبانی بعد از تحویل چگونه است؟', answer: 'پلن‌های نگهداری شامل مانیتورینگ سرعت، آپدیت محتوا و بهبود سئو بر اساس داده‌های Search Console و آنالیتیکس است.' },
      ],
      cta: { label: 'دریافت لیست قیمت', href: '/contact?type=services', note: 'ارسال پلن پیشنهادی ظرف ۲۴ ساعت' },
      primaryKeyword: 'خدمات طراحی سایت و سئو',
      secondaryKeywords: ['پکیج طراحی سایت', 'پکیج سئو', 'اتوماسیون n8n', 'طراحی اپلیکیشن', 'ربات تلگرام'],
    },
    en: {
      h1: 'Web design, SEO, app, and automation services',
      meta: {
        title: 'Services: web design, SEO, apps, bots | Webiyar',
        description:
          'SSR web design, technical/content/local SEO, app & Telegram bot design, and n8n automation. JSON-first structure deployable on Cloudflare Workers.',
      },
      intro: 'From strategy to execution: SSR websites, SEO, apps, Telegram bots, and n8n automation.',
      paragraphs: [
        'Each service starts with a technical SEO and Core Web Vitals checklist. Service copy lives in JSON so packages and pricing can be refreshed quickly.',
        'n8n flows are ready for orders, invoicing, and support notifications with optional D1 storage. UX stays minimal and responsive to keep conversion high.',
      ],
      benefits: [
        'SSR web design (corporate, ecommerce, landing)',
        'Technical, content, and local SEO with schema',
        'App and Telegram bot design wired to n8n',
        'Sales/support automation with clear reporting',
        'JSON documentation for fast plan updates',
      ],
      features: ['Web design package with minimal UI/UX', 'SEO package with research and content', 'Apps and Telegram bots with unified branding', 'n8n automation flows for CRM and alerts'],
      faqs: [
        { question: 'Are services modular?', answer: 'Yes. Choose web design only, SEO only, or the full bundle (site + SEO + automation).' },
        { question: 'How do you connect to n8n or other tools?', answer: 'We use webhooks and APIs to connect with n8n, CRMs, payment gateways, or other automation tools.' },
        { question: 'How is post-launch support handled?', answer: 'Maintenance plans include speed monitoring, content updates, and SEO improvements informed by Search Console and analytics.' },
      ],
      cta: { label: 'Request pricing', href: '/contact?type=services', note: 'Get a tailored plan within 24 hours' },
      primaryKeyword: 'web design and SEO services',
      secondaryKeywords: ['web design package', 'SEO package', 'n8n automation', 'app design', 'Telegram bot'],
    },
  },
  blogTechnicalSeo: {
    fa: {
      h1: 'چک‌لیست سئو تکنیکال برای سایت‌های Cloudflare Workers',
      meta: {
        title: 'سئو تکنیکال Cloudflare Workers | چک‌لیست ۱۴ موردی',
        description:
          'راهنمای عملی برای بهینه‌سازی سئو تکنیکال سایت‌های SSR روی Cloudflare Workers: Core Web Vitals، کش، اسکیما و ساختار URL.',
      },
      intro: 'در این مقاله چک‌لیست ۱۴ موردی برای سئو تکنیکال یک سایت SSR روی Cloudflare Workers را مرور می‌کنیم تا مطمئن شوید خزنده‌ها و کاربران تجربه‌ای سریع و بدون خطا دارند.',
      paragraphs: [
        'از ساختار URL و ریدایرکت‌ها تا هدرهای کش، همه چیز باید برای بودجه خزش بهینه شود. رندر SSR لبه و استریم HTML به کوتاه شدن TTFB کمک می‌کند.',
        'اسکیماهای Article، FAQ و Breadcrumb باعث درک بهتر محتوا می‌شود. با گزارش‌های Search Console خطاهای Crawl و Index را مانیتور کنید و از D1/KV برای لاگینگ سبک بهره بگیرید.',
      ],
      benefits: [
        'TTFB پایین با SSR و استریم HTML',
        'هدرفایل robots.txt و sitemap.xml داینامیک',
        'اسکیما Article/FAQ/Breadcrumb آماده پیاده‌سازی',
        'تنظیم کش و ETag برای صفحات داینامیک',
        'مانیتورینگ خطا و Core Web Vitals',
      ],
      features: [
        'نمونه تنظیم wrangler.toml برای کش',
        'کد TypeScript برای Sitemap/Robots',
        'چک‌لیست تست قبل از دیپلوی',
      ],
      faqs: [
        { question: 'چطور sitemap را داینامیک تولید کنیم؟', answer: 'با خواندن لیست URLها از JSON یا D1 و رندر XML در روت Worker. کش ۲۴ ساعته برای کاهش لود توصیه می‌شود.' },
        { question: 'آیا استریم HTML به سئو کمک می‌کند؟', answer: 'بله، استریم SSR باعث کاهش TTFB می‌شود و در کنار کش لبه تجربه کاربر و خزنده را بهبود می‌دهد.' },
        { question: 'برای صفحات چندزبانه چه کنیم؟', answer: 'hreflangها را بر اساس آبجکت زبان‌ها تولید و در head تزریق کنید. URLهای یکتا برای هر زبان در sitemap بیاورید.' },
      ],
      cta: { label: 'دریافت چک‌لیست کامل', href: '/contact?asset=tech-seo-checklist', note: 'نسخه PDF و JSON قابل ویرایش' },
      primaryKeyword: 'سئو تکنیکال Cloudflare Workers',
      secondaryKeywords: ['چک‌لیست سئو تکنیکال', 'Core Web Vitals', 'sitemap داینامیک', 'اسکیما Article FAQ'],
    },
    en: {
      h1: 'Technical SEO checklist for Cloudflare Workers sites',
      meta: {
        title: 'Technical SEO for Cloudflare Workers | 14-point checklist',
        description:
          'Actionable checklist to optimize technical SEO for SSR sites on Cloudflare Workers: Core Web Vitals, caching, schema, and URL structure.',
      },
      intro: 'This article walks through a 14-point technical SEO checklist for an SSR site on Cloudflare Workers so both crawlers and users get a fast, error-free experience.',
      paragraphs: [
        'From URL structure and redirects to cache headers, everything should be tuned for crawl budget. Edge SSR and HTML streaming reduce TTFB significantly.',
        'Article, FAQ, and Breadcrumb schema improve content understanding. Use Search Console reports to monitor crawl/index issues and lean D1/KV logging for diagnostics.',
      ],
      benefits: [
        'Low TTFB with SSR and HTML streaming',
        'Dynamic robots.txt and sitemap.xml',
        'Article/FAQ/Breadcrumb schema ready to implement',
        'Cache and ETag tuning for dynamic pages',
        'Error and Core Web Vitals monitoring',
      ],
      features: ['Sample wrangler.toml cache hints', 'TypeScript snippet for Sitemap/Robots', 'Pre-deploy QA checklist'],
      faqs: [
        { question: 'How do we generate a dynamic sitemap?', answer: 'Read URLs from JSON or D1 and render XML at the Worker root; a 24h cache keeps it lightweight.' },
        { question: 'Does HTML streaming help SEO?', answer: 'Yes. SSR streaming cuts TTFB, and with edge caching it improves both user and crawler experience.' },
        { question: 'What about multilingual pages?', answer: 'Emit hreflangs from your locale objects and inject into head; list distinct URLs per locale in the sitemap.' },
      ],
      cta: { label: 'Get the full checklist', href: '/contact?asset=tech-seo-checklist', note: 'Comes in editable PDF and JSON' },
      primaryKeyword: 'technical SEO Cloudflare Workers',
      secondaryKeywords: ['technical SEO checklist', 'Core Web Vitals', 'dynamic sitemap', 'Article FAQ schema'],
    },
  },
};

export type { SeoPageContent, FAQ, CTA };
