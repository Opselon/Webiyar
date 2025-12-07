import { renderLayout } from './layout';
import type { Locale } from '../content/siteContent';

export function renderDashboard(locale: Locale) {
  const title = locale === 'fa' ? 'داشبورد محتوا' : 'Content dashboard';
  const description =
    locale === 'fa'
      ? 'مدیریت بلاگ، محتوا و اتصال به D1، n8n و ربات تلگرام.'
      : 'Manage blog content with D1, n8n, and Telegram bot integrations.';

  const endpointLabel = (method: string, path: string) =>
    `<div class="endpoint"><span class="method ${method.toLowerCase()}">${method}</span><code>${path}</code></div>`;

  const content = `
    <section class="section-shell">
      <div class="section-header">
        <div>
          <p class="eyebrow">Dashboard</p>
          <h1>${title}</h1>
          <p class="body">${description}</p>
        </div>
        <div class="pill-list">
          <span class="pill accent">D1</span>
          <span class="pill accent">n8n</span>
          <span class="pill accent">Telegram</span>
        </div>
      </div>
      <div class="dashboard panels">
        <div class="panel">
          <h3>${locale === 'fa' ? 'محتوا' : 'Content'}</h3>
          <div class="metric">D1 posts</div>
          <p class="muted">${locale === 'fa' ? 'CRUD کامل روی جدول posts با JSON.' : 'Full CRUD on posts table via JSON.'}</p>
        </div>
        <div class="panel">
          <h3>${locale === 'fa' ? 'اتوماسیون' : 'Automation'}</h3>
          <div class="metric">n8n</div>
          <p class="muted">${locale === 'fa' ? 'webhook آماده برای انتشار و اعلان تلگرام.' : 'Webhooks ready for publish + Telegram alerts.'}</p>
        </div>
        <div class="panel">
          <h3>${locale === 'fa' ? 'چندزبانه' : 'Multilingual'}</h3>
          <div class="metric">fa/en</div>
          <p class="muted">${locale === 'fa' ? 'JSON-first و SSR برای همه لندینگ‌ها.' : 'JSON-first SSR across all landings.'}</p>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>${locale === 'fa' ? 'API مدیریت محتوا' : 'Content management API'}</h2>
        <p class="muted">${locale === 'fa' ? 'ورودی/خروجی JSON، مناسب curl و n8n.' : 'JSON in/out for curl and n8n.'}</p>
      </div>
      <div class="dashboard cards">
        <div class="panel">
          <div class="card-title">${endpointLabel('GET', '/api/posts')}</div>
          <p class="note">${locale === 'fa' ? 'لیست آخرین پست‌ها' : 'List latest posts'}</p>
        </div>
        <div class="panel">
          <div class="card-title">${endpointLabel('GET', '/api/posts/:idOrSlug')}</div>
          <p class="note">${locale === 'fa' ? 'دریافت جزئیات' : 'Fetch details'}</p>
        </div>
        <div class="panel">
          <div class="card-title">${endpointLabel('POST', '/api/posts')}</div>
          <p class="note">${locale === 'fa' ? 'ایجاد محتوا' : 'Create content'}</p>
        </div>
        <div class="panel">
          <div class="card-title">${endpointLabel('PUT', '/api/posts/:idOrSlug')}</div>
          <p class="note">${locale === 'fa' ? 'ویرایش' : 'Update'}</p>
        </div>
        <div class="panel">
          <div class="card-title">${endpointLabel('DELETE', '/api/posts/:idOrSlug')}</div>
          <p class="note">${locale === 'fa' ? 'حذف' : 'Delete'}</p>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>${locale === 'fa' ? 'فرم سریع ایجاد پست' : 'Quick create form'}</h2>
        <p class="muted">${locale === 'fa' ? 'خروجی JSON برای ارسال به API یا n8n' : 'JSON payload ready for API or n8n webhook'}</p>
      </div>
      <div class="dashboard">
        <form id="create-post-form">
          <div class="grid two">
            <label>Slug<input name="slug" placeholder="technical-seo" required /></label>
            <label>${locale === 'fa' ? 'عنوان' : 'Title'}<input name="title" placeholder="${locale === 'fa' ? 'عنوان مقاله' : 'Post title'}" required /></label>
          </div>
          <div class="grid two">
            <label>${locale === 'fa' ? 'زبان' : 'Locale'}
              <select name="locale">
                <option value="fa">fa</option>
                <option value="en">en</option>
              </select>
            </label>
            <label>Status
              <select name="status">
                <option value="draft">draft</option>
                <option value="published">published</option>
              </select>
            </label>
          </div>
          <label>${locale === 'fa' ? 'خلاصه' : 'Excerpt'}<textarea name="excerpt" placeholder="${locale === 'fa' ? 'توضیح کوتاه' : 'Short summary'}"></textarea></label>
          <label>Body<textarea name="body" placeholder="${locale === 'fa' ? 'متن اصلی' : 'Main content'}"></textarea></label>
          <label>${locale === 'fa' ? 'برچسب‌ها (کامای انگلیسی)' : 'Tags (comma separated)'}<input name="tags" placeholder="seo,design,workers" /></label>
          <div class="flex">
            <button class="btn" type="submit">${locale === 'fa' ? 'تبدیل به JSON' : 'Generate JSON'}</button>
            <span class="note">${locale === 'fa' ? 'از curl یا n8n ارسال کنید.' : 'Send with curl or n8n webhook.'}</span>
          </div>
        </form>
        <pre id="json-preview" class="panel" aria-live="polite"></pre>
      </div>
    </section>

    <section class="section-shell">
      <div class="section-header">
        <h2>${locale === 'fa' ? 'اتصال D1' : 'D1 wiring'}</h2>
        <p class="muted">${locale === 'fa' ? 'قبل از دیپلوی، جدول posts را بساز.' : 'Create the posts table before deploy.'}</p>
      </div>
      <div class="dashboard">
        <table class="table">
          <thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td>id</td><td>integer primary key</td><td>${locale === 'fa' ? 'شناسه خودکار' : 'Auto id'}</td></tr>
            <tr><td>slug</td><td>text unique</td><td>${locale === 'fa' ? 'نامک یکتا' : 'Unique slug'}</td></tr>
            <tr><td>title</td><td>text</td><td>${locale === 'fa' ? 'عنوان' : 'Title'}</td></tr>
            <tr><td>excerpt</td><td>text</td><td>${locale === 'fa' ? 'خلاصه' : 'Excerpt'}</td></tr>
            <tr><td>body</td><td>text</td><td>${locale === 'fa' ? 'متن مقاله' : 'Body'}</td></tr>
            <tr><td>locale</td><td>text</td><td>${locale === 'fa' ? 'fa/en' : 'fa/en'}</td></tr>
            <tr><td>status</td><td>text</td><td>${locale === 'fa' ? 'draft/published' : 'draft/published'}</td></tr>
            <tr><td>tags</td><td>text</td><td>${locale === 'fa' ? 'JSON array' : 'JSON array'}</td></tr>
            <tr><td>created_at</td><td>datetime</td><td>${locale === 'fa' ? 'auto timestamp' : 'auto timestamp'}</td></tr>
            <tr><td>updated_at</td><td>datetime</td><td>${locale === 'fa' ? 'auto timestamp' : 'auto timestamp'}</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <script>
      const form = document.getElementById('create-post-form');
      const preview = document.getElementById('json-preview');
      if (form && preview) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const data = new FormData(form);
          const tags = (data.get('tags') || '').toString().split(',').map((t) => t.trim()).filter(Boolean);
          const payload = {
            slug: data.get('slug'),
            title: data.get('title'),
            locale: data.get('locale') || 'fa',
            status: data.get('status') || 'draft',
            excerpt: data.get('excerpt') || '',
            body: data.get('body') || '',
            tags,
          };
          preview.textContent = JSON.stringify(payload, null, 2);
        });
      }
    </script>
  `;

  return renderLayout({
    locale,
    meta: {
      title: locale === 'fa' ? 'داشبورد مدیریت محتوا و بلاگ' : 'Content & blog dashboard',
      description:
        locale === 'fa'
          ? 'CRUD روی D1، آماده برای curl، n8n و ربات تلگرام با رابط مینیمال.'
          : 'CRUD on D1, ready for curl, n8n, and Telegram bot with a minimal UI.',
    },
    content,
    stylesheets: ['/styles/dashboard.css'],
  });
}
