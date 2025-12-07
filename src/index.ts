import { Hono } from 'hono';
import { renderArticle, renderCity, renderHome, renderServices } from './templates/pages';
import { renderClientExperience } from './templates/client';
import { renderDashboard } from './templates/dashboard';
import {
  createPost,
  deletePost,
  getPost,
  listPosts,
  parseBody,
  requireJson,
  okResponse,
  errorResponse,
  updatePost,
  type PostInput,
} from './api/blog';
import {
  createProject,
  deleteProject,
  getProject,
  listProjects,
  setProjectStatus,
  updateProject,
  type ProjectInput,
} from './api/portfolio';
import { baseCss } from './styles/baseCss';
import { dashboardCss } from './styles/dashboardCss';
import { appCss } from './styles/appCss';
import { pickLocale } from './utils/locale';
import type { Locale } from './content/siteContent';

export type Bindings = {
  DB: D1Database;
  DEFAULT_LOCALE?: Locale;
};

const app = new Hono<{ Bindings: Bindings; Variables: { locale: Locale } }>();

app.use('*', async (c, next) => {
  const queryLang = c.req.query('lang');
  const acceptLanguage = c.req.header('accept-language');
  const fallback = (c.env.DEFAULT_LOCALE as Locale) || 'fa';
  const locale = pickLocale(queryLang, acceptLanguage, fallback);
  c.set('locale', locale);
  await next();
});

app.get('/styles/base.css', (c) => c.text(baseCss, 200, { 'Content-Type': 'text/css' }));
app.get('/styles/dashboard.css', (c) => c.text(dashboardCss, 200, { 'Content-Type': 'text/css' }));
app.get('/styles/app.css', (c) => c.text(appCss, 200, { 'Content-Type': 'text/css' }));

app.get('/', (c) => {
  const locale = c.get('locale');
  return c.html(renderHome(locale));
});

app.get('/services', (c) => {
  const locale = c.get('locale');
  return c.html(renderServices(locale));
});

app.get('/dashboard', (c) => {
  const locale = c.get('locale');
  return c.html(renderDashboard(locale));
});

app.get('/client', (c) => {
  const locale = c.get('locale');
  return c.html(renderClientExperience(locale));
});

app.get('/blog/technical-seo', (c) => {
  const locale = c.get('locale');
  return c.html(renderArticle(locale));
});

app.get('/city/:city/web-design', (c) => {
  const locale = c.get('locale');
  const city = c.req.param('city');
  return c.html(renderCity(locale, city));
});

app.get('/api/projects', async (c) => {
  const projects = await listProjects(c.env.DB);
  return okResponse(projects);
});

app.get('/api/projects/:idOrSlug', async (c) => {
  const idOrSlug = c.req.param('idOrSlug');
  const project = await getProject(c.env.DB, idOrSlug);
  if (!project) return errorResponse('Not found', 404);
  return okResponse(project);
});

app.post('/api/projects', async (c) => {
  if (!requireJson(c.req.raw)) return errorResponse('Use application/json', 415);
  const payload = await parseBody<ProjectInput>(c.req.raw);
  if (!payload.slug || !payload.title || !payload.summary) return errorResponse('slug, title, summary are required');
  const created = await createProject(c.env.DB, payload);
  return okResponse(created, 201);
});

app.put('/api/projects/:idOrSlug', async (c) => {
  if (!requireJson(c.req.raw)) return errorResponse('Use application/json', 415);
  const idOrSlug = c.req.param('idOrSlug');
  const payload = await parseBody<Partial<ProjectInput>>(c.req.raw);
  const updated = await updateProject(c.env.DB, idOrSlug, payload);
  if (!updated) return errorResponse('Not found', 404);
  return okResponse(updated);
});

app.post('/api/projects/:idOrSlug/publish', async (c) => {
  const idOrSlug = c.req.param('idOrSlug');
  const updated = await setProjectStatus(c.env.DB, idOrSlug, 'published');
  if (!updated) return errorResponse('Not found', 404);
  return okResponse(updated);
});

app.delete('/api/projects/:idOrSlug', async (c) => {
  const idOrSlug = c.req.param('idOrSlug');
  const success = await deleteProject(c.env.DB, idOrSlug);
  if (!success) return errorResponse('Not found', 404);
  return okResponse({ deleted: idOrSlug });
});

app.get('/api/posts', async (c) => {
  const posts = await listPosts(c.env.DB);
  return okResponse(posts);
});

app.get('/api/posts/:idOrSlug', async (c) => {
  const idOrSlug = c.req.param('idOrSlug');
  const post = await getPost(c.env.DB, idOrSlug);
  if (!post) return errorResponse('Not found', 404);
  return okResponse(post);
});

app.post('/api/posts', async (c) => {
  if (!requireJson(c.req.raw)) return errorResponse('Use application/json', 415);
  const payload = await parseBody<PostInput>(c.req.raw);
  if (!payload.slug || !payload.title || !payload.body) return errorResponse('slug, title, body are required');
  const created = await createPost(c.env.DB, payload);
  return okResponse(created, 201);
});

app.put('/api/posts/:idOrSlug', async (c) => {
  if (!requireJson(c.req.raw)) return errorResponse('Use application/json', 415);
  const idOrSlug = c.req.param('idOrSlug');
  const payload = await parseBody<Partial<PostInput>>(c.req.raw);
  const updated = await updatePost(c.env.DB, idOrSlug, payload);
  if (!updated) return errorResponse('Not found', 404);
  return okResponse(updated);
});

app.delete('/api/posts/:idOrSlug', async (c) => {
  const idOrSlug = c.req.param('idOrSlug');
  const success = await deletePost(c.env.DB, idOrSlug);
  if (!success) return errorResponse('Not found', 404);
  return okResponse({ deleted: idOrSlug });
});

app.notFound((c) => c.text('Not found', 404));

export default app;
