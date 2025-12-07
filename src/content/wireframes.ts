export type WireframeSection = {
  id: string;
  goal: string;
  heading: string;
  type: 'hero' | 'content' | 'list' | 'faq' | 'cta' | 'feature-grid';
  summary: string;
  elements: {
    tag: 'h1' | 'h2' | 'h3' | 'p' | 'ul' | 'li' | 'button' | 'badge';
    content: string;
  }[];
  notes?: string[];
};

export type WireframePage = {
  url: string;
  locale: 'fa' | 'en';
  purpose: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  sections: WireframeSection[];
};

export const wireframes: WireframePage[] = [
  {
    url: '/',
    locale: 'fa',
    purpose: 'معرفی ارزش پیشنهادی و هدایت کاربر به خدمات طراحی سایت، سئو و اتوماسیون.',
    primaryKeyword: 'طراحی سایت و سئو',
    secondaryKeywords: ['طراحی سایت حرفه‌ای', 'سئو سایت', 'اتوماسیون n8n', 'ربات تلگرام'],
    sections: [
      {
        id: 'hero',
        goal: 'بیان پیام اصلی و CTA سریع.',
        heading: 'طراحی سایت و سئو مدرن برای برندهای آینده‌نگر',
        type: 'hero',
        summary: 'هدر با H1، خلاصه ارزش، دو CTA (مشاوره، مشاهده خدمات) و شمای خدمات.',
        elements: [
          { tag: 'h1', content: 'طراحی سایت و سئو مدرن برای برندهای آینده‌نگر' },
          { tag: 'p', content: 'SSR روی Cloudflare Workers، پشتیبانی چندزبانه، ربات تلگرام و فلوهای n8n.' },
          { tag: 'button', content: 'درخواست مشاوره رایگان' },
          { tag: 'button', content: 'مشاهده خدمات' },
        ],
        notes: ['پس‌زمینه گرادیان، layout دو ستونه در دسکتاپ، تک‌ستونه در موبایل.'],
      },
      {
        id: 'services',
        goal: 'نمایش خلاصه خدمات کلیدی.',
        heading: 'خدمات ۳۶۰ درجه',
        type: 'feature-grid',
        summary: 'چهار کارت برای طراحی سایت، سئو، طراحی اپلیکیشن/ربات تلگرام، اتوماسیون n8n.',
        elements: [
          { tag: 'h2', content: 'خدمات ۳۶۰ درجه' },
          { tag: 'li', content: 'طراحی سایت SSR با TypeScript' },
          { tag: 'li', content: 'سئو تکنیکال و محتوایی' },
          { tag: 'li', content: 'طراحی اپلیکیشن و ربات تلگرام' },
          { tag: 'li', content: 'اتوماسیون n8n و اتصال D1/KV' },
        ],
      },
      {
        id: 'why-us',
        goal: 'ایجاد تمایز با تمرکز بر سرعت و سئو.',
        heading: 'چرا وبیار؟',
        type: 'content',
        summary: 'سکشن سه ستون با آیکون/عدد: سرعت لبه، اسکیما، پشتیبانی چندزبانه.',
        elements: [
          { tag: 'h2', content: 'چرا وبیار؟' },
          { tag: 'p', content: 'Cloudflare Edge + SSR = LCP پایین؛ محتوا در JSON، مدیریت چابک؛ اسکیماهای LocalBusiness و FAQ.' },
        ],
      },
      {
        id: 'portfolio',
        goal: 'اعتمادسازی با ۳-۴ نمونه‌کار خلاصه.',
        heading: 'نمونه‌کارهای منتخب',
        type: 'feature-grid',
        summary: 'کارت‌های پروژه با نام، صنعت، نتیجه سئو/سرعت و CTA مشاهده کامل.',
        elements: [
          { tag: 'h2', content: 'نمونه‌کارهای منتخب' },
          { tag: 'button', content: 'مشاهده همه پروژه‌ها' },
        ],
      },
      {
        id: 'faq',
        goal: 'پاسخ به سوالات رایج و آماده برای FAQ Schema.',
        heading: 'سوالات متداول',
        type: 'faq',
        summary: 'آکاردئون 4 سوال: تحویل، چندزبانه، اتوماسیون، پشتیبانی.',
        elements: [
          { tag: 'h2', content: 'سوالات متداول' },
          { tag: 'li', content: 'چقدر زمان تا تحویل نسخه اولیه؟' },
          { tag: 'li', content: 'سایت چندزبانه چطور مدیریت می‌شود؟' },
          { tag: 'li', content: 'آیا ربات تلگرام و n8n را هم پیاده می‌کنید؟' },
          { tag: 'li', content: 'پشتیبانی بعد از لانچ چگونه است؟' },
        ],
      },
      {
        id: 'cta',
        goal: 'جمع‌بندی و دعوت به اقدام.',
        heading: 'یک جلسه مشاوره رایگان رزرو کنید',
        type: 'cta',
        summary: 'بلوک با تیتر، متن کوتاه، فرم کوتاه یا دکمه.',
        elements: [
          { tag: 'h2', content: 'یک جلسه مشاوره رایگان رزرو کنید' },
          { tag: 'p', content: 'در ۳۰ دقیقه نیاز، شهر هدف و اتوماسیون‌های مدنظر شما را بررسی می‌کنیم.' },
          { tag: 'button', content: 'رزرو جلسه' },
        ],
      },
    ],
  },
  {
    url: '/city/orumiyeh/web-design',
    locale: 'fa',
    purpose: 'جذب مخاطب محلی برای طراحی سایت در ارومیه با تاکید بر سئو لوکال.',
    primaryKeyword: 'طراحی سایت در ارومیه',
    secondaryKeywords: ['شرکت طراحی سایت ارومیه', 'سئو لوکال ارومیه', 'طراحی لندینگ ارومیه'],
    sections: [
      {
        id: 'hero',
        goal: 'بیان خدمت لوکال و CTA.',
        heading: 'طراحی سایت در ارومیه با تمرکز روی سئو لوکال',
        type: 'hero',
        summary: 'H1، زیرتیتر درباره سرعت و بومی‌سازی، CTA پروپوزال.',
        elements: [
          { tag: 'h1', content: 'طراحی سایت در ارومیه' },
          { tag: 'p', content: 'لندینگ SSR، کپی فارسی/انگلیسی، کش لبه و اسکیماهای LocalBusiness.' },
          { tag: 'button', content: 'درخواست پروپوزال' },
        ],
      },
      {
        id: 'local-benefits',
        goal: 'نقاط قوت مخصوص شهر.',
        heading: 'چرا ارومیه؟',
        type: 'feature-grid',
        summary: 'سه کارت: سئوی لوکال، سرعت نزدیک‌ترین لبه، محتوای JSON قابل بروزرسانی.',
        elements: [
          { tag: 'h2', content: 'چرا ارومیه؟' },
          { tag: 'li', content: 'LocalBusiness + FAQ Schema متناسب شهر' },
          { tag: 'li', content: 'LCP پایین با کش نزدیک منطقه' },
          { tag: 'li', content: 'محتوای JSON برای تغییر سریع کمپین‌ها' },
        ],
      },
      {
        id: 'offer',
        goal: 'جزئیات بسته لوکال.',
        heading: 'چه چیزی دریافت می‌کنید؟',
        type: 'content',
        summary: 'بولت‌ها: طراحی SSR، سئو، ربات تلگرام، n8n، فرم لید به D1.',
        elements: [
          { tag: 'h2', content: 'چه چیزی دریافت می‌کنید؟' },
          { tag: 'li', content: 'سایت SSR بهینه برای جستجوهای «طراحی سایت در ارومیه»' },
          { tag: 'li', content: 'ربات تلگرام برای دریافت لید و اتصال به n8n' },
          { tag: 'li', content: 'فرم تماس با ذخیره در D1 یا KV' },
        ],
      },
      {
        id: 'faq',
        goal: 'پاسخ به موانع خرید.',
        heading: 'سوالات متداول',
        type: 'faq',
        summary: '۳ سوال درباره زمان‌بندی، چندزبانه، نگهداری.',
        elements: [
          { tag: 'h2', content: 'سوالات متداول' },
          { tag: 'li', content: 'چقدر تا لانچ طول می‌کشد؟' },
          { tag: 'li', content: 'آیا محتوا دوزبانه تحویل می‌شود؟' },
          { tag: 'li', content: 'پشتیبانی و آپدیت‌های محتوایی چگونه است؟' },
        ],
      },
      {
        id: 'cta',
        goal: 'خاتمه صفحه با دعوت به تماس.',
        heading: 'شروع پروژه در ارومیه',
        type: 'cta',
        summary: 'CTA به فرم/تلگرام/تماس.',
        elements: [
          { tag: 'h2', content: 'شروع پروژه در ارومیه' },
          { tag: 'p', content: 'تماس یا ارسال پیام تلگرام برای هماهنگی جلسه.' },
          { tag: 'button', content: 'رزرو جلسه' },
        ],
      },
    ],
  },
  {
    url: '/services',
    locale: 'fa',
    purpose: 'معرفی دسته‌بندی خدمات طراحی سایت، سئو، اپلیکیشن، ربات و اتوماسیون.',
    primaryKeyword: 'خدمات طراحی سایت و سئو',
    secondaryKeywords: ['پکیج طراحی سایت', 'پکیج سئو', 'اتوماسیون n8n', 'طراحی اپلیکیشن'],
    sections: [
      {
        id: 'hero',
        goal: 'خلاصه ارزش خدمات و CTA.',
        heading: 'خدمات ما برای رشد دیجیتال',
        type: 'hero',
        summary: 'H1، پاراگراف کوتاه، CTA به مشاوره.',
        elements: [
          { tag: 'h1', content: 'خدمات ما برای رشد دیجیتال' },
          { tag: 'p', content: 'طراحی سایت SSR، سئو، اپلیکیشن، ربات تلگرام و اتوماسیون n8n با داده‌های JSON.' },
          { tag: 'button', content: 'دریافت لیست قیمت' },
        ],
      },
      {
        id: 'web-design',
        goal: 'جزئیات طراحی سایت.',
        heading: 'طراحی سایت SSR',
        type: 'content',
        summary: 'بولت‌ها: شرکتی، فروشگاهی، لندینگ؛ RTL/LTR؛ فرم‌ها متصل به n8n.',
        elements: [
          { tag: 'h2', content: 'طراحی سایت SSR' },
          { tag: 'li', content: 'شرکتی، فروشگاهی، لندینگ' },
          { tag: 'li', content: 'پشتیبانی چندزبانه و RTL/LTR' },
          { tag: 'li', content: 'فرم‌ها و چت متصل به n8n/تلگرام' },
        ],
      },
      {
        id: 'seo',
        goal: 'توضیح سرویس سئو.',
        heading: 'سئو تکنیکال و محتوایی',
        type: 'content',
        summary: 'آنالیز فنی، schema، بهینه‌سازی CWV، سئوی لوکال.',
        elements: [
          { tag: 'h2', content: 'سئو تکنیکال و محتوایی' },
          { tag: 'li', content: 'Schema (FAQ, Article, LocalBusiness)' },
          { tag: 'li', content: 'Core Web Vitals و بهینه‌سازی سرعت' },
          { tag: 'li', content: 'کیورد تارگتینگ و محتوای JSON-first' },
        ],
      },
      {
        id: 'apps',
        goal: 'پوشش اپلیکیشن و ربات.',
        heading: 'طراحی اپلیکیشن و ربات تلگرام',
        type: 'content',
        summary: 'UI موبایل، ربات پشتیبانی/فروش، وب‌هوک به n8n.',
        elements: [
          { tag: 'h2', content: 'طراحی اپلیکیشن و ربات تلگرام' },
          { tag: 'li', content: 'تجربه موبایل‌اول' },
          { tag: 'li', content: 'ربات تلگرام برای سفارش و پشتیبانی' },
          { tag: 'li', content: 'یکپارچه با n8n، D1 یا KV' },
        ],
      },
      {
        id: 'automation',
        goal: 'توضیح اتوماسیون.',
        heading: 'اتوماسیون n8n و اینتگریشن',
        type: 'content',
        summary: 'Triggerهای فروش، اعلان، CRM/ERP، داشبورد.',
        elements: [
          { tag: 'h2', content: 'اتوماسیون n8n و اینتگریشن' },
          { tag: 'li', content: 'Triggerهای فروش و پیگیری لید' },
          { tag: 'li', content: 'اتصال به CRM/ERP از طریق API' },
          { tag: 'li', content: 'داشبورد گزارش سبک' },
        ],
      },
      {
        id: 'cta',
        goal: 'دعوت به انتخاب پکیج.',
        heading: 'پکیج مناسب خود را انتخاب کنید',
        type: 'cta',
        summary: 'CTA به تماس یا فرم قیمت‌گذاری.',
        elements: [
          { tag: 'h2', content: 'پکیج مناسب خود را انتخاب کنید' },
          { tag: 'button', content: 'شروع مشاوره' },
        ],
      },
    ],
  },
  {
    url: '/blog/sample-article',
    locale: 'fa',
    purpose: 'مقاله آموزشی برای جذب ترافیک ارگانیک و نمایش ساختار Article.',
    primaryKeyword: 'سئو تکنیکال Cloudflare Workers',
    secondaryKeywords: ['SSR با Hono', 'Core Web Vitals', 'اسکیما FAQ', 'n8n وب‌هوک'],
    sections: [
      {
        id: 'hero',
        goal: 'معرفی موضوع مقاله و خلاصه.',
        heading: 'راهنمای سئو تکنیکال در Cloudflare Workers',
        type: 'hero',
        summary: 'H1، خلاصه 2-3 خطی، متادیتا نویسنده/زمان.',
        elements: [
          { tag: 'h1', content: 'راهنمای سئو تکنیکال در Cloudflare Workers' },
          { tag: 'p', content: 'چطور SSR، کش، و اسکیما را برای رتبه بهتر پیاده کنیم.' },
        ],
      },
      {
        id: 'outline',
        goal: 'فهرست سریع سکشن‌های مقاله.',
        heading: 'آنچه در این مقاله می‌خوانید',
        type: 'list',
        summary: 'Anchor links برای بخش‌های اصلی.',
        elements: [
          { tag: 'h2', content: 'آنچه در این مقاله می‌خوانید' },
          { tag: 'li', content: 'راه‌اندازی SSR با Hono' },
          { tag: 'li', content: 'بهینه‌سازی LCP و کش' },
          { tag: 'li', content: 'اسکیما Article و FAQ' },
          { tag: 'li', content: 'اتصال n8n برای اعلان‌ها' },
        ],
      },
      {
        id: 'body',
        goal: 'محتوای اصلی مقاله.',
        heading: 'بدنه مقاله',
        type: 'content',
        summary: 'پاراگراف‌های H2/H3، کد بلاک، نکات سئو.',
        elements: [
          { tag: 'h2', content: 'راه‌اندازی SSR با Hono' },
          { tag: 'p', content: 'مثال روتینگ، استایل، و رندر سمت سرور.' },
          { tag: 'h2', content: 'بهینه‌سازی LCP و کش' },
          { tag: 'p', content: 'استفاده از Cache API و Edge TTL.' },
          { tag: 'h2', content: 'اسکیما Article و FAQ' },
          { tag: 'p', content: 'چگونگی تزریق JSON-LD در SSR.' },
          { tag: 'h2', content: 'اتصال n8n برای اعلان‌ها' },
          { tag: 'p', content: 'ارسال وب‌هوک‌ها و مانیتورینگ.' },
        ],
      },
      {
        id: 'cta',
        goal: 'تبدیل خواننده به لید.',
        heading: 'مشاوره سئو تکنیکال می‌خواهید؟',
        type: 'cta',
        summary: 'CTA به تماس یا فرم.',
        elements: [
          { tag: 'h2', content: 'مشاوره سئو تکنیکال می‌خواهید؟' },
          { tag: 'button', content: 'درخواست مشاوره' },
        ],
      },
      {
        id: 'faq',
        goal: 'پرسش‌های مرتبط با مقاله.',
        heading: 'سوالات متداول',
        type: 'faq',
        summary: '۲-۳ سوال درباره پیاده‌سازی.',
        elements: [
          { tag: 'h2', content: 'سوالات متداول' },
          { tag: 'li', content: 'چطور کش Cloudflare روی SSR اعمال می‌شود؟' },
          { tag: 'li', content: 'آیا Article Schema برای چند زبان ممکن است؟' },
        ],
      },
    ],
  },
];
