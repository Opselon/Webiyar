import { renderLayout } from './layout';
import { buildBaseSchemas, buildFAQSchema } from '../utils/schema';
import { clientNavigation, getClientContent, type ClientLocaleContent } from '../content/clientExperience';
import type { Locale } from '../content/siteContent';

export function renderClientExperience(locale: Locale): string {
  const content = getClientContent(locale);
  const schemas = [
    buildBaseSchemas(locale),
    buildFAQSchema(
      locale,
      content.process.map((step) => ({ q: step.title, a: step.description })),
    ),
  ];

  const body = [
    renderClientNav(locale, content),
    '<div class="client-shell">',
    renderHero(content),
    renderStats(content),
    renderServices(content, locale),
    renderProcess(content, locale),
    renderPricing(content, locale),
    renderTestimonials(content, locale),
    renderStack(content, locale),
    renderAutomation(content, locale),
    renderContact(content, locale),
    renderKeywords(content, locale),
    '</div>',
    renderFooter(content, locale),
  ].join('');

  return renderLayout({
    locale,
    meta: content.meta,
    content: body,
    structuredData: schemas,
    stylesheets: ['/styles/app.css'],
    hideDefaultChrome: true,
  });
}

function renderClientNav(locale: Locale, content: ClientLocaleContent): string {
  const navItems = clientNavigation[locale];
  const langToggle =
    locale === 'fa'
      ? `<span class="lang-toggle">FA / <a href="?lang=en">EN</a></span>`
      : `<span class="lang-toggle">EN / <a href="?lang=fa">FA</a></span>`;
  return `
    <header class="client-nav">
      <div class="inner">
        <a class="brand" href="/client"><span class="dot"></span>Webiyar</a>
        <nav>
          ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
        </nav>
        <div class="actions">
          <a class="btn-ghost" href="/services">${locale === 'fa' ? 'خدمات اصلی' : 'Services'}</a>
          <a class="btn-solid" href="#contact">${locale === 'fa' ? 'درخواست پروپوزال' : 'Request proposal'}</a>
          ${langToggle}
        </div>
      </div>
    </header>
  `;
}

function renderHero(content: ClientLocaleContent): string {
  const badges = content.hero.badges
    .map((badge) => `<span class="badge"><span class="dot"></span>${badge}</span>`)
    .join('');
  return `
    <section class="hero-grid" id="top">
      <div>
        <div class="eyebrow">${content.hero.eyebrow}</div>
        <h1>${content.hero.title}</h1>
        <p class="lead">${content.hero.lead}</p>
        <div class="badges">${badges}</div>
        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:1rem;">
          <a class="btn-solid" href="${content.hero.primaryCta.href}">${content.hero.primaryCta.label}</a>
          <a class="btn-outline" href="${content.hero.secondaryCta.href}">${content.hero.secondaryCta.label}</a>
        </div>
        <p class="footnote">${content.hero.note}</p>
      </div>
      <div class="glass">
        <div class="section-header" style="margin-bottom:0.5rem;">
          <h2>${content.meta.title}</h2>
          <p class="hint">${content.meta.description}</p>
        </div>
        <div class="grid-auto">
          <div class="metric-card">
            <p class="label">JSON-first</p>
            <p class="value">D1 / KV</p>
            <p class="desc">Structured content for SEO + automation</p>
          </div>
          <div class="metric-card">
            <p class="label">Automation</p>
            <p class="value">n8n + Bot</p>
            <p class="desc">Lead alerts, publishing, backups</p>
          </div>
          <div class="metric-card">
            <p class="label">Design</p>
            <p class="value">UI/UX</p>
            <p class="desc">RTL/LTR kits + responsive layout</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStats(content: ClientLocaleContent): string {
  const cards = content.stats
    .map(
      (stat) => `
      <div class="stat-card">
        <h3>${stat.value}</h3>
        <strong>${stat.label}</strong>
        <p>${stat.description}</p>
      </div>`
    )
    .join('');
  return `
    <section class="section" aria-labelledby="stats">
      <div class="section-header">
        <h2 id="stats">${content.meta.title}</h2>
        <p class="hint">${content.hero.note}</p>
      </div>
      <div class="stats-grid">${cards}</div>
    </section>
  `;
}

function renderServices(content: ClientLocaleContent, locale: Locale): string {
  const cards = content.services
    .map(
      (service) => `
      <article class="service-card" id="${service.id}">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="chips">${service.chips.map((chip) => `<span class="chip">${chip}</span>`).join('')}</div>
        ${service.cta ? `<a class="card-cta" href="${service.cta.href}">${service.cta.label} →</a>` : ''}
      </article>`
    )
    .join('');
  return `
    <section class="section" id="services" aria-labelledby="services-title">
      <div class="section-header">
        <h2 id="services-title">${locale === 'fa' ? 'سرویس‌های کلاینت' : 'Client services'}</h2>
        <p class="hint">${locale === 'fa' ? 'وب، سئو، اپ، اتوماسیون' : 'Web, SEO, app, automation'}</p>
      </div>
      <div class="service-grid">${cards}</div>
    </section>
  `;
}

function renderProcess(content: ClientLocaleContent, locale: Locale): string {
  const steps = content.process
    .map(
      (step) => `
      <div class="timeline-item" id="${step.id}">
        <span class="dot" aria-hidden="true"></span>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
        <ul class="checklist">
          ${step.deliverables
            .map((item) => `<li><span class="icon">✓</span><span>${item}</span></li>`)
            .join('')}
        </ul>
      </div>`
    )
    .join('');
  return `
    <section class="section" id="process" aria-labelledby="process-title">
      <div class="section-header">
        <h2 id="process-title">${locale === 'fa' ? 'فرآیند همکاری' : 'Engagement process'}</h2>
        <p class="hint">${locale === 'fa' ? 'شفاف، زمان‌بندی‌شده، قابل اندازه‌گیری' : 'Transparent, timed, measurable'}</p>
      </div>
      <div class="timeline">${steps}</div>
    </section>
  `;
}

function renderPricing(content: ClientLocaleContent, locale: Locale): string {
  const cards = content.pricing
    .map(
      (plan) => `
      <article class="price-card ${plan.highlighted ? 'highlight' : ''}" id="pricing-${plan.name}">
        <h3>${plan.name}</h3>
        <p class="value">${plan.value}</p>
        <p class="meta">${plan.cadence} • ${plan.meta}</p>
        <ul class="features">
          ${plan.features.map((feat) => `<li>• ${feat}</li>`).join('')}
        </ul>
        <a class="btn-solid" href="#contact">${locale === 'fa' ? 'شروع' : 'Start'}</a>
      </article>`
    )
    .join('');
  const title = locale === 'fa' ? 'پلن‌های رشد' : 'Growth plans';
  const hint = locale === 'fa' ? 'قابل سفارشی‌سازی برای بازار داخلی و بین‌المللی' : 'Customizable for local and export markets';
  return `
    <section class="section" id="pricing" aria-labelledby="pricing-title">
      <div class="section-header">
        <h2 id="pricing-title">${title}</h2>
        <p class="hint">${hint}</p>
      </div>
      <div class="pricing-grid">${cards}</div>
    </section>
  `;
}

function renderTestimonials(content: ClientLocaleContent, locale: Locale): string {
  const cards = content.testimonials
    .map(
      (item) => `
      <figure class="testimonial">
        <blockquote class="quote">“${item.quote}”</blockquote>
        <figcaption class="author">${item.author} — ${item.role}</figcaption>
        <div class="tag">${item.metric}</div>
      </figure>`
    )
    .join('');
  return `
    <section class="section" aria-labelledby="voice">
      <div class="section-header">
        <h2 id="voice">${locale === 'fa' ? 'صدای مشتری' : 'Client voice'}</h2>
        <p class="hint">${locale === 'fa' ? 'پروژه‌های واقعی با نتایج قابل اندازه‌گیری' : 'Real projects with measurable outcomes'}</p>
      </div>
      <div class="testimonial-grid">${cards}</div>
    </section>
  `;
}

function renderStack(content: ClientLocaleContent, locale: Locale): string {
  const cols = content.stack
    .map(
      (stack) => `
      <div class="featured-card">
        <p class="accented">${stack.title}</p>
        <div class="grid">${stack.items.map((item) => `<span class="pill">${item}</span>`).join('')}</div>
      </div>`
    )
    .join('');
  return `
    <section class="section" aria-labelledby="stack">
      <div class="section-header">
        <h2 id="stack">${locale === 'fa' ? 'استک و ابزار' : 'Stack & tooling'}</h2>
        <p class="hint">${locale === 'fa' ? 'کاملاً JSON-first + Automation' : 'Fully JSON-first + automation'}</p>
      </div>
      <div class="grid two">${cols}</div>
    </section>
  `;
}

function renderAutomation(content: ClientLocaleContent, locale: Locale): string {
  const list = content.automation.points
    .map((item) => `<li><span class="icon">✓</span><span>${item}</span></li>`)
    .join('');
  return `
    <section class="section" id="automation" aria-labelledby="automation-title">
      <div class="section-header">
        <h2 id="automation-title">${content.automation.title}</h2>
        <p class="hint">${content.automation.description}</p>
      </div>
      <div class="split">
        <div>
          <ul class="checklist">${list}</ul>
        </div>
        <div class="callout">
          <p style="margin-top:0">${locale === 'fa' ? 'نمونه فلو' : 'Sample flow'}</p>
          <div class="code-block">
            curl -X POST https://api.example.com/hooks/lead \\\n            -H "content-type: application/json" \\\n            -d '{"city":"orumiyeh","locale":"fa","source":"landing"}'
          </div>
          <p class="footnote">${
            locale === 'fa'
              ? 'Webhook برای سینک لید به Telegram و CRM + ثبت در D1'
              : 'Webhook to sync leads to Telegram, CRM, and persist in D1'
          }</p>
        </div>
      </div>
    </section>
  `;
}

function renderContact(content: ClientLocaleContent, locale: Locale): string {
  const bullets = content.contact.bullets
    .map((item) => `<li><span class="icon">✓</span><span>${item}</span></li>`)
    .join('');
  return `
    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="section-header">
        <h2 id="contact-title">${content.contact.title}</h2>
        <p class="hint">${
          locale === 'fa'
            ? 'جلسه آنلاین یا حضوری؛ پوشش ایران و بین‌المللی'
            : 'Online or on-site; covering local and international teams'
        }</p>
      </div>
      <div class="dual">
        <div>
          <ul class="checklist">${bullets}</ul>
          <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.8rem;">
            <a class="btn-solid" href="${content.contact.primaryCta.href}">${content.contact.primaryCta.label}</a>
            <a class="btn-ghost" href="${content.contact.secondaryCta.href}">${content.contact.secondaryCta.label}</a>
          </div>
        </div>
        <div class="card-stack">
          <div class="callout">
            ${
              locale === 'fa'
                ? 'برای فرم تماس، وبهوک n8n یا API D1 آماده است؛ داده‌ها JSON-first ذخیره می‌شوند.'
                : 'Contact form can push to n8n webhook or D1 API; everything stored JSON-first.'
            }
          </div>
          <div class="table-wrapper">
            <table class="table">
              <thead>
                <tr><th>${locale === 'fa' ? 'اندپوینت' : 'Endpoint'}</th><th>${
    locale === 'fa' ? 'کاربرد' : 'Usage'
  }</th></tr>
              </thead>
              <tbody>
                <tr><td>/api/posts</td><td>${locale === 'fa' ? 'مدیریت بلاگ' : 'Blog management'}</td></tr>
                <tr><td>/api/projects</td><td>${
                  locale === 'fa' ? 'نمونه‌کار و کیس‌استادی' : 'Portfolio and case studies'
                }</td></tr>
                <tr><td>/api/projects/:id/publish</td><td>${
                  locale === 'fa' ? 'انتشار سریع' : 'Quick publish'
                }</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderKeywords(content: ClientLocaleContent, locale: Locale): string {
  const tags = content.keywords.map((k) => `<span class="tag">${k}</span>`).join('');
  return `
    <section class="section" aria-labelledby="keywords">
      <div class="section-header">
        <h2 id="keywords">${locale === 'fa' ? 'کلمات کلیدی هدف' : 'Target keywords'}</h2>
        <p class="hint">${locale === 'fa' ? 'بدون کیورد استافینگ، آماده اسکیما' : 'Schema-ready without stuffing'}</p>
      </div>
      <div class="tag-list">${tags}</div>
    </section>
  `;
}

function renderFooter(content: ClientLocaleContent, locale: Locale): string {
  return `
    <footer class="footer">
      <div class="title">Webiyar · Cloudflare Workers</div>
      <div class="grid">
        <div>
          <p class="footnote">${content.meta.description}</p>
        </div>
        <div class="footnote">
          ${
            locale === 'fa'
              ? 'اتصال به HubSpot، Zoho، Slack و هر ابزار n8n-friendly'
              : 'Connect to HubSpot, Zoho, Slack, or any n8n-friendly tool'
          }
        </div>
        <div class="footnote">
          ${
            locale === 'fa'
              ? 'لینک‌های سریع: لندینگ لوکال، بلاگ فنی، داشبورد محتوا'
              : 'Quick links: local landing, technical blog, content dashboard'
          }
        </div>
      </div>
      <div class="footnote">© ${new Date().getFullYear()} Webiyar · JSON-first multi-lingual experiences</div>
    </footer>
  `;
}
