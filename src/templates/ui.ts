import type { FAQ } from '../content/seoPages';

type HeroProps = {
  title: string;
  kicker?: string;
  intro?: string;
  bullets?: string[];
  cta?: { label: string; href: string; note?: string };
};

type SectionBlock = {
  id: string;
  title: string;
  description?: string;
};

export const renderHero = ({ title, kicker, intro, bullets, cta }: HeroProps): string => {
  const list = bullets?.length
    ? `<ul class="pill-list">${bullets
        .map((item) => `<li class="pill">${item}</li>`)
        .join('')}</ul>`
    : '';
  const ctaMarkup = cta
    ? `<div class="cta-actions"><a class="btn" href="${cta.href}">${cta.label}</a>${
        cta.note ? `<span class="cta-note">${cta.note}</span>` : ''
      }</div>`
    : '';

  return `
  <section class="hero-shell">
    <div class="hero-copy">
      ${kicker ? `<p class="eyebrow">${kicker}</p>` : ''}
      <h1>${title}</h1>
      ${intro ? `<p class="lead">${intro}</p>` : ''}
      ${ctaMarkup}
    </div>
    ${list}
  </section>
  `;
};

export const renderColumns = (title: string, paragraphs: string[]): string => {
  const cols = paragraphs
    .map((p) => `<p class="body">${p}</p>`)
    .join('');
  return `
    <section class="section-shell" aria-labelledby="${slugify(title)}">
      <div class="section-header">
        <h2 id="${slugify(title)}">${title}</h2>
      </div>
      <div class="grid two">${cols}</div>
    </section>
  `;
};

export const renderBenefits = (title: string, items: string[]): string => `
  <section class="section-shell" aria-labelledby="${slugify(title)}">
    <div class="section-header">
      <h2 id="${slugify(title)}">${title}</h2>
      <p class="muted">${items.length} ${items.length > 1 ? 'items' : 'item'}</p>
    </div>
    <ul class="card-grid">
      ${items.map((item) => `<li class="card">${item}</li>`).join('')}
    </ul>
  </section>
`;

export const renderFeatureList = (title: string, features: string[]): string => `
  <section class="section-shell" aria-labelledby="${slugify(title)}">
    <div class="section-header">
      <h2 id="${slugify(title)}">${title}</h2>
      <p class="muted">جزئیات کلیدی</p>
    </div>
    <div class="grid three">
      ${features.map((feat) => `<article class="card soft"><h3 class="card-title">${feat}</h3></article>`).join('')}
    </div>
  </section>
`;

export const renderFAQ = (title: string, faqs: FAQ[]): string => `
  <section class="section-shell" aria-labelledby="${slugify(title)}">
    <div class="section-header">
      <h2 id="${slugify(title)}">${title}</h2>
      <p class="muted">پاسخ به پرسش‌های رایج</p>
    </div>
    <dl class="faq-list">
      ${faqs
        .map(
          (faq) => `
            <div class="faq-item">
              <dt>${faq.question}</dt>
              <dd>${faq.answer}</dd>
            </div>`
        )
        .join('')}
    </dl>
  </section>
`;

export const renderCTA = (cta: { label: string; href: string; note?: string }, title: string, copy: string): string => `
  <section class="cta-shell" aria-labelledby="${slugify(title)}">
    <div>
      <p class="eyebrow">${title}</p>
      <h2>${copy}</h2>
      ${cta.note ? `<p class="muted">${cta.note}</p>` : ''}
    </div>
    <a class="btn" href="${cta.href}">${cta.label}</a>
  </section>
`;

export const renderServiceGrid = (title: string, blocks: SectionBlock[]): string => `
  <section class="section-shell" aria-labelledby="${slugify(title)}">
    <div class="section-header">
      <h2 id="${slugify(title)}">${title}</h2>
      <p class="muted">طراحی سایت، سئو، اپ و اتوماسیون</p>
    </div>
    <div class="grid three">
      ${blocks
        .map(
          (block) => `
          <article class="card bordered" id="${block.id}">
            <h3 class="card-title">${block.title}</h3>
            ${block.description ? `<p class="body">${block.description}</p>` : ''}
          </article>`
        )
        .join('')}
    </div>
  </section>
`;

export const renderMetadataList = (title: string, primary: string, secondary: string[]): string => `
  <section class="section-shell" aria-labelledby="${slugify(title)}">
    <div class="section-header">
      <h2 id="${slugify(title)}">${title}</h2>
      <p class="muted">کلمات کلیدی هدف</p>
    </div>
    <div class="pill-rows">
      <span class="pill accent">${primary}</span>
      ${secondary.map((key) => `<span class="pill">${key}</span>`).join('')}
    </div>
  </section>
`;

const slugify = (value: string) => value.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF]+/g, '-');
