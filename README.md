# Webiyar

نمونه معماری SSR با Cloudflare Workers برای وب‌سایت طراحی سایت، سئو، اتوماسیون n8n و ربات تلگرام. محتوای صفحات به‌صورت JSON/TypeScript نگه‌داری می‌شود تا تغییرات آینده ساده باشد و چندزبانه (FA/EN) پشتیبانی شود.

## ویژگی‌ها
- SSR با [Hono](https://hono.dev/) و TypeScript
- محتوای ساخت‌یافته JSON-first برای صفحات اصلی، خدمات، صفحات لوکال `/city/:city/web-design` و مقاله نمونه
- چندزبانه (fa, en) با انتخاب بر اساس `?lang` یا `Accept-Language`
- آماده تزریق اسکیماهای SEO (Organization, FAQ, LocalBusiness)
- قابل اتصال به n8n، ربات تلگرام و پایگاه داده D1/KV برای لید
- استایل مینیمال، ریسپانسیو، semantic HTML با کلاس‌های مدرن برای وایرفریم مرحله ۴
- داشبورد مدیریت محتوا با CSS مجزا و فرم ساخت JSON برای API/n8n/تلگرام
- API CRUD برای بلاگ روی D1 (GET/POST/PUT/DELETE) + ۵ اسکریپت curl آماده در `docs/curl`

## اجرا
```bash
npm install
npm run dev     # wrangler dev src/index.ts
npm run deploy  # انتشار به Cloudflare Workers
```

## ساختار پوشه
```
src/
  content/      # متون و دیتاهای JSON/TS صفحات
    siteContent.ts  # ناوبری، هوم، خدمات و لندینگ‌های لوکال برای رندر SSR
    wireframes.ts   # وایرفریم متنی مرحله ۲ به‌صورت JSON-first
    seoPages.ts     # محتوای کامل مرحله ۳ (H1، پاراگراف، مزایا، FAQ، متا) برای خانه، خدمات، لندینگ ارومیه، مقاله فنی
  templates/    # لایه HTML و رندر
    ui.ts           # کامپوننت‌های UI مینیمال (Hero، Grid، FAQ، CTA) برای اسکلت مرحله ۴
    dashboard.ts    # داشبورد مدیریت محتوا و فرم JSON
  utils/        # i18n و schema helpers
  styles/       # CSS ماژولار برای پایه و داشبورد (به‌صورت متن برای SSR)
api/            # توابع CRUD روی D1 برای بلاگ
docs/curl/      # ۵ اسکریپت curl برای تست سریع API
  index.ts      # ورودی Worker و روت‌ها
```

## راهنمای UI (مرحله ۴)
- پالت رنگ: پس‌زمینه تیره `#0b1221`، پنل `#0f172a`، اکسنت اصلی `#5dd6c9`، اکسنت ثانویه `#90e0ef`، متن `#e5e7eb`، متن ساب `#cbd5e1`، بوردر `#1e293b`.
- تایپوگرافی: فونت «Inter»، هرم سلسله‌مراتب با `h1` (کلید)، `h2` در سکشن‌ها، `.eyebrow` برای برچسب‌های کوچک و `.lead` برای توضیح کوتاه. فاصله خطوط 1.7 برای پاراگراف‌ها.
- رفتار ریسپانسیو: گرید‌های `auto-fit` برای دو/سه ستونه، دکمه‌ها و CTAها با فلکس wrap، ناوبری و CTA در موبایل روی چند خط. کلاس‌های `.hero-shell`، `.section-shell`، `.card-grid`، `.pill-list` و `.faq-list` برای چیدمان.
- صفحات نمونه مرحله ۴: `/`، `/services`، `/city/orumiyeh/web-design` با نسخه غنی‌شده لوکال، و `/blog/technical-seo` برای مقاله فنی.
- **کلاینت اکسپریینس جدید:** صفحه `/client` با استایل اختصاصی (`/styles/app.css`) و محتوای JSON در `src/content/clientExperience.ts` شامل هرو، آمار، سرویس‌ها، فرآیند، پلن قیمت، استک ابزار، اتوماسیون n8n/تلگرام و تماس. دیزاین تمام عرض، شفاف برای ارائه به مشتری.

## تنظیمات زبان و داده
- مقدار پیش‌فرض زبان از `DEFAULT_LOCALE` در `wrangler.toml` خوانده می‌شود.
- پارامتر `?lang=fa|en` یا هدر `Accept-Language` زبان را تعیین می‌کند.
- برای افزودن شهر جدید، کافی است در مسیر `/city/:city/web-design` نام شهر لاتین را در URL فراخوانی کنید؛ متن فارسی/انگلیسی در `siteContent.ts` به‌صورت داینامیک تولید می‌شود.
- وایرفریم‌های مرحله ۲ برای صفحات اصلی (خانه، خدمات، لندینگ لوکال ارومیه، نمونه مقاله) در `src/content/wireframes.ts` نگه‌داری شده‌اند.
- محتوای مرحله ۳ با H1، پاراگراف، مزایا، FAQ و متا در `src/content/seoPages.ts` قرار دارد تا مستقیماً برای SSR یا اتوماسیون (مثلاً n8n، ربات تلگرام) مصرف شود.

## داشبورد و API
- CSS پایه در `/styles/base.css` و CSS مخصوص داشبورد در `/styles/dashboard.css` سرو می‌شود.
- صفحه `/dashboard` یک نمای سریع از اندپوینت‌ها و فرم تولید JSON دارد.
- اسکریپت‌های آماده curl در `docs/curl/*.sh` مسیرهای CRUD را پوشش می‌دهند: list، get، create، update، delete.
  - بلاگ: `list-posts.sh`، `get-post.sh`، `create-post.sh`، `update-post.sh`، `delete-post.sh`
  - نمونه‌کار: `list-projects.sh`، `get-project.sh`، `create-project.sh`، `update-project.sh`، `publish-project.sh`، `delete-project.sh`
- اندپوینت‌های نمونه‌کار (Projects API) شامل GET لیست/جزئیات برای فرانت، POST/PUT/DELETE برای بک‌اند و POST `/publish` برای انتشار سریع است.
- مدل دیتابیس پیشنهادی D1:
  ```sql
  CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT,
    body TEXT NOT NULL,
    locale TEXT DEFAULT 'fa',
    status TEXT DEFAULT 'draft',
    tags TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    description TEXT,
    category TEXT,
    thumbnail TEXT,
    link TEXT,
    locale TEXT DEFAULT 'fa',
    status TEXT DEFAULT 'draft',
    tags TEXT,
    featured INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  ```
