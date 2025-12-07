import { navigation, localesMeta, type Locale } from '../content/siteContent';

export type LayoutProps = {
  locale: Locale;
  meta: { title: string; description: string };
  content: string;
  structuredData?: object[];
  stylesheets?: string[];
  hideDefaultChrome?: boolean;
};

export function renderLayout(props: LayoutProps): string {
  const { locale, meta, content, structuredData = [], stylesheets = [], hideDefaultChrome = false } = props;
  const { dir, lang } = localesMeta[locale];
  const nav = navigation[locale];

  const cssLinks = ['/styles/base.css', ...stylesheets]
    .map((href) => `<link rel="stylesheet" href="${href}" />`)
    .join('\n');

  const jsonLd = structuredData
    .map((entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`)
    .join('\n');

  const defaultHeader = hideDefaultChrome
    ? ''
    : `<header>
      <div style="max-width:1100px;margin:0 auto;padding:1rem 1.5rem;display:flex;gap:1rem;align-items:center;">
        <a class="nav-brand" href="/">Webiyar</a>
        <nav>
          ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
        </nav>
        <div class="nav-actions">
          <a class="btn secondary" href="/services">${locale === 'fa' ? 'مشاهده خدمات' : 'View services'}</a>
          <a class="btn" href="/contact">${locale === 'fa' ? 'درخواست مشاوره' : 'Book a call'}</a>
        </div>
      </div>
    </header>`;

  const defaultFooter = hideDefaultChrome
    ? ''
    : `<footer>
      <div class="inner">
        <div class="muted">© ${new Date().getFullYear()} Webiyar • Cloudflare Workers • JSON-first</div>
        <div class="muted">${locale === 'fa' ? 'طراحی، سئو، اتوماسیون n8n، ربات تلگرام' : 'Design, SEO, n8n automation, Telegram bot'}</div>
      </div>
    </footer>`;

  return `<!DOCTYPE html>
<html dir="${dir}" lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    ${cssLinks}
    ${jsonLd}
  </head>
  <body>
    ${defaultHeader}
    <main>${content}</main>
    ${defaultFooter}
  </body>
</html>`;
}
